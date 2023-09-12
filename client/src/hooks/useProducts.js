import { useState } from 'react';
import { getProductBySearch } from '../api/api';

const useProducts = () => {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);
   const [category, setCategory] = useState({});
   const [search, setSearch] = useState('');

   const countProductCategory = (data) => {
      const countCategory = {};
      data?.forEach((product) => {
         countCategory[product.category] =
            (countCategory[product.category] || 0) + 1;
      });

      return countCategory;
   };

   const getProducts = async (search) => {
      try {
         setProducts([]);
         setLoading(true);
         const response = await getProductBySearch(search);
         const data = await response.json();
         setProducts(data.products);
         setCategory(countProductCategory(data.products));
         setSearch(search);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   return {
      products,
      search,
      category,
      loading,
      getProducts,
   };
};

export default useProducts;
