import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const MONGODB_URL =
   process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/products';
