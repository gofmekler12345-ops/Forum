import {Router} from "express";
import {hasRole, isOwnerOrHasRole, isOwner, isLoginIsAuthor} from "../middlewares/authorization.middleware.js";
import {ADMIN} from "../configuretion/constant.js";

const router = Router();
router.all('/account/user/:login/role/:role', hasRole(ADMIN));
router.patch('/account/user/:user', isOwner('user'));
router.delete('/account/user/:login', isOwnerOrHasRole('login', ADMIN));
router.post('/post/:author', isLoginIsAuthor('author'))
router.patch('/post/:id/comment/:author', isLoginIsAuthor('author'))
export default router;