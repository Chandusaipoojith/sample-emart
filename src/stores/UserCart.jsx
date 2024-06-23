import React from 'react';
import { useCart } from './context/CartContext';
import Navbar from './Components/Navbar';

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div>
        <h2 className='y-cart'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className='empty'>Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div className='cart-section' key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-details">
                  <h3>{item.product}</h3>
                  <h2>${item.price}</h2>
                  <h3>{item.model}</h3>
                  <div className="quantity">
                    <button
                      onClick={() => removeFromCart(item)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item)}>+</button>
                  </div>
                </div>
                <button
                  className='removeBtn'
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;