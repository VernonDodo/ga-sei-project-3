const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const address = new Schema({
    house_number: Number,
    street_name: String,
    city: String,
    state: String,
    zip_code: String
})

module.exports('Address', Address)