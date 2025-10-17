// components/About.tsx
'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Target, Award, Shield, Clock, Heart, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Produtos e serviços de alta qualidade com garantia total de satisfação e suporte contínuo"
  },
  {
    icon: Users,
    title: "Equipa Especializada",
    description: "Profissionais dedicados oferecendo acompanhamento personalizado para cada cliente"
  },
  {
    icon: Clock,
    title: "Entregas Rápidas",
    description: "Cumprimento rigoroso de prazos com entrega gratuita e tracking em tempo real"
  },
  {
    icon: Award,
    title: "Programa Kuenda+",
    description: "Sistema de fidelidade com pontos que se transformam em descontos e benefícios exclusivos"
  }
]

const values = [
  {
    icon: Heart,
    title: "Compromisso",
    description: "Dedicamo-nos integralmente ao sucesso dos nossos clientes"
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Sempre à procura das melhores soluções tecnológicas"
  },
  {
    icon: Target,
    title: "Excelência",
    description: "Padrões elevados de qualidade em tudo o que fazemos"
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Construímos relações duradouras baseadas na confiança"
  }
]

const advantages = [
  "Entrega gratuita à porta do cliente em Luanda",
  "Pagamento flexível e consignação para clientes assíduos",
  "Brindes personalizados em datas especiais e campanhas",
  "Garantia de substituição imediata de produtos",
  "Programa Kuenda+ com acumulação de pontos progressiva",
  "Suporte técnico especializado pós-venda",
  "Orçamentação rápida e transparente",
  "Soluções personalizadas para cada negócio"
]

export default function About() {
  return (
    <section id="sobre" className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-800/5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-light mb-6">
            <Shield className="w-4 h-4" />
            Sobre a Kuenda Solutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Transformando Negócios com{' '}
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Excelência
            </span>
          </h1>
          <div className="w-24 h-0.5 bg-slate-300 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            A Kuenda Solutions é uma empresa angolana de referência, sediada em Luanda, 
            especializada em fornecer soluções integradas de alta qualidade nas áreas de 
            consumíveis de escritório, equipamentos informáticos, segurança corporativa 
            e serviços gráficos personalizados.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Nossa Missão</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Fornecer soluções tecnológicas e de escritório inovadoras que impulsionem 
                a produtividade e eficiência dos nossos clientes, superando expectativas 
                através de produtos de qualidade e serviço personalizado.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Nossa Visão</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Ser a empresa líder em Angola em soluções integradas para escritórios e 
                negócios, reconhecida pela excelência do serviço, inovação constante e 
                compromisso com o desenvolvimento do sector empresarial angolano.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-900 mb-4">O Que Nos Diferencia</h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto font-light">
              Excelência em cada detalhe, compromisso em cada solução
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-white mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-light text-slate-900 mb-3 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-900 mb-4">Nossos Valores</h2>
            <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-light text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Advantages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-light text-slate-900 mb-4">
                  Vantagens Exclusivas
                </h2>
                <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-6" />
                <p className="text-slate-600 max-w-2xl mx-auto font-light">
                  Benefícios pensados para o sucesso do seu negócio
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300 group"
                  >
                    <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-700 font-light leading-relaxed">
                      {advantage}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}