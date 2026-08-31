import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../type/Product'; // Ajusta la ruta a tu interfaz

// Extendemos tu producto para agregarle la cantidad
export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean; // Controla si el panel lateral está abierto
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      
      addToCart: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          // Si ya existe, sumamos 1 a la cantidad
          set({
            items: currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            isOpen: true, // Abrimos el carrito visualmente para que el usuario vea el cambio
          });
        } else {
          // Si es nuevo, lo agregamos con cantidad 1
          set({ items: [...currentItems, { ...product, quantity: 1 }], isOpen: true });
        }
      },

      removeFromCart: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'randiway-cart-storage', // Nombre con el que se guardará en localStorage
    }
  )
);