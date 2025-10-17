// types/product.ts
export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'escritorio' | 'informatica' | 'seguranca' | 'graficos'
  image: string
}