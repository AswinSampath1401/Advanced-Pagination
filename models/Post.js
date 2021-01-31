const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : [true, 'Please provide title']
    },
    author : {
        type : String,
        required : [true,'Please Provide Author 📚📔']
    },
    body :{
        type: String,
        required : [true, 'Please Provide Body']
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;