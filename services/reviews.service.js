'use strict';
const Review = require('../models/review');
const Book = require('../models/book');
const { badRequest } = require('../config/errorHelper');

module.exports = {
    createReview,
    updateReview,
    removeReview
}


async function createReview(data) {
    const targetBook = await Book.findOne({_id: data.book});
    if (!targetBook) {
        throw badRequest('No book found');
    }
    const review = await Review.create(data);
    targetBook.reviews.push(review._id);
    await targetBook.save();
    return review;
}

async function updateReview(reviewId, payload) {
    const review = await Review.findById(reviewId);

    if (!review) {
        throw badRequest('Review not exists')
    }

    Object.entries(payload || {}).forEach(([key, value]) => {
        if ([
            'text',
            'nickname',
        ].includes(key)) review[key] = value || undefined;
    });

    await review.save();
    return review;
}

async function removeReview(reviewId) {
    const targetReview = await Review.findOne({_id: reviewId})
    if (!targetReview) {
        throw badRequest('Not found');
    }
    const book = await Book.findOne({reviews: reviewId});
    if (!book) {
        throw badRequest('Review doesnt has a book');
    }
    book.reviews = book.reviews.filter((review) => String(review) !== String(reviewId));
    await book.save();
    await Review.findByIdAndRemove(reviewId);
}
