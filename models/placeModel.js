const mongoose = require('mongoose');
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: { type: String, required: true },
    city: { type: String, default: 'No City' },
    state: { type: String, default: 'No State' },
    cuisines: { type: String, required: true },
    founded: { type: Number, default: 2000 },
    pic: { type: String, default: 'https://cdn.vox-cdn.com/thumbor/NUeFZ9TtolyWpOu_-4x1QpjxtYk=/0x0:6000x4000/920x613/filters:focal(2520x1520:3480x2480):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66921789/ostia2.21.jpeg' },
    archived: { type: Boolean, default: false }
});

module.exports = mongoose.model('places', placeSchema);