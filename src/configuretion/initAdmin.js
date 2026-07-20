import UserAccount from "../models/userAccount.js";
import {ADMIN, MODERATOR, USER} from "./constant.js";

export const createAdmin = async () => {
let admin = await UserAccount.findById('admin').exec();
if(!admin){
    admin = new UserAccount({
        login: 'admin',
        password: 'admin',
        firstName: 'Admin',
        lastName: 'Admin',
        roles: [USER, MODERATOR, ADMIN]
    })
    await admin.save();
}
}