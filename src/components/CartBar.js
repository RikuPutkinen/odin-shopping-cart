import React from "react";

export default function CartBar({ amount }) {
  return (
    <div>
      <span>Items in cart: {amount}</span>
      <button type="button">Checkout</button>
    </div>
  )
}