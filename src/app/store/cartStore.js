import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      //   addProduct: (product) => set({ cart: get().cart.concat(product) }),
      addProduct: (product) =>
        set((state) => {
          const alreadyExists = state.cart.find((p) => p.id === product.id);
          if (alreadyExists) {
            return {
              cart: state.cart.map((p) =>
                p.id === product.id ? { ...p, qty: p.qty + 1 } : p
              ),
            };
          }
          return { cart: [...state.cart, { ...product, qty: 1 }] };
        }),
    }),
    {
      name: "cart",
    }
  )
);
export default useCartStore;
