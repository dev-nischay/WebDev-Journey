import { create } from "zustand";


export const  useCartStore = create((set) => ({
    cart:[],
    addToCart:(product) => set((state) => ({cart:[...state.cart,product]})),
    removeFromCart:(id) => set((state) => ({cart:state.filter((e) => e.id!==id)})),
    increaseQuantity:(id) => set((state) => ({cart:
        state.cart.map((e) => e.id===id ? {...e.cart,quantity:e.quantity + 1} : e)
    })) 
 
}))


export const {addToCart,removeFromCart,increaseQuantity} = useCartStore.getState()

