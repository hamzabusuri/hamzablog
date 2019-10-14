const express = require('express');
const router = express.Router();

const Blog = require('../schemas/blog');


router.get('/', (req,res) => {
    Blog.find()
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json(err));
})

module.exports = router;