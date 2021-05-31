const bookRoutes = require('./book.route');
const reviewRoutes = require('./review.route');
const express = require('express');
const router = express.Router();

router.use('/book', bookRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
