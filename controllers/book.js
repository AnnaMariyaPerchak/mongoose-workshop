const Book = require('./../models/book');

const _ = require('lodash');

const utilError = require('./../config/errorHelper.js')

module.exports = {
	createBook,
	updateBook,
	deleteBook
};

// ROUTE -> MIDDLEWARE -> ROUTE:BOOK -> BOOK CONTROLLER

async function createBook(req, res, next) {

	const fields = [
		'title',
		'description',
		'year',
		'author',
	];

	const body = req.body;
	const newBook = _.pick(body, fields);

	try {
		const existingBook = await Book.findOne({title: body.title})
		if (existingBook) {
			throw utilError.badRequest('Book exists');
		}
		const book = new Book(newBook);
		await book.save();
		return res.status(200).json(book);
	} catch (err) {
		console.log(err);
		next(err);
	}

}

async function updateBook(req, res, next) {
	const bookId = req.params.bookId;
	const body = req.body;

	try {
		const existingBook = await Book.findOne({_id: bookId})
		if (!existingBook) {
			throw utilError.badRequest('Book not exists');
		}

		if (body.title) {
			existingBook.title = body.title;
		}
		if (body.description) {
			existingBook.description = body.description;
		}

		if (body.year) {
			existingBook.year = body.year;
		}

		if (body.author) {
			existingBook.author = body.author;
		}

		await existingBook.save();
		return res.status(200).json(existingBook);
	} catch (err) {
		console.log(err);
		next(err);
	}
}


async function deleteBook(req, res, next) {

	const bookId = req.params.bookId;

	try {
		const result = await Book.findByIdAndDelete(bookId)
		return res.status(200).json(result);
	} catch (err) {
		console.log(err);
		next(err);
	}
}


