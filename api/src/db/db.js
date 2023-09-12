import mongoose from 'mongoose';
import { MONGODB_URL } from '../config.js';

export const connectDB = async () => {
   try {
      await mongoose.connect(MONGODB_URL);
      console.log('Connected to MongoDB');
   } catch (error) {
      console.log('Error connecting to MongoDB', error);
   }
};
