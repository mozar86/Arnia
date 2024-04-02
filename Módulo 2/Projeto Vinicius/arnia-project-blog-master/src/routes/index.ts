import { Router } from "express";
import postRoutes from "./postRoutes";
import userRoutes from "./userRoutes";

const router = Router();

router.use("/posts", postRoutes);
router.use("/users", userRoutes);

export default router;
