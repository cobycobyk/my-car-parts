const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {type: String, required: true},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    userName: String,
    userAvatar: String,
}, {
    timestamps: true,
});

const favoriteSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});

const designSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Replacement Part', 'Modification', 'Upgrade']
    },
    instructions: String,
    images: {
        type: String,
        default: 'https://i.imgur.com/wuuoBBA.png',
    },
    license: {
        type: String,
        enum: ['Creative Commons - Attribution', 'Creative Commons - Attribution - Share Alike', 'Creative Commons - Attribution - No Derivatives', 'Creative Commons - Attribution - Non-Commercial', 'Creative Commons - Public Domain Dedication'],
        required: true,
        default: 'Creative Commons - Attribution',
    },
    comments: [commentSchema],
    favorites: [favoriteSchema],
    car: [{
        type: Schema.Types.ObjectId,
        ref: 'Car'
    }],
    designer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Design', designSchema)