import { useCartStore } from "./cartStore.js";

  // const useFullName = () => useStore((state) => `${state.firstName} ${state.lastName}`);

  //   function MyComponent() {
  //     const fullName = useFullName();
  //     return <div>{fullName}</div>;
  //   }


  // const useTotalCart = useCartStore((state) => state.cart.map((e) => 
  //   e.price,
  //   e.quantity
  // ))

// // utils/checkout.js
// export function calculateCheckout(cart) {
//   return cart.reduce(
//     (acc, item) => {
//       acc.finalPrice += item.price * item.quantity;
//       acc.finalQuantity += item.quantity;
//       return acc;
//     },
//     { finalPrice: 0, finalQuantity: 0 }
//   );
// }


