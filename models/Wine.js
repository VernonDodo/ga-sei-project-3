const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Wine = new Schema({
    name: String,
    varietal: String,
    type: String,
    producer: String,
    description: String
})

module.exports('Wine', Wine)