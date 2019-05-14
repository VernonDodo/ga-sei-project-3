const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
const item = require('./Item')

const Cart = new Schema({
    item: item,
    quantity: Number,
    total: Number
})

module.exports('Cart', Cart)