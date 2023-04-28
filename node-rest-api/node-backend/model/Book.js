const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
let Book = new Schema({
  orgName: {
    type: String
  },
  price: {
    type: String
  },
  description: {
    type: String
  }
}, {
  collection: 'books'
})
 
module.exports = mongoose.model('Book', Book)