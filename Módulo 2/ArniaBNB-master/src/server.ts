import express from 'express';
import { logger } from './middlewares/logger';
import roomRoutes from './routes/roomRoutes';
import adminRoutes from './routes/adminRoutes';
import guestRoutes from './routes/guestRoutes';
import bookingRoutes from './routes/bookingRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);


app.use('/api', roomRoutes);
app.use('/api', adminRoutes);
app.use('/api', guestRoutes);
app.use('/api', bookingRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
