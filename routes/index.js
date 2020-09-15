const bookRoutes = require('./book.route');
const express = require('express');
const router = express.Router();

router.use('/book', bookRoutes);

module.exports = router;
