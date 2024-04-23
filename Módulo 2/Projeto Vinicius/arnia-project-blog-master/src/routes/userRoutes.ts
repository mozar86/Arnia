import { Router } from "express";
import {
  authUserController,
  createUserController,
  getAllUsersController,
} from "../controllers/userController";
import validate from '../middlewares/validate';
import { UserAuthCreate } from "../schemas/users";

const router = Router();

router.post("/", createUserController);
router.get("/", getAllUsersController);
router.post("/auth", validate(UserAuthCreate.schema), authUserController);

export default router;
