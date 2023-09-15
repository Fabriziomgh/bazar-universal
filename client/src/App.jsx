import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import SearchBox from './components/SearchBox';
import { Suspense, lazy } from 'react';

const Cart = lazy(() => import('./components/Cart'));

import { Routes, Route } from 'react-router-dom';
import Spinner from './components/Spinner';

const App = () => {
   return (
      <main className="bg-slate-100 dark:bg-slate-900 ">
         <section className="max-w-2xl mx-auto  ">
            <Header />
            <Suspense fallback={<Spinner />}>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <>
                           <SearchBox />
                           <Products />
                        </>
                     }
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
               </Routes>
            </Suspense>
         </section>
      </main>
   );
};

export default App;
