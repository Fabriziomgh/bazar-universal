import Product from '../models/product-models.js';
import { transformedData } from '../utils/transformedData.js';
export const getProducts = async (req, res) => {
   try {
      //Filter
      const queryObj = { ...req.query };
      const excludedFields = ['page', 'limit', 'search'];
      excludedFields.forEach((el) => delete queryObj[el]);
      console.log(req.params, req.query);
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * limit;

      const q = req.query.search
         ? {
              $text: {
                 $search: req.query.search,
                 $caseSensitive: false,
                 $diacriticSensitive: false,
              },
           }
         : {};

      const query = Product.find(q).skip(skip).limit(limit);

      const products = await query.lean();

      if (!products.length) {
         return res.status(404).json({
            message: 'No hay productos que coincidan con la búsqueda',
         });
      }

      const productsTransformed = transformedData(products);

      const totalProducts = await Product.countDocuments(q);
      const totalPages = Math.ceil(totalProducts / limit);

      res.json({
         total: totalProducts,
         productsCount: products.length,
         skip: skip,
         currentPage: +page,
         totalPages,
         products: productsTransformed,
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const getProduct = async (req, res) => {
   try {
      const { id } = req.params;
      const product = await Product.findById(id).lean();

      if (!product)
         return res.status(404).json({ message: 'Product not found' });

      const { __v, _id, ...restProduct } = product;
      res.json({
         id: _id,
         ...restProduct,
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};
