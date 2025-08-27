import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((e) => e.id !== id) })),
  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((e) =>
        e.id === id ? { ...e, quantity: e.quantity + 1 } : e
      ),
    })),
  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((e) =>
        e.id === id && e.quantity > 1
          ? { ...e, quantity: e.quantity - 1 }
          : e
      ),
    })),

  // Derived / computed value
  get checkout() {
    return get().cart.reduce(
      (acc, item) => {
        acc.finalPrice += item.price * item.quantity;
        acc.finalQuantity += item.quantity;
        return acc;
      },
      { finalPrice: 0, finalQuantity: 0 }
    );
  },
}));


export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity} = useCartStore.getState()




