import express from 'express';
import { measureRoutes } from './routes/measureRoutes';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

app.use('/api', measureRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dotenv.config();