import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const addToCart = (product) => {
      const findProduct = cart.findIndex((item) => item.id === product.id);
      if (findProduct === -1) {
         setCart(cart.concat({ ...product, qty: 1 }));
      } else {
         setCart(
            cart.map((item) =>
               item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            )
         );
      }
   };
   const removeToCart = (id) => {
      setCart((cart) => cart.filter((item) => item.id !== id));
   };
   console.log(cart);

   return (
      <CartContext.Provider
         value={{
            cart,
            addToCart,
            removeToCart,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
