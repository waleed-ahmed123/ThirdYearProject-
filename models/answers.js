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

module.exports = mongoose.model('AdditionAnswers', additionAnswerSchema);