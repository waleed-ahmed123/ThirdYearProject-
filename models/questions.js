const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionQuestionSchema = new Schema({
    id: Number,
    question: String
})

module.exports = mongoose.model('AdditionQuestions', additionQuestionSchema);