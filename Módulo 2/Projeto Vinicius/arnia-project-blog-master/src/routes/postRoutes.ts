import { Router } from "express";
import {
  createPostController,
  deletePostController,
  giveLikePostController,
  listAllPostsController,
  listPostByAuthorController,
} from "../controllers/postController";

import validate from '../middlewares/validate';
import { PostCreate } from '../schemas/posts';

const router = Router();

router.post("/", validate(PostCreate.schema),  createPostController);
router.get("/", listAllPostsController);
router.get("/author/:authorId", listPostByAuthorController);
router.patch("/like/:id", giveLikePostController);
router.delete("/:id", deletePostController);

export default router;
