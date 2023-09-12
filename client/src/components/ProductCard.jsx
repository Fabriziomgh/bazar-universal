import { RatingIcon } from './Icons';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
   return (
      <Link to={`/product/${product.id}`}>
         <div className="w-full cursor-pointer max-w-[400px] transition-transform mx-auto bg-white border border-gray-200 rounded-lg shadow flex dark:bg-gray-800 dark:border-gray-700 hover:scale-105">
            <div className="w-2/4 flex items-center px-2 ">
               <img
                  className=" rounded-full  h-28 "
                  src={product.thumbnail}
                  alt={product.product}
               />
            </div>
            <div className="p-2 w-full flex flex-col">
               <div className="flex-grow">
                  <h5 className="text-xl font-semibold  text-gray-900 dark:text-slate-200">
                     {product.product}
                  </h5>
                  <p className="text-gray-900 text-left dark:text-slate-300">
                     {product.description}
                  </p>
               </div>
               <div className="flex items-center justify-between mt-2.5 mb-5">
                  <span className="bg-indigo-100 flex gap-1 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-slate-200 dark:text-indigo-800 ">
                     <RatingIcon />
                     {product.rating} / 5
                  </span>
                  <span className="text-3xl font-bold px-2.5 text-gray-900 dark:text-white">
                     ${product.price}
                  </span>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default ProductCard;
