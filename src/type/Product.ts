// Estructura principal del producto
export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string;
  originId?: string;
}


export interface ProductCardProps {
  product: Product;
}


export interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: Product[];
}