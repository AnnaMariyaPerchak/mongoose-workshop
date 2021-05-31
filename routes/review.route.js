const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/review');

router
    .post('/', reviewController.createReview);

router
    .put('/:bookId', reviewController.updateReview)
    .delete('/:bookId', reviewController.removeReview);


module.exports = router;
