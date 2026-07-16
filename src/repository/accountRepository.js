import UserAccount from "../models/userAccount.js";

export const addUser = async (user) => UserAccount.create(user)

export const removeUser = async (login) => UserAccount.findByIdAndDelete(login, {returnDocument: 'after'}).exec()

export const updateUser = async (login, data) => UserAccount.findByIdAndUpdate(login, {$set: data}, {new: true}).exec()

export const getUser = async (login) => UserAccount.findOne({_id: login}).exec();

export const addRole = async (login, role) => UserAccount.findByIdAndUpdate(login, {$addToSet:{roles: role}}, { returnDocument: 'after' }).select('_id roles').exec();

export const removeRole = async (login, role) =>  UserAccount.findByIdAndUpdate(login, { $pull: { roles: role } }, { returnDocument: 'after' }).select('_id roles').exec();