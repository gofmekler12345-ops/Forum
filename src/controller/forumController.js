import * as service from '../service/forumService.js';

export const addPost = async (req, res) => {
    const post = await service.addPost(req.params.author, req.body);
    return res.status(201).json(post);
}

export const findPostById = async (req, res, next) => {
    try {
        const post = await service.findPostById(req.params.id);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const post = await service.deletePost(req.params.id);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
}

export const addLike = async (req, res, next) => {
    try {
        await service.addLike(req.params.id);
        return res.sendStatus(204)
    } catch (e) {
        return next(e);
    }
}

export const findPostsByAuthor  = async (req, res) => {
    return res.json(await service.findPostsByAuthor(req.params.author));
}

export const addComment = async (req, res, next) => {
    try {
        const post = await service.addComment(req.params.id, req.params.commenter, req.body.message);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
}

export const findPostsByTags  = async (req, res) => {
    let values = req.query.values;
    if (Array.isArray(req.query.values)) {
        values = req.query.values.join(',');
    }
    return res.json(await service.findPostsByTags(values));
}

export const findPostByPeriod  = async (req, res) => {
    const {dateFrom, dateTo} = req.query;
    return res.json(await service.findPostByPeriod(dateFrom, dateTo));
}

export const updatePost = async (req, res, next) => {
    try {
        const post = await service.updatePost(req.params.id, req.body);
        return res.json(post);
    } catch (e) {
        return next(e);
    }
}