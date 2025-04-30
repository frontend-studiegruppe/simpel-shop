import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      subtotal: 0,
      total: 0,
      delivery: 39,
      cartQuantity: 0,

      addProduct: (product) => {
        const discountedPrice =
          product.discountPercentage > 10
            ? Math.round(product.price * (1 - product.discountPercentage / 100))
            : product.price;

        const alreadyExists = get().cart.find((p) => p.id === product.id);
        let updatedCart;
        if (alreadyExists) {
          updatedCart = get().cart.map((p) =>
            p.id === product.id
              ? { ...p, qty: p.qty + (product.qty || 1), discountedPrice } // Gem discountedPrice
              : p
          );
        } else {
          updatedCart = [
            ...get().cart,
            {
              ...product,
              qty: product.qty || 1,
              discountedPrice, // Gem discountedPrice
            },
          ];
        }

        set({ cart: updatedCart });
        get().calculateSubtotal();
        get().calculateCartQuantity();
      },

      updateProductQuantity: (id, newQuantity) => {
        if (newQuantity <= 0) {
          set((state) => ({
            cart: state.cart.filter((product) => product.id !== id),
          }));
        } else {
          set((state) => ({
            cart: state.cart.map((product) =>
              product.id === id ? { ...product, qty: newQuantity } : product
            ),
          }));
        }
        get().calculateSubtotal();
        get().calculateCartQuantity();
      },

      removeProduct: (id) => {
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        }));
        get().calculateSubtotal();
        get().calculateCartQuantity();
      },

      clearCart: () => {
        set({ cart: [] });
        get().calculateSubtotal();
        get().calculateCartQuantity();
      },

      calculateSubtotal: () => {
        let subtotal = get().cart.reduce((acc, product) => {
          const discountedPrice = product.discountPercentage
            ? product.price * (1 - product.discountPercentage / 100)
            : product.price;
          return acc + discountedPrice * product.qty;
        }, 0);

        const delivery = get().delivery;
        let total = subtotal + delivery;

        set({ subtotal: Math.ceil(subtotal), total: Math.ceil(total) });
      },

      calculateCartQuantity: () => {
        const totalQty = get().cart.reduce(
          (acc, product) => acc + product.qty,
          0
        );
        set({ cartQuantity: totalQty });
      },
    }),
    {
      name: "cart",
    }
  )
);

export default useCartStore;
