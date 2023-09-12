import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
   <ProductsProvider>
      <CartProvider>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </CartProvider>
   </ProductsProvider>
);
