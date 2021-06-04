const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    title: {type:String, required: true},
    description: String,
    year: Number,
    author: Schema.Types.ObjectId | String,
    // reviews: Ref'Review'[]
    reviews:[{type: Schema.Types.ObjectId, ref: 'Review'}]
  },
  {timestamps:true}
);

module.exports = mongoose.model('Book', BookSchema);
