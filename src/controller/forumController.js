import * as service from '../service/forumService.js';

export const addPost = async (req, res) => {
    const post = await service.addPost(req.body);
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
    const post = await service.findPostsByAuthor(req.params.user);
    if (post) {
        return res.status(200).json(post);
    }
};

export const addComment = async (req, res) => {
    const post = await service.addComment(req.params.id, req.body);
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

export const findPostByTags = async (req, res) => {
    const post = await service.findPostsByTags(req.params.values)
    //не совсем поняла как обозначить values в params
    if (post) {
        return res.status(200).json(post);
    }
};

export const findPostByPeriod = async (req, res) => {
    const post = await service.findPostByPeriod(req.params.dateFrom, req.params.dateTo)
    if (post) {
        return res.status(200).json(post);
    }
}

export const updatePost = async (req, res) => {
    const post = await service.updatePost(req.params.id, req.body);
    if (post) {
        return res.status(200).json(post);
    }else {
        return res.status(404)
    }
}