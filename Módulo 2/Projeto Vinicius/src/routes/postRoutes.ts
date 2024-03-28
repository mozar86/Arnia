import {Router} from "express";
import {
    createPostController,
    giveLikePostController,
    listAllPostsController
} from "../controllers/postController";

const router = Router();

router.post("/", createPostController);
router.get("/", listAllPostsController);
router.patch("like/:id", giveLikePostController);

export default router;