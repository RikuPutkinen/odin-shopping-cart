import React from "react";

export default function CartBar({ amount }) {
  return (
    <div className="bg-gray-400 p-2 flex justify-between items-center sticky top-0">
      <span>Items in cart: {amount}</span>
      <button type="button" className="bg-gray-300 rounded-md p-1">Checkout</button>
    </div>
  )
}