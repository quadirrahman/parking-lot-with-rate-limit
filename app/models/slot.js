const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');

const slotSchema = new Schema({
    slotNumber: {
        type: Number,
        unique: true,
    },
    carNumber: {
        type: String,
        unique: true,
    },
    createdAt: {
        type: Date, 
        default: Date.now()
    }
})
slotSchema.plugin(uniqueValidator)
const Slot = mongoose.model('Slot', slotSchema)

module.exports = Slot