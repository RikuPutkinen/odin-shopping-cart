import React, { useState } from "react";

export default function ShopItem({ title, id, onAdd }) {
  const [amount, setAmount] = useState(1);

  function onAmountChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div className="flex justify-between m-1 items-center">
      <div>
        <p>{title}</p>
      </div>
      <div className="flex gap-2 items-center">
        <label>
          Amount: 
          <input
            className="w-14"
            type="number"
            min="1"
            value={amount}
            onChange={(e) => onAmountChange(e)}
          />
        </label>
        <button
          className="bg-gray-400 rounded-md p-0.5"
          type="button"
          onClick={() => {onAdd(amount, id); setAmount(1)}}
        >Add to Cart</button>
      </div>
    </div>
  )
}