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
    socials: String,
    favorites: {
        type: Schema.Types.ObjectId,
        ref: 'design'
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema)