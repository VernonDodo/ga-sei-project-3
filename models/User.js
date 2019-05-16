const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const User = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date(YYYY-MM-DD),
    email: String
    
})

module.exports('User', User)