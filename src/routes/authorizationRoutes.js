import {Router} from "express";
import {hasRole, isOwnerOrHasRole, isOwner, isLoginIsAuthor} from "../middlewares/authorization.middleware.js";
import {ADMIN} from "../configuretion/constant.js";

const router = Router();
router.all('/account/user/:login/role/:role', hasRole(ADMIN))
router.all('/account/user/:login', isOwner('login'))
router.all('/account/user/:login', isOwnerOrHasRole('login'))
router.all('/post/:author', isLoginIsAuthor('author'))
router.all('/post/:id/comment/:author', isLoginIsAuthor('author'))
export default router;