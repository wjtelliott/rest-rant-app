const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, default: 'No City' },
    state: { type: String, default: 'No State' },
    cuisines: { type: String, required: true },
    founded: { 
        type: Number,
        min: [1673, 'That value is too old for REST-Rant'],
        max: [new Date().getFullYear(), 'Can\'t use years in the future'],
        default: 2000
        },
    pic: { type: String, default: 'https://cdn.vox-cdn.com/thumbor/NUeFZ9TtolyWpOu_-4x1QpjxtYk=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66921789/ostia2.21.jpeg' },
    archived: { type: Boolean, default: false },
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'comment'
    }]
});

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}!`
};

module.exports = mongoose.model('places', placeSchema);