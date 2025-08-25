import { useCartStore } from "./cartStore.js";

let currentProducts = useCartStore((products) =>
  products.cart.map((e) => {
    return { price: e.price, quantity: e.quantity };
  })
);

// [{price:1,quantity:1},{price:2},{price:3},{price:2093},{price:2093},{price:2093},{price:2093},{price:2093},{price:2093}]

// console.log(currentProducts)  make sure that the currentProducts look like the array above


let checkOut = {
  totalPrice: 0,
  totalQuantity: 0,
};

currentProducts.forEach((element) => {
  checkOut.totalPrice += element.price;
  checkOut.totalQuantity += element.quantity;
});

console.log(checkOut);

// convert this into reduce later


export const FinalTotal = checkOut;