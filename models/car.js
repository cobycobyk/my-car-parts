const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    year: Number,
    make: String,
    model: String,
}, {
    timestamps: true,
});