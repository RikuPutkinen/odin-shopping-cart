import { React, useState } from "react";
import CartBar from "./CartBar";
import ShopItem from "./ShopItem";

function calculateAmount(cart) {
  return cart.reduce(
    (prev, current) => prev + current.amount
    , 0);
}

function getItemAmount(cart, id) {
  const item = cart.find(elem => elem.id === id);
  return item ? item.id : 0;
}

const shopItems = [
  {
    id: '0',
    title: 'Keyboard'
  },
  {
    id: '1',
    title: 'Mouse'
  },
  {
    id: '2',
    title: 'Monitor'
  },
  {
    id: '3',
    title: 'Charging Cable'
  },
  {
    id: '4',
    title: 'Adapter'
  }
]

export default function Shop() {
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
      <CartBar amount={calculateAmount(cart)} />
      {shopItems.map(
        item => {
          return <ShopItem 
            key={item.id}
            title={item.title} 
            id={item.id}
            onAdd={handleCartAdd}
            />}
      )}
    </>
  )
}