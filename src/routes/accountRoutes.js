import {Router} from "express";
import * as controller from "../controller/accountController.js";
import validate from "../middlewares/forumValidator.js";

const router = Router();

router.post('/register', validate('register'), controller.register);
router.post('/login', controller.login);
router.delete('/user/:login', controller.deleteUser);
router.patch('/user/:login', validate('updateUser'), controller.updateUser);
router.patch('/user/:login/role/:role', validate('changeRoles', 'params'), controller.addRole)
router.delete('/user/:login/role/:role', validate('changeRoles', 'params'), controller.deleteRole)
router.patch('/password', controller.changePassword)
router.get('/user/:login', controller.getUser)
export default router;