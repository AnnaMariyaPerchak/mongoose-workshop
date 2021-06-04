const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/review');

router.post('/add', reviewController.createReview);
router.get('/',reviewController.getReviews);
// router.put('/:reviewId', reviewController.updateReview)
router.delete('/:reviewId', reviewController.deleteReview);

module.exports = router;