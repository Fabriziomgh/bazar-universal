import express from 'express';
import morgan from 'morgan';
import routerProducts from './routes/products-routes.js';
import cors from 'cors';
const app = express();

app.use(
   cors({
      origin: 'http://localhost:5173',
   })
);
app.use(morgan('dev'));

app.use('/api', routerProducts);

export default app;
