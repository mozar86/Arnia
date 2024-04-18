import { Router } from "express"
import { authController } from "../controller/authController"

const router = Router()

router.post("/", authController)

export default router