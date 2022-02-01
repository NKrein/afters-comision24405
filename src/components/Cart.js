import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../context/CartProvider'
import CartItem from './CartItem';

const Cart = () => {

  const { cart, clearCart } = useContext(cartContext);

  return (
    <>
      {cart.length === 0 ?
        <div>
          <p>Empty Cart</p>
          <Link to='/'>Go to shop!</Link>
        </div>
        :
        <div>
          {cart.map(element => <CartItem key={element.item.id} prod={element} />)}
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      }
    </>
  )
}

export default Cart
