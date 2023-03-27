import React, { useState } from "react";

export default function ShopItem({ title, id, onAdd }) {
  const [amount, setAmount] = useState(1);

  function onAmountChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <label>
          Amount
          <input
            type="number"
            min="1"
            value={amount}
            onChange={(e) => onAmountChange(e)}
          />
        </label>
        <button
          type="button"
          onClick={() => {onAdd(amount, id); setAmount(1)}}
        >Add to Cart</button>
      </div>
    </div>
  )
}