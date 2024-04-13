import { Router } from "express";
import { createUserController, findAllUsersController } from "../controller/userController";

const router = Router()

router.post("/", createUserController)
router.get("/", findAllUsersController)

export default router