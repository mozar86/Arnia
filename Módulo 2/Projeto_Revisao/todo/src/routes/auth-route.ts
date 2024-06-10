import { Router } from "express";
import { loginControler } from "../controllers/auth-controller";

const authRoutes = Router()

authRoutes.post("/", loginControler)

export { authRoutes }