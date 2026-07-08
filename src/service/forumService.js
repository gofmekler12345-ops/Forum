import * as repository from '../repository/forumRepository.js';

export const addPost = async (author, data) => {
    const tags = [...new Set(data.tags)]
    return await repository.createPost({...data, author});
};

export const findPostById = async (id) => {
    const post = await repository.findPostById(id)
    if (!post) {
        throw new Error(`Post with id = ${id} not found`);
    }
    return post;

};

export const addLike = async (id) => {
    const post = await repository.addLike(id)
    if (!post) {
        throw new Error(`Post with id = ${id} not found`);
    }
    return post;
};

export const findPostsByAuthor = async (author) => {
    const post = await repository.findPostsByAuthor(author)
    if (!post) {
        throw new Error(`Post with author = ${author} not found`);
    }
    return post;
};

export const addComment = async (id, comment) => {
    const post = await repository.addComment(id, comment)
    if (!post) {
        throw new Error(`Post with id = ${id} not found`);
    }
    return post;
}

//запуталась с комментариями

export const deletePost = async (id) => {
    const post = await repository.deletePost(id);
    if (!post) {
        throw new Error(`Post with id = ${id} not found`);
    }
    return post;
};

export const findPostsByTags = async (tags) => {
    return await repository.findPostsByTags(tags);
};

export const findPostByPeriod = async (dateFrom, dateTo) => {
    return repository.findPostByPeriod(dateFrom, dateTo);
}

export const updatePost = async (id, data) => {
    const post = await repository.updatePost(id, data);
    if (!post) {
        throw new Error(`Post with id = ${id} not found`);
    }
    return post;
};