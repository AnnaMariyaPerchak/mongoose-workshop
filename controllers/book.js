const bookService = require('../services').books;

module.exports = {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    removeBook
};

async function getAllBooks(req, res, next) {
    try {
        const result = await bookService.getAllBooks();
        return res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

async function createBook(req, res, next) {
    try {
        const data = req.body;
        const result = await bookService.createBook(data);
        return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

async function getBook(req, res, next) {
    try {
        const bookId = req.params.bookId;
        const result = await bookService.getBook(bookId);
        return res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

async function updateBook(req, res, next) {
    try {
        const bookId = req.params.bookId;
        const payload = req.body;
        const result = await bookService.updateBook(bookId, payload);
        return res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

async function removeBook(req, res, next) {
    try {
        const bookId = req.params.bookId;
        const result = await bookService.removeBook(bookId);
        return res.status(200).json({ok: 'ok'});
    } catch (error) {
        next(error)
    }
}
