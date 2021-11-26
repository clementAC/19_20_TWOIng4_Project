const express = require('express');
const app = express();
require('../models/dbConfig');
const postsRoutes = require('../routes/postsController');

app.use('/', postsRoutes);

app.listen(3000, () => console.log('Server started: 3000'));