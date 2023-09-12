import { Link } from 'react-router-dom';
import useCartContext from '../hooks/context-hook-cart';
import CartItem from './CartItem';

const Cart = () => {
   const { cart } = useCartContext();
   const totalMount = cart.reduce(
      (acc, product) => acc + product.qty * product.price,
      0
   );
   return (
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
         <h2 className="text-xl font-semibold">Tú carrito</h2>
         <ul className="flex flex-col divide-y divide-gray-700">
            {cart.length === 0 && <h1>No hay productos en el carrito</h1>}
            {cart.map((product) => (
               <CartItem key={product.id} product={product} />
            ))}
         </ul>
         <div className="space-y-1 text-right">
            <p className="flex items-center gap-2 justify-end">
               Monto total:
               <span className="font-semibold">${totalMount}</span>
            </p>
            <p className="text-sm dark:text-gray-400">
               Impuestos y gastos de envío no incluidos
            </p>
         </div>
         <div className="flex justify-end space-x-4">
            <Link
               to="/"
               type="button"
               className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
               Volver
               <span className="sr-only sm:not-sr-only">a la tienda</span>
            </Link>
            <button
               type="button"
               className="px-6 py-2 border rounded-md dark:bg-indigo-400 dark:text-gray-900 dark:border-violet-400"
            >
               <span className="sr-only sm:not-sr-only">Continuar con el </span>
               pago
            </button>
         </div>
      </div>
   );
};

export default Cart;
