import * as service from "../service/accountService.js"
import userAccount from "../models/userAccount.js";

export const register = async (req, res) => {
    const account = await service.register(req.body);
    if (account) {
        return res.status(201).json(account);
    } else {
        return res.status(409).end
    }
}

export const login = async (req, res) => {
    const userAccount = await service.getUser(req.principal.userName);
    return res.json(userAccount);
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await service.deleteUser(req.params.login);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const user = await service.updateUser(req.params.login, req.body);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}

export const addRole = async (req, res, next) => {
    try {
        const user = await service.changeRoles(req.params.login, req.params.role, true);
        return res.json(user
        );
    } catch (e) {
        return next(e);
    }
}

export const deleteRole = async (req, res, next) => {
    try {
        const user = await service.changeRoles(req.params.login, req.params.role, false);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}

export const changePassword = async (req, res) => {
    await service.changePassword(req.principal.userName, req.body.password)
    return res.sendStatus(204);
}

export const getUser = async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.login);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}