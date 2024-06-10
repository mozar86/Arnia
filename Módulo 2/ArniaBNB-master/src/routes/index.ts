import { Router } from 'express';
import guestRoutes from "./guestRoutes";
import adminRoutes from "./adminRoutes";

const router = Router()

//router.use("/admin", adminRoutes);
//router.use("/guest", guestRoutes);

export default router;