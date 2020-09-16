const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book');

router.post('/', bookController.createBook);

router
	.put('/:bookId', bookController.updateBook)
	.delete('/:bookId', bookController.deleteBook);
// router.delete('/:bookId', bookController.deleteBook);

module.exports = router;
