const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    year: Number,
    make: String,
    model: String,
    designs: [{
        type: Schema.Types.ObjectId,
        ref: 'Design',
    }],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Car', carSchema);