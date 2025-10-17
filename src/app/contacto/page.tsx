// components/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Target } from 'lucide-react'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { useState } from 'react'

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    details: ["+244 941 882 592", "+244 958 903 680"],
    link: "tel:+244941882592",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["kuendasolutions@gmail.com"],
    link: "mailto:kuendasolutions@gmail.com",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Rua Comandante Bula, Miramar", "Luanda, Angola"],
    color: "bg-green-50 text-green-600"
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    details: ["Segunda - Sexta: 8:00 - 18:00", "Sábado: 9:00 - 13:00"],
    color: "bg-orange-50 text-orange-600"
  }
]

const supportFeatures = [
  {
    icon: MessageCircle,
    title: "Suporte Rápido",
    description: "Resposta em até 2 horas durante o horário comercial"
  },
  {
    icon: Users,
    title: "Equipa Dedicada",
    description: "Profissionais especializados para cada área de negócio"
  },
  {
    icon: Target,
    title: "Soluções Personalizadas",
    description: "Análise detalhada das suas necessidades específicas"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio
    setTimeout(() => {
      const message = `*Nova Mensagem do Website*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Assunto:* ${formData.subject}%0A*Mensagem:* ${formData.message}`
      window.open(`https://wa.me/244941882592?text=${message}`, '_blank')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="relative min-h-screen bg-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-800/5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-900/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-light mb-6">
            <MessageCircle className="w-4 h-4" />
            Vamos Conversar
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Transformar
            </span>{' '}
            o Seu Negócio?
          </h1>
          <div className="w-24 h-0.5 bg-slate-300 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Estamos aqui para ajudar. Entre em contacto connosco e descubra como as nossas 
            soluções podem impulsionar o seu sucesso empresarial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Support Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Porque Escolher-nos?</h3>
              
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-light text-slate-900 mb-2 text-lg">{feature.title}</h4>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Informações de Contacto</h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-light text-slate-900 mb-2">{item.title}</h4>
                            {item.details.map((detail, idx) => (
                              <p key={idx} className="text-slate-600 text-sm font-light mb-1 last:mb-0">
                                {item.link && idx === 0 ? (
                                  <a 
                                    href={item.link} 
                                    className="hover:text-slate-900 transition-colors duration-300 hover:underline"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center pt-6"
            >
              <div className="mb-6">
                <h4 className="text-lg font-light text-slate-900 mb-3">
                  Conversa Rápida no WhatsApp
                </h4>
                <p className="text-slate-600 text-sm font-light mb-4">
                  Resposta imediata durante o horário comercial
                </p>
              </div>
              <WhatsAppButton 
                className="w-full max-w-xs mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-light text-slate-900 mb-3">Envie-nos uma Mensagem</h3>
                  <div className="w-16 h-0.5 bg-slate-300 mx-auto mb-4" />
                  <p className="text-slate-600 font-light">
                    Preencha o formulário abaixo e entraremos em contacto consigo brevemente
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-light text-slate-700">
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        className="bg-white border-slate-300 focus:border-slate-900 font-light"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-light text-slate-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="bg-white border-slate-300 focus:border-slate-900 font-light"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-sm font-light text-slate-700">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+244 XXX XXX XXX"
                        className="bg-white border-slate-300 focus:border-slate-900 font-light"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="subject" className="text-sm font-light text-slate-700">
                        Assunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Qual é o assunto?"
                        required
                        className="bg-white border-slate-300 focus:border-slate-900 font-light"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-light text-slate-700">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva a sua necessidade ou projecto..."
                      rows={6}
                      required
                      className="bg-white border-slate-300 focus:border-slate-900 font-light resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-light text-lg transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Enviando...
                        </div>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-3" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-center text-slate-500 text-xs font-light">
                    Ao enviar este formulário, concorda com os nossos termos e condições.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}