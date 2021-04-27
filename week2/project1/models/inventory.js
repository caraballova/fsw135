const mongoose = require("mongoose")
const Schema = mongoose.Schema

// INVENTORY SCHEMA

const inventorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
   /*  active_ind: { // active indicator
        type: Boolean,
        required: true,
        default: 1
    },
    insert_dt: {
        type: Date,
        required: true,
        default: Date.now
    },
    insert_id: {
        type: String,
        required: true
    } */
})

module.exports = mongoose.model("Inventory", inventorySchema)