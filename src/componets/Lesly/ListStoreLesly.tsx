import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa';

export interface Product {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ListStorelesly({ product }: ProductCardProps) {
  // Extraemos la función addToCart de nuestro store
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    e.stopPropagation();
    
    // Ejecutamos la función de Zustand pasando el producto completo
    addToCart(product);
  };
  return (
    <div className="group relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      
      {/* 1. Área superior: Imagen (Navega al detalle) */}
      <Link href={`/producto/${product.id}`} className="relative aspect-[4/5] w-full overflow-hidden bg-gray-50">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge de categoría (opcional) */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm uppercase tracking-wider">
            {product.category}
          </span>
        )}
      </Link>

      {/* 2. Área inferior: Textos y Acciones */}
      <div className="flex flex-col flex-1 p-4 md:p-5">
        {/* Título clickeable */}
        <Link href={`/producto/${product.id}`} className="block">
          <h3 className="font-bold text-gray-900 text-lg line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        {/* Descripción */}
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Precio y Botón de Carrito alineados al fondo */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-emerald-600 text-white p-3 rounded-xl transition-colors duration-300 active:scale-95"
            aria-label="Agregar al carrito"
          >
            <FaCartPlus className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}