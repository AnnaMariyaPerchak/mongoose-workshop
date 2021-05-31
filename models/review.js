const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ReviewSchema = new Schema(
    {
        book: {type: ObjectId, ref: 'Book', required: true},
        text: {type: String, max: 5000},
        nickname: {type: String, min: 2, max: 150, required: true},
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Review', ReviewSchema);
