import { React, useState } from "react";
import CartBar from "./CartBar";
import ShopItem from "./ShopItem";

function calculateAmount(cart) {
  return cart.reduce(
    (prev, current) => prev + current.amount
    , 0);
}

export default function Shop({ shopItems }) {
  const [cart, setCart] = useState([]);

  function handleCartAdd(amount, id) {
    const amountInt = parseInt(amount);
    const cartItem = cart.find(elem => elem.id === id);
    if (!cartItem) setCart([...cart, {id: id, amount: amountInt}])
    else setCart(
      cart.map(
        elem => {
          if (elem.id === id) return {...elem, amount: elem.amount + amountInt}
          else return elem
        }
      )
    )
  }

  return (
    <>
      <h1 className="text-3xl font-bold my-4">Shop</h1>
      <CartBar amount={calculateAmount(cart)} />
      <ul>
        {shopItems.map(
          item => {
            return <li key={item.id}> 
                <ShopItem
                title={item.title}
                id={item.id}
                onAdd={handleCartAdd}
                />
              </li>}
        )}
      </ul>
    </>
  )
}