import * as repository from '../repository/accountRepository.js';
import {addUser} from "../repository/accountRepository.js";

export const register = async (user) => {
    try {
        return await repository.addUser(user);
    } catch (e) {
        console.log(e);
        throw new Error('User already exists');
    }
};

export const login = (login, password) => {
    //TODO login in account
};

export const deleteUser = async (user) => {
    try {
        return await repository.removeUser(user);
    } catch (e) {
        console.log(e);
        throw new Error('User not exists');
    }
};

export const updateUser = async (user, data) => {
    try {
        return await repository.updateUser(user, data);
    } catch (e) {
        console.log(e);
        throw new Error('User not exists');
    }
};

export const changeRoles = async (login, role, isAddRole) => {
    role = role.toUpperCase();
    let userAccount;
    try {
        if (isAddRole) {
            userAccount = await repository.addRole(login, role);
        } else {
            userAccount = await repository.removeRole(login, role);
        }
    } catch (e) {
        console.log(e);
        throw new Error('Database error during role change');
    }
    if (!userAccount) {
        throw new Error('User not exists');
    }

    return userAccount;
}

export const changePassword = async (user, newPassword) => {
    //TODO change password
};

export const getUser = async (login) => {
    try {
        console.log(login);
        return await repository.getUser(login);
    } catch (e) {
        console.log(e);
        throw new Error('User not exists');
    }
};