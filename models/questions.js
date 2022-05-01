const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionQuestionSchema = new Schema({
    id: Number,
    question: String
})

const subtractionQuestionSchema = new Schema({
    id: Number,
    question: String
})

module.exports.AdditionQuestions = mongoose.model('AdditionQuestions', additionQuestionSchema);
module.exports.SubtractionQuestions = mongoose.model('SubtractionQuestions', subtractionQuestionSchema);