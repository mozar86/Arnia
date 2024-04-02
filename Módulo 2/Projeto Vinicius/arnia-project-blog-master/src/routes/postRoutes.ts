import { Router } from "express";
import {
  createPostController,
  deletePostController,
  giveLikePostController,
  listAllPostsController,
  listPostByAuthorController,
} from "../controllers/postController";

const router = Router();

router.post("/", createPostController);
router.get("/", listAllPostsController);
router.get("/author/:authorId", listPostByAuthorController);
router.patch("/like/:id", giveLikePostController);
router.delete("/:id", deletePostController);

export default router;
