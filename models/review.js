const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
  {
    // book: ref to books,
    book: { type: Schema.Types.ObjectId, ref: 'Book',required:true },
    text: String,
    nickname: {type:String,required:true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
