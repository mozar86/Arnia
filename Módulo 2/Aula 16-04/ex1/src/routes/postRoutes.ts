import { Router } from "express";

import { createPostController } from "../controller/postController";
import { validateCreatePostMiddleware } from "../middlewares/validateCreatePostMiddleware";
import { ensureAuthMiddleware } from "../middlewares/ensureAuthenticationMiddleware";

const router = Router()

router.post("/", ensureAuthMiddleware, createPostController)

export default router