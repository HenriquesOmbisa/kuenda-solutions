'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard } from '@/components/ProductCard'
import { products, categories } from '@/data/products'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Package } from 'lucide-react'

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Filtro por categoria
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const activeCategoryName = activeCategory === 'all' 
    ? 'Todos os Produtos' 
    : categories.find(cat => cat.id === activeCategory)?.name

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      const newScrollLeft = scrollContainerRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount)
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section className="min-h-screen bg-slate-50">
      {/* Header Elegante */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-light mb-6">
          <Package className="w-4 h-4" />
          Produtos Kuenda Solutions
        </div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Nossos Produtos
          </h1>
          <div className="w-24 h-0.5 bg-slate-300 mx-auto mb-2"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Soluções completas em tecnologia, escritório e segurança para impulsionar o seu negócio
          </p>
        </motion.div>
      </div>

      {/* Categorias com Scroll Horizontal Mobile */}
      <div className="sticky top-13 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl md:flex gap-4 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-4">
          {/* Desktop Categories */}
          <div className="hidden sm:flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              className={`rounded-full font-light ${activeCategory === 'all' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-300'}`}
            >
              Todos os Produtos
            </Button>
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full flex items-center gap-2 font-light ${activeCategory === category.id ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-300'}`}
                >
                  <IconComponent size={16} />
                  {category.name}
                </Button>
              )
            })}
          </div>

          {/* Mobile Categories with Horizontal Scroll */}
          <div className="sm:hidden relative">
            {/* Left Arrow */}
            {showLeftArrow && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft size={16} className="text-slate-600" />
              </button>
            )}

            {/* Right Arrow */}
            {showRightArrow && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-white border border-slate-200 rounded-full shadow-sm flex items-center justify-center hover:bg-slate-50 transition-colors"
              >
                <ChevronRight size={16} className="text-slate-600" />
              </button>
            )}

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScrollButtons}
              className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 px-6"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <Button
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('all')}
                className={`whitespace-nowrap flex-shrink-0 font-light ${activeCategory === 'all' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-300'}`}
              >
                Todos
              </Button>
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setActiveCategory(category.id)}
                    className={`whitespace-nowrap flex items-center gap-2 flex-shrink-0 font-light ${activeCategory === category.id ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border-slate-300'}`}
                  >
                    <IconComponent size={14} />
                    {category.name}
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Results Counter */}
          <div className="text-center mt-4 md:mt-0">
            <p className="text-sm text-slate-600 font-light">
              <span className="font-medium">{filteredProducts.length}</span> produtos encontrados
              {activeCategory !== 'all' && (
                <span> em <span className="font-medium">{activeCategoryName}</span></span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants} layout>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChevronRight size={40} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-light text-slate-900 mb-3">
              Nenhum produto encontrado
            </h3>
            <p className="text-slate-600 font-light mb-6 max-w-md mx-auto">
              Não há produtos disponíveis na categoria {activeCategoryName?.toLowerCase()}.
            </p>
            {activeCategory !== 'all' && (
              <Button
                onClick={() => setActiveCategory('all')}
                variant="outline"
                className="border-slate-300 font-light"
              >
                Ver Todos os Produtos
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}