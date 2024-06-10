import { Router } from 'express';
import { 
    authGuestController,
    createGuestController,
    loginGuest
} from "../controllers/guestController";
import validate from '../middlewares/validate';
import { GuestCreate } from '../schemas/guest';

const router = Router();

router.post("/create",validate(GuestCreate.schema), createGuestController);
router.post("/auth", validate(GuestCreate.schema), authGuestController);
router.post("/login", loginGuest);

export default router;