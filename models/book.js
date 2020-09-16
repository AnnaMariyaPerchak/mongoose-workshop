const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
title: String,
  description: String,
  year: Number,
  author: ObjectId | String,
  reviews: Ref'Review'[]
  createdAt: Date,
  updatedAt: Date
 */

const BookSchema = new Schema({
	title: {type: String, min: 2, max: 150, required: true},
	description: {type: String, min: 2, max: 5000},
	year: Number,
	author: String,
	// reviews: []
}, {
	timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
