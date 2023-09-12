import { useProductsContext } from '../hooks/context-hook';
import ProductCard from './ProductCard';
import Spinner from './Spinner';
const Products = () => {
   const { products, search, category, loading } = useProductsContext();
   if (!category) return;
   const categorys = Object.entries(category);
   const show = products.length > 0;

   return (
      <div className="grid grid-cols-1  gap-4 p-4">
         {show && (
            <div className=" mx-auto mb-2">
               <h3 className="text-slate-900 dark:text-slate-200">
                  {`Resultados de la busqueda ${search ? `"${search}"` : ''}: ${
                     products.length
                  }`}
               </h3>
               <h2>
                  {categorys.map((cat, i) => (
                     <span
                        key={i}
                        className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"
                     >
                        {`${cat[0]} (${cat[1]})`}
                     </span>
                  ))}
               </h2>
            </div>
         )}
         {products.length === 0 && !loading && (
            <h1 className="text-center">No hay productos</h1>
         )}
         {loading && <Spinner />}
         {products.map((product) => (
            <ProductCard key={product.id} product={product} />
         ))}
      </div>
   );
};

export default Products;
