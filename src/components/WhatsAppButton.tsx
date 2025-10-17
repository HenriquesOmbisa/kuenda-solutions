// components/WhatsAppButton.tsx
import { Phone } from 'lucide-react'
import { Product } from '@/types/product'
import { CartItem } from '@/store/cart-store'
import { Button } from '@/components/ui/button'
import { BsWhatsapp } from 'react-icons/bs';

interface WhatsAppButtonProps {
  product?: Product
  cartItems?: CartItem[]
  className?: string
}

export function WhatsAppButton({ product, cartItems, className = '' }: WhatsAppButtonProps) {
  const phoneNumber = '244941882592'
  
  const getMessage = () => {
    if (cartItems && cartItems.length > 0) {
      const itemsText = cartItems.map(item => 
        `• ${item.name} - ${item.quantity}x - ${(item.price * item.quantity).toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}`
      ).join('\n')
      
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
      
      return `Olá! Gostaria de encomendar os seguintes produtos:\n\n${itemsText}\n\n*Total: ${total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}*`
    }
    
    if (product) {
      return `Olá! Gostaria de encomendar: *${product.name}* - ${product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}`
    }
    
    return 'Olá! Gostaria de saber mais sobre os produtos e serviços da Kuenda Solutions'
  }

  const buttonText = cartItems 
    ? `Encomendar ${cartItems.reduce((sum, item) => sum + item.quantity, 0)} itens` 
    : product ? 'Encomendar Agora' : 'Contactar via WhatsApp'

  return (
    <Button
      asChild
      className={`bg-green-600 hover:bg-green-700 text-white ${className}`}
    >
      <a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(getMessage())}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2"
      >
        <BsWhatsapp size={24} />
        {buttonText}
      </a>
    </Button>
  )
}