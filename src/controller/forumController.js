import * as service from '../service/forumService.js';

export const addPost = async (req, res) => {
    const post = await service.addPost(req.params.author, req.body);
    if (post) {
        return res.status(201).json(post);
    }
};

export const findPostById = async (req, res) => {
    const post = await service.findPostById(req.params.id);
    if (post) {
        return res.status(200).json(post);
    } else {
        return res.status(404)
    }
};

export const addLike = async (req, res) => {
    const success = await service.addLike(req.params.id);
    if (success) {
        return res.status(204);
    } else {
        return res.status(404)
    }
};

export const findPostsByAuthor = async (req, res) => {
    const post = await service.findPostsByAuthor(req.params.author);
    if (post) {
        return res.status(200).json(post);
    }
};

export const addComment = async (req, res) => {
    const post = await service.addComment(req.params.id, req.params.commenter, req.body.message);
    if (post) {
        return res.status(200).json(post);
    } else {
        return res.status(404);
    }
};

export const deletePost = async (req, res) => {
    const post = await service.deletePost(req.params.id);
    if (post) {
        return res.status(200).json(post);
    } else {
        return res.status(404)
    }
};

export const findPostsByTags = async (req, res) => {
    let values = req.query.values;
    if (Array.isArray(req.query.values)) {
        values = req.query.values.join(',');
    }
    return res.json(await service.findPostsByTags(values));

};

export const findPostByPeriod = async (req, res) => {
    const { dateFrom, dateTo } = req.query;
    const post = await service.findPostByPeriod(dateFrom, dateTo)
    if (post) {
        return res.status(200).json(post);
    }
};

export const updatePost = async (req, res) => {
    const post = await service.updatePost(req.params.id, req.body);
    if (post) {
        return res.status(200).json(post);
    } else {
        return res.status(404)
    }
};