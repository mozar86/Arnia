import {Router} from "express";
import {createUserController} from "../controllers/userController";

const router = Router();

router.post("/", createUserController);

export default router;