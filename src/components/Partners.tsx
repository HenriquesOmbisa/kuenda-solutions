/* eslint-disable @next/next/no-img-element */
// components/Partners.tsx
'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const partners = [
  {
    name: "HP",
    logo: "https://cdn.worldvectorlogo.com/logos/hp-1.svg",
    category: "Tecnologia"
  },
  {
    name: "Canon",
    logo: "https://cdn.worldvectorlogo.com/logos/canon-2.svg",
    category: "Impressão"
  },
  {
    name: "Dell",
    logo: "https://cdn.worldvectorlogo.com/logos/dell-1.svg",
    category: "Informática"
  },
  {
    name: "Samsung",
    logo: "https://cdn.worldvectorlogo.com/logos/samsung-2.svg",
    category: "Eletrônicos"
  },
  {
    name: "Intel",
    logo: "https://cdn.worldvectorlogo.com/logos/intel-2.svg",
    category: "Componentes"
  },
  {
    name: "Microsoft",
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
    category: "Software"
  },
  {
    name: "Logitech",
    logo: "https://cdn.worldvectorlogo.com/logos/logitech-2.svg",
    category: "Periféricos"
  },
  {
    name: "Epson",
    logo: "https://cdn.worldvectorlogo.com/logos/epson-1.svg",
    category: "Impressão"
  },
  {
    name: "Brother",
    logo: "https://cdn.worldvectorlogo.com/logos/brother-1.svg",
    category: "Impressão"
  },
  {
    name: "Lenovo",
    logo: "https://cdn.worldvectorlogo.com/logos/lenovo-1.svg",
    category: "Informática"
  }
]

export function Partners() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    const speed = 0.5 // Velocidade do scroll (mais lento)

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += speed
        
        // Reset scroll quando chegar ao final
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isPaused])

  // Duplicar os parceiros para criar efeito infinito contínuo
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-light text-slate-900 mb-4 tracking-tight">
            Nossos Parceiros
          </h2>
          <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-6"></div>
          <p className="text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Trabalhamos com as marcas mais reconhecidas do mercado para garantir 
            a melhor qualidade e performance nos nossos produtos
          </p>
        </motion.div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex items-center space-x-12 min-w-max">
            {duplicatedPartners.map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="group relative">
                  <div className="w-32 h-20 flex items-center justify-center p-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-20 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                    />
                  </div>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-slate-900 text-white text-xs font-light py-1 px-2 rounded whitespace-nowrap">
                      {partner.name}
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-2 border-r-2 border-b-2 border-l-transparent border-r-transparent border-b-slate-900"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile fallback - grid estático */}
        <div className="sm:hidden grid grid-cols-3 gap-8 mt-8">
          {partners.slice(0, 6).map((partner) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-8 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}