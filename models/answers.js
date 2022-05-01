const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const additionAnswerSchema = new Schema({
    id: Number,
    correctAnswer: Number,
    answers: [{
        id: Number,
        answer: Number
    }]
})

const subtractionAnswerSchema = new Schema({
    id: Number,
    correctAnswer: Number,
    answers: [{
        id: Number,
        answer: Number
    }]
})

module.exports.AdditionAnswers = mongoose.model('AdditionAnswers', additionAnswerSchema);
module.exports.SubtractionAnswers = mongoose.model('SubtractionAnswers', subtractionAnswerSchema);