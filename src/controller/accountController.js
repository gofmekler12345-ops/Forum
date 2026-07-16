import * as service from "../service/accountService.js"

export const register = async (req, res) => {
    const account = await service.register(req.body);
    if (account) {
        return res.status(201).json(account);
    } else {
        return res.status(409).end
    }
}

export const login = async (req, res) => {

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

export const changePassword = async (req, res) =>{

}

export const getUser = async (req, res, next) => {
    try {
        const user = await service.getUser(req.params.login);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
}