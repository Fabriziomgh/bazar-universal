import { createContext } from 'react';
import useProducts from '../hooks/useProducts';
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
   const { products, search, category, loading, getProducts } = useProducts();
   return (
      <ProductsContext.Provider
         value={{
            products,
            search,
            category,
            loading,
            getProducts,
         }}
      >
         {children}
      </ProductsContext.Provider>
   );
};
