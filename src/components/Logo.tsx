// components/Logo.tsx
'use client'
import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'light' | 'dark'
}

export function Logo({ variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-slate-900'
  const secondaryColor = variant === 'light' ? 'text-slate-300' : 'text-slate-600'
  const iconBg = variant === 'light' ? 'bg-white/10 backdrop-blur-sm' : 'bg-slate-900'
  const iconColor = variant === 'light' ? 'text-white' : 'text-white'

  return (
    <motion.div 
      className="flex items-center space-x-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex items-center justify-center w-10 h-10 ${iconBg} rounded-xl border border-white/10 shadow-lg`}>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={iconColor}
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M12 15v5m-3 0h6m4-11V7a4 4 0 0 0-8 0v2m8 0a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h12z" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`text-2xl font-light tracking-wider ${textColor} leading-none`}>KUENDA</span>
        <span className={`text-xs font-medium tracking-widest ${secondaryColor} -mt-1`}>SOLUTIONS</span>
      </div>
    </motion.div>
  )
}