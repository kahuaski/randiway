import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../type/Product';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  hydrated: boolean;
  setHydrated: () => void;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
  clearCart: () => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      hydrated: false,

      setHydrated: () => set({ hydrated: true }),

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addToCart: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
  
          set({
            items: currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            isOpen: true, 
          });
        } else {

          set({ items: [...currentItems, { ...product, quantity: 1 }], isOpen: true });
        }
      },

  
updateQuantity: (productId, quantity) => {
  if (quantity < 1) return; // Evita cantidades negativas o cero
  set({
    items: get().items.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    ),
  });
},

      removeFromCart: (productId) => {
        set({ items: get().items.filter((item) => item.id !== productId) });
      },

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'randiway-cart-storage',
      partialize: (state) => ({
        items: state.items,
        isOpen: state.isOpen,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setHydrated();
        } else {
          useCartStore.setState({ hydrated: true });
        }
      },
    }
  )
);

export const rehydrateCart = () => {
  if (useCartStore.persist.hasHydrated()) {
    useCartStore.setState({ hydrated: true });
    return;
  }
  useCartStore.persist.onFinishHydration(() => {
    useCartStore.setState({ hydrated: true });
  });
  useCartStore.persist.rehydrate();
};