import Product from '../models/product-models.js';
import { products } from './products.js';
import { connectDB } from '../db/db.js';

connectDB();
async function seedProducts() {
   try {
      await Product.deleteMany({});
      const productsBD = await Product.insertMany(products);
      if (productsBD) {
         console.log('Products added successfully');
      } else {
         console.log('Something went wrong');
      }
   } catch (error) {
      console.log(error);
   }
}

seedProducts();
