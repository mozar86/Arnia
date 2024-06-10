import { Router } from 'express';
import { loginAdmin } from '../controllers/adminController';
import { adminAuthCreate } from '../schemas/admin';
import validate from '../middlewares/validate';

const router = Router();

router.post('/loginAdmin', validate(adminAuthCreate.schema), loginAdmin);

export default router;
