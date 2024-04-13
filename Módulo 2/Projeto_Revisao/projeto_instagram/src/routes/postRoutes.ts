import { Router } from "express";

import { createPostController } from "../controller/postController";
import { validateCreatePostMiddleware } from "../middlewares/validateCreatePostMiddleware";

const router = Router()

router.post("/", validateCreatePostMiddleware, createPostController)

export default router