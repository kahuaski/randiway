import { IconType } from 'react-icons';
import { PiTShirtFill, PiPantsFill } from 'react-icons/pi';

// 1. Usamos IconType como tipo de dato
interface Category {
  id: number;
  title: string;
  href: string;
  icon: IconType; 
}

export const categories: Category[] = [
  // 2. Pasamos el componente directamente SIN etiquetas < >
  { id: 1, title: "MyLove", href: "/categoria/jeans", icon: PiTShirtFill }, 
  { id: 2, title: "Moda", href: "/categoria/blusas", icon: PiPantsFill },
  { id: 3, title: "Lesly", href: "/categoria/camisetas", icon: PiTShirtFill },
  { id: 4, title: "Colección", href: "/categoria/shorts", icon: PiPantsFill },
  

];