import { Router } from "express";
import * as controller from "../controller/forumController.js";

import validate from "../middlewares/forumValidator.js";

const router = Router();

router.post('/post/:author', validate('createPost'), controller.addPost);
router.get('/post/:id', controller.findPostById);
router.patch('/post/:id/like', controller.addLike);
router.get('/posts/author/:author', controller.findPostsByAuthor);
router.patch('/post/:id/comment/:commenter', validate('addComment'), controller.addComment);
router.delete('/post/:id', controller.deletePost);
router.get('/posts/tags', controller.findPostsByTags);
router.get('/posts/period', validate('dateFormatPeriod', 'query'), controller.findPostByPeriod);
router.patch('/post/:id', validate('updatePost'), controller.updatePost);

export default router;