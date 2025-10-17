// components/Cart.tsx
'use client'

import { useState } from 'react'
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from './WhatsAppButton'
import { motion, AnimatePresence } from 'framer-motion'

interface CartProps {
  variant?: 'light' | 'default'
}

export function Cart({ variant = 'default' }: CartProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { items, removeItem, updateQuantity, getTotal, getTotalItems, clearCart } = useCartStore()

  const total = getTotal()
  const totalItems = getTotalItems()

  const buttonClass = variant === 'light' 
    ? "text-white hover:bg-white/10" 
    : "text-slate-700 hover:bg-slate-100"

  const badgeClass = variant === 'light'
    ? "bg-white text-slate-900"
    : "bg-slate-900 text-white"

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={`relative ${buttonClass}`}>
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 && (
            <motion.span 
              className={`absolute -top-1 -right-1 ${badgeClass} text-xs rounded-full w-5 h-5 flex items-center justify-center`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              {totalItems}
            </motion.span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md p-4">
        <SheetTitle className="flex items-center gap-2 text-lg font-light">
          <ShoppingCart className="h-5 w-5" />
          Carrinho ({totalItems})
        </SheetTitle>
        
        <div className="flex flex-col h-full mt-4">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence>
              {items.length === 0 ? (
                <motion.div 
                  className="text-center text-slate-500 py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                  <p className="font-light">Seu carrinho está vazio</p>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.productId}
                      className="flex gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate text-slate-900">{item.name}</h3>
                        <p className="text-slate-600 font-semibold text-sm">
                          {item.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                        </p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 border-slate-300"
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm text-slate-700">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6 border-slate-300"
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                            onClick={() => removeItem(item.productId)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <motion.div 
              className="border-t border-slate-200 pt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex justify-between text-lg font-semibold">
                <span className="text-slate-900">Total:</span>
                <span className="text-slate-900">
                  {total.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
                </span>
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Limpar
                </Button>
                <WhatsAppButton cartItems={items} />
              </div>
            </motion.div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}