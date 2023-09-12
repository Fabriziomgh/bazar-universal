import { TrashIcon } from './Icons';
import useCartContext from '../hooks/context-hook-cart';

const CartItem = ({ product }) => {
   const { removeToCart } = useCartContext();
   return (
      <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
         <div className="flex w-full space-x-2 sm:space-x-4">
            <img
               className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
               src={product.thumbnail}
               alt="Polaroid camera"
            />
            <div className="flex flex-col justify-between w-full pb-4">
               <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                     <h3 className="text-lg font-semibold leadi sm:pr-8">
                        {product.product}
                     </h3>
                     <p className="text-sm dark:text-gray-200">
                        {product.brand}
                     </p>
                     <p className="text-sm dark:text-gray-300">
                        Precio: ${product.price}
                     </p>
                  </div>
                  <div className="text-right">
                     <p className="text-lg font-semibold">
                        Total: ${product.price * product.qty}
                     </p>
                     <p className="text-sm  dark:text-gray-600">
                        Unidades: {product.qty}
                     </p>
                  </div>
               </div>
               <div className="flex text-sm divide-x">
                  <button
                     onClick={() => removeToCart(product.id)}
                     type="button"
                     className="flex items-center px-2 py-1 pl-0 space-x-1"
                  >
                     <TrashIcon />
                     <span>Remover</span>
                  </button>
               </div>
            </div>
         </div>
      </li>
   );
};

export default CartItem;
