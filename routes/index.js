const bookRoutes = require('./book.route');
const reviewRoutes = require('./review.route');
const express = require('express');
const router = express.Router();

router.use('/books', bookRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
