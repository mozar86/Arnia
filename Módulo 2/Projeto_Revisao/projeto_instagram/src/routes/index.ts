import { Router } from "express";
import userRoutes from "./userRoutes";
import postRoutes from "./postRoutes";
import authRoutes from "./authRoutes";

const router = Router()

router.use("/user", userRoutes)
router.use("/auth", authRoutes)
router.use("/post", postRoutes)

export default router