const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    Username : String,
    Password : String,
    Email : String,
    Address : String,
    Phon : String,
    Rating : Number
})

let userModel = mongoose.model('users', UserSchema)

module.exports = userModel;