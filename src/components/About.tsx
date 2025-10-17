// components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Target, Award } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Qualidade Garantida",
    description: "Produtos e serviços de alta qualidade com garantia de satisfação"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Equipa Dedicada",
    description: "Acompanhamento personalizado para cada cliente"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Entregas Rápidas",
    description: "Cumprimento rigoroso de prazos com entrega gratuita"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Programa de Fidelidade",
    description: "Kuenda+ - Pontos que viram descontos e brindes"
  }
]

const advantages = [
  "Entrega gratuita à porta do cliente",
  "Pagamento a crédito/consignação para clientes assíduos",
  "Brindes gratuitos em datas especiais",
  "Garantia de substituição imediata",
  "Programa Kuenda+ com acumulação de pontos"
]

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Kuenda Solutions é uma empresa angolana, sediada em Luanda, 
            dedicada ao fornecimento de soluções integradas nas áreas de 
            consumíveis de escritório, equipamentos informáticos, equipamentos 
            de proteção e segurança, bem como serviços gráficos.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Vantagens de Trabalhar Connosco
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}