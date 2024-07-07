const mongoose = require('mongoose')
const { Schema } = mongoose;

const blogSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  sold: Boolean
});

const user4 = mongoose.model('apr', blogSchema);
module.exports = user4 ;