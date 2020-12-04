const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required: true,
    },
    email: String,
    avatar: String,
    nickname: String,
    bio: String,
    instagram: String,
    favorites: {
        type: Schema.Types.ObjectId,
        ref: 'Design'
    },
    myCars: [{
        type: Schema.Types.ObjectId,
        ref: 'Car',
    }],
}, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema)