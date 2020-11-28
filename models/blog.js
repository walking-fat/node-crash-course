const { truncate } = require('lodash');
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

// make the schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        require: true
    }
}, { timestamps: true });

// make the model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports =  Blog;