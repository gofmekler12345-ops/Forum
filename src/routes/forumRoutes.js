import { Router } from "express";
import * as controller from "../controller/forumController";

const router = Router();

router.post('forum/post/:user', controller.addPost);
router.get('forum/post/:id', controller.findPostById);
router.patch('forum/post/:id', controller.addLike);
router.get('forum/posts/author/:user', controller.findPostsByAuthor);
router.patch('forum/post/:id', controller.addComment);
router.delete('forum/post/:id', controller.deletePost);
router.get('forum/posts/tags/:tags', controller.findPostByTags);
router.get('forum/posts/period/:dateFrom&dateTo', controller.findPostByTags); //не уверена
router.patch('forum/post/:id', controller.updatePost);