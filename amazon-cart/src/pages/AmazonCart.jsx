import { useEffect, useState } from "react";
import { removeFromCart,increaseQuantity,useCartStore,decreaseQuantity} from "../store/cartStore";


export default function ShoppingCart() {
const cart = useCartStore((state) => state.cart)
 const { finalPrice, finalQuantity } = useCartStore((state) => state.checkout);



return (
  <div className="min-h-screen bg-gray-100 flex justify-center p-6">
    <div className="w-full max-w-6xl flex gap-6">
      {/* Left - Cart Items */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Shopping Cart</h2>

        {cart.length > 0 ? (
          cart.map((product, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between ${
                idx !== cart.length - 1
                  ? "border-b border-gray-200 pb-4 mb-4"
                  : ""
              }`}
            >
                <div className="flex gap-4">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 rounded object-contain"
                />
                <div>
                    <p className="font-medium">{product.title}</p>
                    <p className="text-green-600 text-sm">In stock</p>
                    <div className="flex items-center mt-2 gap-2">
                    <button className="px-2 py-1 border rounded" onClick={() => decreaseQuantity(product.id)}>-</button>
                    <span>{product.quantity}</span>
                    <button className="px-2 py-1 border rounded" onClick={() => increaseQuantity(product.id)} >+</button>
                    <button className="text-blue-600 text-sm ml-4" onClick={() => removeFromCart(product.id)}>Delete</button>
                    </div>
                </div>
                </div> 
              <p className="font-semibold">{product.price}</p>
            </div>
          ))
        ) : (
          <div>Cart Empty</div>
        )}
      </div>

      {/* Right - Order Summary */}
      <div className="w-72 bg-white rounded-lg shadow p-6 h-fit">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between text-sm mb-2">
          <p>Items ():</p>
          <p>2349</p>
        </div>
        <div className="flex justify-between font-semibold mb-4">
          <p>Order Total:</p>
          <p>{finalPrice}</p>
        </div>
        <button className="w-full bg-yellow-400 hover:bg-yellow-500 font-semibold py-2 rounded">
          Proceed to Buy
        </button>
      </div>
    </div>
  </div>
);

}