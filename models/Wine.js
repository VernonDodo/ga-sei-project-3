const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Wine = new Schema({
    producer: String,
    name: String,
    vintage: Number,
    variety: String,
    type: String,
    price: Number,
    description: String
})

module.exports = mongoose.model('Wine', Wine)