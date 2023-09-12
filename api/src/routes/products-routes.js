import {
   getProduct,
   getProducts,
} from '../controllers/products-controllers.js';

import { Router } from 'express';

const routerProducts = Router();

routerProducts.get('/products', getProducts);

routerProducts.get('/products/:id', getProduct);

export default routerProducts;
