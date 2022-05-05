const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicsSchema = new Schema({
    id: Number,
    name: String
})

module.exports.Topics = mongoose.model('Topics', topicsSchema);