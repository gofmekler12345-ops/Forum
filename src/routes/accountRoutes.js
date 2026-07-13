import { Router } from "express";
import * as controller from "../controller/accountController.js";

const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.delete('/user/:user', controller.deleteUser);
router.patch('/user/:user', controller.updateUser);
router.patch('/user/:user/role/:role', controller.addRole)
router.delete('/user/:user/role/:role')
router.patch('/password', controller.changePassword)
router.get('user/:user', controller.getUser)
export default router;