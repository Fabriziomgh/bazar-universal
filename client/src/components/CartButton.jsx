import { CartIcon } from './Icons';
import useCartContext from '../hooks/context-hook-cart';
import { Link } from 'react-router-dom';
const CartButton = () => {
   const { cart } = useCartContext();
   return (
      <div className="lg:block p-4 flex items-center justify-center">
         <Link
            to="/cart"
            type="button"
            className="relative inline-flex items-center p-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
         >
            <CartIcon />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
               {cart.length}
            </div>
         </Link>
      </div>
   );
};

export default CartButton;
