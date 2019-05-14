const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Item = new Schema({
    name: String,
    price: Number
})

module.exports('Item', Item)