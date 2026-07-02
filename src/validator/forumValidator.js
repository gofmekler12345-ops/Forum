import Joi from "joi";

export const addPost = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.string()
})

export const addComment = Joi.object({
    message: Joi.string().required()
})

export const updatePost = Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    tags: Joi.string()
})