import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (i) => i.id === item.id && i.model === item.model
    );
    if (existingItem) {
      const updatedCartItems = cartItems.map((i) =>
        i.id === item.id && i.model === item.model
          ? { ...i, quantity: i.quantity + 1 }
          : i
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    alert("Item has been added");
  };

  const removeFromCart = (item) => {
    const existingItem = cartItems.find(
      (i) => i.id === item.id && i.model === item.model
    );
    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((i) => i.id !== item.id || i.model !== item.model));
    } else {
      const updatedCartItems = cartItems.map((i) =>
        i.id === item.id && i.model === item.model
          ? { ...i, quantity: i.quantity - 1 }
          : i
      );
      setCartItems(updatedCartItems);
    }
    alert("Item has been removed");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
