/* eslint-disable @next/next/no-img-element */
// components/ProductCard.tsx
'use client'

import { Product } from '@/types/product'
import { useCartStore } from '@/store/cart-store'
import { ShoppingCart, Eye, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category
    })
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      escritorio: 'bg-blue-50 text-blue-700 border-blue-200',
      informatica: 'bg-purple-50 text-purple-700 border-purple-200',
      seguranca: 'bg-orange-50 text-orange-700 border-orange-200',
      graficos: 'bg-green-50 text-green-700 border-green-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-50 text-gray-700 border-gray-200'
  }

  const getCategoryLabel = (category: string) => {
    const labels = {
      escritorio: 'Escritório',
      informatica: 'Informática',
      seguranca: 'Segurança',
      graficos: 'Gráficos'
    }
    return labels[category as keyof typeof labels] || category
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <motion.div
          className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300 cursor-pointer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
            {imageError ? (
              <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <AlertCircle size={32} className="mx-auto mb-2" />
                  <p className="text-xs font-light">Imagem não disponível</p>
                </div>
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={handleImageError}
              />
            )}
            
            {/* Category Badge */}
            <div className={`absolute top-2 left-2 px-2 py-1 rounded-lg text-xs font-medium border ${getCategoryColor(product.category)}`}>
              {getCategoryLabel(product.category)}
            </div>

            {/* Quick View Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <Button
                size="icon"
                className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-slate-900 hover:bg-slate-900 hover:text-white w-8 h-8"
              >
                <Eye size={14} />
              </Button>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-4">
            <h3 className="text-sm font-normal text-slate-900 mb-2 line-clamp-2 leading-tight group-hover:text-slate-700 transition-colors">
              {product.name}
            </h3>
            <p className="text-slate-600 text-xs mb-3 line-clamp-2 leading-relaxed font-light">
              {product.description}
            </p>
            
            {/* Price */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-light text-slate-900">
                {product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
              </span>
            </div>
            
            {/* Actions */}
            <div className="flex gap-2">
              <Button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-1 h-8 text-xs"
                size="sm"
              >
                <ShoppingCart size={12} />
                Add
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      {/* Product Detail Dialog */}
      <DialogContent className="max-w-[95vw] md:max-w-4xl mx-auto rounded-xl">
        <DialogTitle className="sr-only">Detalhes do Produto</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden">
            {imageError ? (
              <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                <div className="text-center text-slate-400">
                  <AlertCircle size={48} className="mx-auto mb-3" />
                  <p className="text-base font-light">Imagem não disponível</p>
                </div>
              </div>
            ) : (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col p-2 md:p-0">
            <div className={`inline-flex px-3 py-1 rounded-lg text-sm font-medium mb-4 border ${getCategoryColor(product.category)} self-start`}>
              {getCategoryLabel(product.category)}
            </div>
            
            <h2 className="text-xl md:text-2xl font-light text-slate-900 mb-4 leading-tight">{product.name}</h2>
            <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed font-light">{product.description}</p>
            
            <div className="text-2xl md:text-3xl font-light text-slate-900 mb-6">
              {product.price.toLocaleString('pt-AO', { style: 'currency', currency: 'AOA' })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Button
                onClick={() => {
                  addItem({
                    productId: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    image: product.image,
                    category: product.category
                  })
                  setDialogOpen(false)
                }}
                className="flex-1 flex items-center justify-center gap-2 py-3 text-sm md:text-base"
                size="lg"
              >
                <ShoppingCart size={18} />
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}