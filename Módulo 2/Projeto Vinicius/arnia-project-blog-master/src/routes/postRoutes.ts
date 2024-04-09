import { Router } from "express";
import {
  createPostController,
  deletePostController,
  giveLikePostController,
  listAllPostsController,
  listPostByAuthorController,
  updatePostController,
} from "../controllers/postController";

import validate from '../middlewares/validate';
import { PostCreate, PostUpdate } from '../schemas/posts';

const router = Router();

router.post("/", validate(PostCreate.schema),  createPostController);
router.put("/:postId", validate(PostUpdate.schema), updatePostController); //1- Criou a rota; 4- Passou o controller na rota e o validate
router.get("/", listAllPostsController);
router.get("/author/:authorId", listPostByAuthorController);
router.patch("/like/:id", giveLikePostController);
router.delete("/:id", deletePostController);

export default router;
