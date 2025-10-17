// components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import { Logo } from './Logo'
import { Cart } from './Cart'
import { Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Contacto', href: '/contacto' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
    } else {
      setIsScrolled(true)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const navbarClass = pathname === '/' && !isScrolled
    ? "bg-transparent backdrop-blur-0 shadow-none border-none"
    : "bg-white/75 backdrop-blur-md shadow-sm border-b border-slate-200/80"

  const textClass = pathname === '/' && !isScrolled ? "text-white" : "text-slate-700"
  const hoverClass = pathname === '/' && !isScrolled ? "hover:text-white" : "hover:text-slate-900"
  const activeClass = pathname === '/' && !isScrolled ? "text-white" : "text-slate-900"

  return (
    <motion.nav 
      className={`${pathname === '/' && !isScrolled ? "fixed w-full" : "sticky"} top-0 z-50 transition-all duration-500 ${navbarClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo variant={pathname === '/' && !isScrolled ? 'light' : 'dark'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 font-light tracking-wide transition-colors duration-300 group ${textClass} ${hoverClass} ${
                  pathname === item.href ? `font-medium ${activeClass}` : ''
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  pathname === '/' && !isScrolled ? 'bg-white' : 'bg-slate-900'
                } ${pathname === item.href ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Cart variant={pathname === '/' && !isScrolled ? 'light' : 'default'} />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-4 md:hidden">
            <Cart variant={pathname === '/' && !isScrolled ? 'light' : 'default'} />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button className={`p-2 transition-colors ${textClass}`}>
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-md">
                <div className="flex flex-col h-full p-4">
                  <div className="flex items-center justify-between mb-8">
                    <Logo variant="dark" />
                    <button 
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-slate-700"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="py-2 text-lg font-light text-slate-700 hover:text-slate-900 border-b border-slate-100 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}