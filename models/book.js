const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BookSchema = new Schema(
    {
        title: {type: String, min: 2, max: 500},
        description: {type: String, max: 5000},
        year: { type: Number },
        author: {type: ObjectId, ref: 'TrainingRequest'},
        reviews: [
            {type: ObjectId, ref: 'Review'}
        ]
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Book', BookSchema);
