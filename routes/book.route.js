const express = require('express');
const router = express.Router();

const bookController = require('../controllers/book');

router
    .get('/', bookController.getAllBooks)
    .post('/', bookController.createBook);

router
    .get('/:bookId', bookController.getBook)
    .put('/:bookId', bookController.updateBook)
    .delete('/:bookId', bookController.removeBook);


module.exports = router;
