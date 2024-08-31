import { Router } from 'express';
import { uploadImage, confirmMeasurement, listMeasurements } from '../controllers/imageController';

const router = Router();

router.post('/upload', uploadImage);
router.patch('/confirm', confirmMeasurement);
router.get('/:customer_code/list', listMeasurements);

export default router;
