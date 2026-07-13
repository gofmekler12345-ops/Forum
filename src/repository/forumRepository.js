import Post from "../models/postModel.js";


export const createPost = async (postData) => {
    // const post = new Post(postData);
    // return post.save();
    return Post.create(postData);
}

export const findPostById = async (id) => Post.findById(id).exec();

export const deletePost = async (id) => Post.findByIdAndDelete(id).exec();

export const addLike = async (id) => Post.findByIdAndUpdate(id, {$inc: {likes: 1}}).exec();

export const findPostsByAuthor = async (author) => Post.find({author}).exec();

export const addComment = async (id, comment) => Post.findByIdAndUpdate(id, {$push: {comments: comment}}, {new: true}).exec();

export const findPostsByTags = async (tags) => Post.find({tags}).exec();

export const findPostByPeriod = async (dateFrom, dateTo) =>
    Post.find({
        dateCreates: {
            $gte: new Date(dateFrom),
            $lte: new Date(dateTo)
        }
    }).exec();

export const updatePost = async (id, data) => {
    const tags = 
    Post.findByIdAndUpdate(id, {$addToSet: data}, {new: true}).exec();}