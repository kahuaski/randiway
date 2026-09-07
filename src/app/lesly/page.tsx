"use client";

import ListStorelesly from '@/components/Lesly/ListStoreLesly'
import type { Product } from '../../type/Product';
import Header from '@/components/Header';

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Jeans Push Up Classic',
    description: 'Jeans de tiro alto con efecto push up. Tela elástica y cómoda para uso diario.',
    price: 35.00,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop',
    category: 'Ropa',
    originId: 'bogota'
  },
  {
    id: 'prod-2',
    name: 'Blusa de Seda Elegance',
    description: 'Blusa de seda suave con cuello en V. Ideal para reuniones formales o salidas nocturnas.',
    price: 28.00,
    imageUrl: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800&auto=format&fit=crop',
    category: 'Ropa',
    originId: 'cali'
  },
  {
    id: 'prod-3',
    name: 'Sneakers Urban Pro',
    description: 'Zapatillas urbanas con suela antideslizante y diseño ergonómico para largas caminatas.',
    price: 65.50,
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop',
    category: 'Calzado',
    originId: 'bogota'
  },
  {
    id: 'prod-4',
    name: 'Lentes Aviador Vintage',
    description: 'Gafas de sol estilo aviador con protección UV400 y marco metálico ligero.',
    price: 15.99,
    imageUrl: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    category: 'Lentes',
    originId: 'medellin'
  },
  {
    id: 'prod-5',
    name: 'Sombrero Fedora de Lana',
    description: 'Sombrero clásico de ala ancha fabricado en lana 100%. Perfecto para días de invierno.',
    price: 42.00,
    imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?q=80&w=800&auto=format&fit=crop',
    category: 'Sombreros',
    originId: 'bogota'
  },
  {
    id: 'prod-6',
    name: 'Short Denim Vintage',
    description: 'Shorts de jean con detalles rasgados y ruedo deshilachado. Estilo relajado de verano.',
    price: 22.00,
    imageUrl: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=800&auto=format&fit=crop',
    category: 'Ropa',
    originId: 'cali'
  },
  {
    id: 'prod-7',
    name: 'Camiseta Basic Cotton',
    description: 'Camiseta básica de algodón orgánico. Transpirable, suave y de excelente durabilidad.',
    price: 15.00,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    category: 'Ropa',
    originId: 'bogota'
  },
  {
    id: 'prod-8',
    name: 'Botines de Cuero Chelsea',
    description: 'Botines clásicos estilo Chelsea en cuero sintético con elásticos laterales para fácil calce.',
    price: 55.00,
    imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e65329e324?q=80&w=800&auto=format&fit=crop',
    category: 'Calzado',
    originId: 'medellin'
  }
];

export default function page() {
  return (
    <div>
        <Header/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
  {mockProducts.map((unSoloProducto) => (
    <ListStorelesly 
      key={unSoloProducto.id} 
      product={unSoloProducto} 
    />
  ))}
</div>
    </div>
  )
}
