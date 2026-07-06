import { Router } from "express";
import * as controller from "../controller/forumController";

const router = Router();

router.post('forum/post/:author', controller.addPost);
router.get('forum/post/:id', controller.findPostById);
router.patch('forum/post/:id/like', controller.addLike);
router.get('forum/posts/author/:author', controller.findPostsByAuthor);
router.patch('forum/post/:id/comment/:commenter', controller.addComment);
router.delete('forum/post/:id', controller.deletePost);
router.get('forum/posts/tags', controller.findPostsByTags);
router.get('forum/posts/period', controller.findPostByPeriod);
router.patch('forum/post/:id', controller.updatePost);

export default router;