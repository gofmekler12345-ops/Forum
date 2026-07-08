import { Router } from "express";
import * as controller from "../controller/forumController.js";

const router = Router();

router.post('/post/:author', controller.addPost);
router.get('/post/:id', controller.findPostById);
router.patch('/post/:id/like', controller.addLike);
router.get('/posts/author/:author', controller.findPostsByAuthor);
router.patch('/post/:id/comment/:commenter', controller.addComment);
router.delete('/post/:id', controller.deletePost);
router.get('/posts/tags', controller.findPostsByTags);
router.get('/posts/period', controller.findPostByPeriod);
router.patch('/post/:id', controller.updatePost);

export default router;