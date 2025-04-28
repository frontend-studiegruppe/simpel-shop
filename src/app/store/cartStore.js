import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addProduct: (product) => set({ cart: get().cart.concat(product) + 1 }),
    }),
    {
      name: "cart",
    }
  )
);
export default useCartStore;
