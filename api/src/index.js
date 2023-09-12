import app from './app.js';
import { PORT } from './config.js';
import { connectDB } from './db/db.js';

connectDB();

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
