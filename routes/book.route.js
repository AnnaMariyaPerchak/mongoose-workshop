const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book');

router.post('/add', bookController.createBook);
router.get('/',bookController.getBooks);
router.put('/:bookId', bookController.updateBook)
router.delete('/:bookId', bookController.deleteBook);

module.exports = router;