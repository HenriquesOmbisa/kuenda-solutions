// data/products.ts
import { Product } from '@/types/product'
import { 
  FileText, 
  PenTool, 
  Calendar,
  Monitor,
  Printer,
  Laptop,
  HardHat,
  Shield,
  Glasses,
  CreditCard,
  Image,
  Flag
} from 'lucide-react'

export const products: Product[] = [
  // Consumíveis de Escritório
  {
    id: '1',
    name: 'Papel A4 Premium 75g',
    description: 'Resma de papel A4 75g, 500 folhas, alta qualidade para impressão profissional',
    price: 3500,
    category: 'escritorio',
    image: 'https://images.unsplash.com/photo-1601534620169-84c6d8ab5a5a?w=400'
  },
  {
    id: '2',
    name: 'Caneta Esferográfica Executiva',
    description: 'Pacote com 12 canetas esferográficas azuis, escrita suave e design profissional',
    price: 1200,
    category: 'escritorio',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400'
  },
  {
    id: '3',
    name: 'Agenda Executiva 2024',
    description: 'Agenda profissional em couro sintético, organização semanal e mensal',
    price: 4500,
    category: 'escritorio',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400'
  },
  // Equipamentos Informáticos
  {
    id: '4',
    name: 'Computador Desktop Profissional',
    description: 'Computador desktop completo, Intel i5, 8GB RAM, SSD 256GB, ideal para escritório',
    price: 185000,
    category: 'informatica',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400'
  },
  {
    id: '5',
    name: 'Monitor LED 24" Full HD',
    description: 'Monitor LED 24 polegadas, Full HD, HDMI/VGA, ideal para trabalho profissional',
    price: 45000,
    category: 'informatica',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400'
  },
  {
    id: '6',
    name: 'Impressora Multifuncional',
    description: 'Impressora laser multifuncional, impressão/cópia/digitalização, Wi-Fi',
    price: 75000,
    category: 'informatica',
    image: 'https://images.unsplash.com/photo-1558756520-22cfe5d382ca?w=400'
  },
  // Equipamentos de Proteção
  {
    id: '7',
    name: 'Capacete de Segurança Industrial',
    description: 'Capacete de segurança industrial, resistente e durável, ajustável',
    price: 3500,
    category: 'seguranca',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400'
  },
  {
    id: '8',
    name: 'Luvas de Proteção',
    description: 'Luvas de proteção industrial, resistentes a cortes e produtos químicos',
    price: 1800,
    category: 'seguranca',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400'
  },
  {
    id: '9',
    name: 'Óculos de Proteção',
    description: 'Óculos de proteção profissional, proteção UV e anti-riscos',
    price: 2200,
    category: 'seguranca',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'
  },
  // Serviços Gráficos
  {
    id: '10',
    name: 'Cartão de Visita Premium',
    description: 'Pacote de 100 cartões de visita, impressão colorida ambos lados, acabamento premium',
    price: 7500,
    category: 'graficos',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400'
  },
  {
    id: '11',
    name: 'Flyer Promocional A5',
    description: 'Flyer promocional A5, papel couché 150g, impressão colorida frente e verso',
    price: 3000,
    category: 'graficos',
    image: 'https://images.unsplash.com/photo-1565689228864-0cbd31b6d37f?w=400'
  },
  {
    id: '12',
    name: 'Banner Publicitário',
    description: 'Banner publicitário 2x1 metros, material durável, impressão de alta resolução',
    price: 12000,
    category: 'graficos',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400'
  }
]

export const categories = [
  {
    id: 'escritorio',
    name: 'Consumíveis de Escritório',
    description: 'Materiais essenciais para o dia a dia do seu escritório',
    icon: FileText,
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    id: 'informatica',
    name: 'Equipamentos Informáticos',
    description: 'Tecnologia e equipamentos para modernizar seu negócio',
    icon: Monitor,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'seguranca',
    name: 'Proteção e Segurança',
    description: 'Equipamentos de proteção para garantir a segurança da sua equipa',
    icon: HardHat,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    id: 'graficos',
    name: 'Serviços Gráficos',
    description: 'Soluções gráficas profissionais para sua marca',
    icon: Image,
    color: 'bg-green-100 text-green-600'
  }
]