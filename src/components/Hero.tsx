import Image from 'next/image';
import Link from 'next/link';
// import { categories } from '../utils/Categories'; // Si no lo usas, quítalo
import BentoStores, { Store } from './Stores';
import type { HeroCategory } from './HeroBanner';
import HeroBanner from './HeroBanner';
import { FaGlasses, FaHatCowboy, FaShoePrints, FaTshirt } from 'react-icons/fa';

export default function HeroCategories() {
  const storeCategories: HeroCategory[] = [
    { id: 1, title: 'Ropa', href: '/categoria/ropa', icon: FaTshirt },
    { id: 2, title: 'Calzado', href: '/categoria/calzado', icon: FaShoePrints },
    { id: 3, title: 'Lentes', href: '/categoria/lentes', icon: FaGlasses },
    { id: 4, title: 'Sombreros', href: '/categoria/sombreros', icon: FaHatCowboy },
  ];

  const myStores: Store[] = [
    {
      id: '1',
      name: 'RandiWay Principal',
      description: 'Nuestra tienda insignia con la colección completa de ropa y accesorios de temporada.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
      href: '/tienda/principal',
    },
    {
      id: '2',
      name: 'Outlet Urbano',
      description: 'Descuentos exclusivos en prendas seleccionadas.',
      imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop',
      href: '/tienda/outlet',
    },
    {
      id: '3',
      name: 'Colección Deportiva',
      description: 'Equípate para tu próximo entrenamiento.',
      imageUrl: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=800&auto=format&fit=crop',
      href: '/tienda/deportes',
    },
    {
      id: '4',
      name: 'Accesorios & Más',
      description: 'El toque final para tu estilo diario.',
      imageUrl: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop',
      href: '/tienda/accesorios',
    }
  ];

  return (

    <div className="w-full flex flex-col">
      <HeroBanner
        backgroundImage="/moda1.png"
        imageAlt=" RandiWay"
        preTitle="Ofertas"
        title="RandiWay"
        description="Descubre las últimas tendencias en moda urbana y casual."
        categories={storeCategories} 
      />
      <BentoStores stores={myStores}/>
    </div>
  );
}