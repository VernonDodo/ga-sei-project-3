const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const address = new Schema({
    house_number: Number,
    street_name: String,
    city: String,
    state: String,
    zip_code: String
})

const User = new Schema({
    first_name: String,
    last_name: String,
    date_of_birth: Date(),
    address: address,
    
})

module.exports('User', User)