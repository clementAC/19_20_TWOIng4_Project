const express = require('express');
const router = express.Router();

const { PostsModel } = require('../models/test1Model');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        console.log(docs);
    })
})

module.exports = router