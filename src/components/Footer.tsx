'use client'

import { motion } from 'framer-motion'
import { Logo } from './Logo'
import { Facebook, Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Logo />
            <p className="mt-4 text-gray-300 max-w-md leading-relaxed">
              Empresa angolana dedicada ao fornecimento de soluções integradas nas áreas 
              de consumíveis de escritório, equipamentos informáticos, equipamentos de 
              proteção e segurança, e serviços gráficos.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/henriques-ombisa/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Início', href: '/' },
                { name: 'Produtos', href: '/produtos' },
                { name: 'Sobre', href: '/sobre' },
                { name: 'Contacto', href: '/contacto' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contactos</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-indigo-400 flex-shrink-0" />
                <div>
                  <div>+244 941 882 592</div>
                  <div>+244 958 903 680</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                <span>kuendasolutions@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-indigo-400 flex-shrink-0 mt-1" />
                <span>Rua Comandante Bula, Miramar<br />Luanda, Angola</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
        >
          <p>&copy; {currentYear} Kuenda Solutions. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">NIF: 5002528525</p>

          {/* Creative credit line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-sm font-light text-gray-500"
          >
            Feito com <span className="text-red-500">💓</span> por{' '}
            <a
              href="https://henriquesombisa.github.io/portifolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 hover:text-indigo-300 transition-colors font-light"
            >
              henriquesOmbisa
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
