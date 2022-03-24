const mongoose = require('mongoose');
const { Schema } = mongoose;

const rantSchema = new Schema({
    author: { type: String, default: 'Anon' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
});

rantSchema.static.defaultAuthor = `Anon`;

module.exports = mongoose.model('comment', rantSchema);