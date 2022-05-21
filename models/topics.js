const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setting the topics schema for the database
const topicsSchema = new Schema({
    id: Number,
    name: String
})

// Exporting the schemas so they can be used in other files
module.exports.Topics = mongoose.model('Topics', topicsSchema);