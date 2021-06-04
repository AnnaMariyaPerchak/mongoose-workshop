const Review = require('./../models/review');
const Book = require('../models/book');

const _ = require('lodash');

const utilError = require('./../config/errorHelper.js');


module.exports = {
	createReview,
	// updateReview,
	deleteReview,
	getReviews
};

// ROUTE -> MIDDLEWARE -> ROUTE:BOOK -> BOOK CONTROLLER

async function createReview(req, res, next) {

	const fields = [
		'book',
        'text',
        'nickname'
	];

	const body = req.body;
	const newReview = _.pick(body, fields);

	try {
		const existingReview = await Review.findOne({nickname: body.nickname})
		if (existingReview) {
			throw utilError.badRequest('Review exists');
		}
        
		const review = new Review(newReview);
        const temp = await Book.findOne({title:req.body.book}).populate('book')
        review.book = temp

        // console.log(review)
        // review.book= Book.find({id:review.book}).populate('book')
        
		await review.save();
		return res.status(200).json(review);
	} catch (err) {
		console.log(err);
		next(err);
	}

}

async function updateReview(req, res, next) {
	const bookId = req.params.book._id;
	const reviewId = req.params.reviewId;
	const body = req.body;

    // const temp = await Book.findOne({title:req.body.book}).populate('book')

	try {
		const existingBook = await Book.findOne({_id: bookId})
		const existingReview = await Review.findOne({_id: reviewId})
		if (!existingBook) {
			throw utilError.badRequest('Book not exists');
		}

		if (body.book) {
			existingReview.book = body.book;
		}
		if (body.text) {
			existingReview.text = body.text;
		}

		if (body.nickname) {
			existingReview.nickname = body.ynicknameear;
		}

		await existingReview.save();
		return res.status(200).json(existingReview);
	} catch (err) {
		console.log(err);
		next(err);
	}
}

async function deleteReview(req, res, next) {

	const reviewId = req.params.reviewId;

	try {
		const result = await Review.findByIdAndDelete(reviewId).populate('book',['_id','title','description','year','author'])
		return res.status(200).json(result);
	} catch (err) {
		console.log(err);
		next(err);
	}
}

async function getReviews (req, res) {
	await Review.find()
    .populate('book',['_id','title','description','year','author'])
	  .exec((err, reviews) => {
		if (err || !reviews) {
		  return res.status(400).json({
			error: "Something went wrong in finding reviews",
		  });
		}
		res.json(reviews);
	  });
  };