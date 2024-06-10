import { Router } from "express";
import { createUserController } from "../controllers/user-controller";

const userRoutes = Router()

userRoutes.post("/", createUserController)

export { userRoutes }