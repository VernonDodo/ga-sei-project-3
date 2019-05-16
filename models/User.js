const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date,
    email: String
    
})

module.exports = mongoose.model('User', User)