import { SearchIcon } from './Icons';
import { useProductsContext } from '../hooks/context-hook.js';
import { useState } from 'react';

const Form = () => {
   const [search, setSearch] = useState('');
   const { getProducts } = useProductsContext();
   const submitHandler = (e) => {
      e.preventDefault();
      getProducts(search);
   };
   const searchHandler = (e) => {
      setSearch(e.target.value);
   };

   return (
      <form onSubmit={submitHandler}>
         <div className="relative mb-4">
            <input
               onChange={searchHandler}
               type="text"
               placeholder="Buscar..."
               className="w-full rounded-md border-gray-200 p-2.5 pe-10 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
               <div className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                  <SearchIcon />
               </div>
            </span>
         </div>
         <div className="text-right">
            <button className="inline-block w-full rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500">
               Buscar
            </button>
         </div>
      </form>
   );
};

export default Form;
