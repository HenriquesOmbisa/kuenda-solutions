'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BsWhatsapp } from 'react-icons/bs'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  const contactWhatsApp = () => {
    window.open(
      'https://wa.me/244923456789?text=Olá! Gostaria de saber mais sobre os vossos produtos.',
      '_blank'
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background minimalista */}
      <div className="absolute inset-0 bg-[url('/images/hero-background.avif')] opacity-20" />
      
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light text-white tracking-tight mb-6"
        >
          <span className="bg-gradient-to-r from-white to-slate-100 bg-clip-text text-transparent">
            Kuenda
          </span>
          <br />
          <span className="text-xl md:text-2xl font-light text-slate-300 tracking-widest mt-2 block">
            SOLUTIONS
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 font-light tracking-wide"
        >
          Soluções integradas em <span className="text-white font-medium">tecnologia</span>, 
          <span className="text-white font-medium"> escritório</span> e 
          <span className="text-white font-medium"> segurança</span> para o seu negócio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            onClick={contactWhatsApp}
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 text-base rounded-lg font-medium transition-all cursor-pointer duration-300 hover:shadow-lg"
          >
            <BsWhatsapp className="mr-3" size={18} />
            Contactar Agora
          </Button>

          <Button
            onClick={scrollToProducts}
            size="lg"
            variant="outline"
            className="border border-slate-400 bg-indigo-500 text-white border-none hover:bg-indigo-700 hover:text-white px-8 py-6 text-base rounded-lg font-medium backdrop-blur-sm transition-all cursor-pointer duration-300"
          >
            Conhecer Soluções
            <ArrowRight size={18} className="ml-3" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          onClick={scrollToProducts}
        >
          <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm font-light tracking-wide">Descobrir Mais</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5 border-r-2 border-b-2 border-slate-400 rotate-45"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}