// app/page.tsx (atualizado)
import { Hero } from '@/components/Hero'
import { Partners } from '@/components/Partners'
import { ProductCard } from '@/components/ProductCard'
import { products } from '@/data/products'
import { 
  Truck, 
  Gift, 
  CreditCard, 
  Shield,
  ArrowRight,
  Star,
  Award,
} from 'lucide-react'

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  const features = [
    {
      icon: Truck,
      title: 'Entregas Rápidas',
      description: 'Cumprimento rigoroso de prazos com entrega gratuita à sua porta'
    },
    {
      icon: Gift,
      title: 'Programa Kuenda+',
      description: 'Acumule pontos e troque por descontos, serviços gráficos ou brindes'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Flexível',
      description: 'Leva agora, paga depois para os nossos clientes mais assíduos'
    },
    {
      icon: Shield,
      title: 'Garantia Total',
      description: 'Substituição imediata se o produto se encontrar danificado'
    }
  ]

  const stats = [
    {
      icon: Award,
      number: '500+',
      label: 'Clientes Satisfeitos'
    },
    {
      icon: Star,
      number: '4.9',
      label: 'Avaliação Média'
    },
    {
      icon: Truck,
      number: '24h',
      label: 'Entrega Expressa'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Garantia'
    }
  ]

  return (
    <main className='relative top-0 min-h-screen'>
      <Hero />
      
      {/* Stats Section */}
      <section className="bg-slate-900 py-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-slate-300" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-300 text-sm font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-4 tracking-tight">
            Produtos em Destaque
          </h2>
          <div className="w-24 h-0.5 bg-slate-300 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Descubra nossa seleção premium de produtos de alta qualidade para impulsionar o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="/produtos" 
            className="group inline-flex items-center px-6 py-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg font-light text-sm transition-all duration-300 hover:shadow-xl tracking-wide"
          >
            Explorar Catálogo Completo
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Partners */}
      <Partners />

      {/* Features */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-900 mb-4 tracking-tight">
              Porque Escolher a Kuenda Solutions?
            </h2>
            <div className="w-24 h-0.5 bg-slate-300 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              Excelência e compromisso em cada solução que oferecemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200/80 hover:border-slate-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-lg mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-4 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Pronto para Transformar o Seu Negócio?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Entre em contacto connosco e descubra como as nossas soluções podem impulsionar o seu sucesso
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-lg font-light text-lg transition-all duration-300 hover:shadow-lg tracking-wide"
          >
            Contactar Agora
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}