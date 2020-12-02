const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const designerSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true,
    },
    email: String,
    avatar: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', designerSchema)