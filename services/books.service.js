'use strict';
const Book = require('../models/book');
const { badRequest } = require('../config/errorHelper');

module.exports = {
    createBook,
    getAllBooks,
    getBook,
    updateBook,
    removeBook
}


async function createBook(data) {
    const existingBook = await Book.findOne({title: data.title});
    if (existingBook) {
        throw badRequest('Book already exists');
    }
    return await Book.create(data);
}
async function getAllBooks() {
    return Book.find();
}
async function getBook(bookId) {
    const book = await Book.findById(bookId).populate('reviews', 'nickname text createdAt updatedAt');

    if (!book) {
        throw badRequest('Book not exists')
    }

    return book;
}

async function updateBook(bookId, payload) {
    const book = await Book.findById(bookId);

    if (!book) {
        throw badRequest('Book not exists')
    }

    Object.entries(payload || {}).forEach(([key, value]) => {
        if ([
            'title',
            'description',
            'year',
            'author',
        ].includes(key)) book[key] = value || undefined;
    });

    await book.save();
    return book;
}

async function removeBook(bookId) {
    return await Book.findByIdAndRemove(bookId);
}
