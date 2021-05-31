const reviewService = require('../services').review;

module.exports = {
    createReview,
    updateReview,
    removeReview
};

async function createReview(req, res, next) {
    try {
        const data = req.body;
        const result = await reviewService.createReview(data);
        return res.status(201).json(result);
    } catch (error) {
        next(error)
    }
}

async function updateReview(req, res, next) {
    try {
        const bookId = req.params.bookId;
        const payload = req.body;
        const result = await reviewService.updateReview(bookId, payload);
        return res.status(200).json(result);
    } catch (error) {
        next(error)
    }
}

async function removeReview(req, res, next) {
    try {
        const bookId = req.params.bookId;
        const result = await reviewService.removeReview(bookId);
        return res.status(200).json({ok: 'ok'});
    } catch (error) {
        next(error)
    }
}
