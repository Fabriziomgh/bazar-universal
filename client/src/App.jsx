import Cart from './components/Cart';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';
import SearchBox from './components/SearchBox';

import { Routes, Route } from 'react-router-dom';

const App = () => {
   return (
      <main className="bg-slate-100 dark:bg-slate-900 ">
         <section className="max-w-2xl mx-auto  ">
            <Header />
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
         </section>
      </main>
   );
};

export default App;
