import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
   product: { type: String, required: true },
   description: { type: String, required: true },
   price: { type: Number, required: true },
   discountPercentage: { type: Number, required: true },
   rating: { type: Number, required: true },
   stock: { type: Number, required: true },
   brand: { type: String, required: true },
   category: { type: String, required: true },
   thumbnail: { type: String, required: true },
   images: { type: [String], required: true },
});
productSchema.index({
   product: 'text',
   brand: 'text',
   category: 'text',
   description: 'text',
});
const Product = mongoose.model('Product', productSchema);

export default Product;
