const { Schema, model } = require('mongoose')

const inventorySchema = new Schema({
    username: { type: String },
    products: [
        {
            reference: { type: String },
            name: { type: String },
            price: { type: String }
        }
    ]
})

const inventoryModel = model('inventories', inventorySchema)

module.exports = inventoryModel