const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blog_title: String,
    datetime: String,
    publishedby: String,
    blog_body: String
});

module.exports = mongoose.model('blogs', blogSchema);