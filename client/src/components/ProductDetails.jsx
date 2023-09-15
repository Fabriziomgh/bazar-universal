import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';
import { CartPlusIcon, RatingIcon } from './Icons';
import Spinner from './Spinner';
import useCartContext from '../hooks/context-hook-cart';

const ProductDetails = () => {
   const { addToCart } = useCartContext();
   const [product, setProduct] = useState({});
   const [picture, setPicture] = useState('');
   const [loading, setLoading] = useState(false);
   const { id } = useParams();

   useEffect(() => {
      setLoading(true);
      getProductById(id)
         .then(({ data }) => {
            setProduct(data);
            setPicture(data.thumbnail);
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);
   if (loading) {
      return (
         <div className="flex justify-center p-8">
            <Spinner />
         </div>
      );
   }

   return (
      <div className="mx-auto">
         <div className="flex lg:flex-row flex-col justify-evenly p-4 gap-4 lg:gap-0">
            <picture className="lg:mx-0 mx-auto">
               <img
                  src={picture}
                  alt={product?.product}
                  className="rounded-full shadow  w-56 h-52"
               />
            </picture>
            <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 ">
               {product?.images?.map((image, i) => (
                  <picture
                     onClick={() => setPicture(image)}
                     key={i}
                     className="hover:scale-105 transition cursor-pointer"
                  >
                     <img
                        src={image}
                        className="w-20 h-20 shadow  rounded-full"
                     />
                  </picture>
               ))}
            </div>
         </div>
         <div>
            <h1 className="text-4xl text-center font-bold text-gray-900 dark:text-slate-200 p-2">
               {product?.product}
            </h1>
         </div>
         <div className="flex justify-evenly items-center">
            <div>
               <span className="block text-xl font-semibold text-gray-900 dark:text-slate-200">
                  ${product?.price}
               </span>
               <span className="block text-sm font-semibold text-gray-900 dark:text-slate-400">
                  {`${product?.stock} Unidades`}
               </span>
            </div>
            <div>
               <span className="bg-indigo-100 flex gap-1 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-indigo-800 ">
                  <RatingIcon />
                  {product.rating} / 5
               </span>
            </div>
         </div>
         <div className="text-center">
            <p className="text-lg text-left text-gray-900 dark:text-slate-200 p-4">
               {product?.description}
            </p>
            <div className="p-10 flex justify-center">
               <button
                  onClick={() => addToCart(product)}
                  className="text-white items-center gap-2 flex bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5  active:translate-y-0 hover:-translate-y-1 transition shadow-lg"
               >
                  <CartPlusIcon />
                  Añadir al carrito
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductDetails;
