const mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
    IdItem : Number,
    IdOwner : String,
    IdBorrow : String,
    Name : String,
    Category : String,
    Status : String,
    Rate : Number,
    BorrowsNum : Number,
    OpenText : String
})

let itemModel = mongoose.model('items', ItemSchema)

module.exports = itemModel;