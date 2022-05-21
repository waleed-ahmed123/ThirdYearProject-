const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setting the addition answer schema for the database
const additionAnswerSchema = new Schema({
    id: Number,
    correctAnswer: Number,
    answers: [{
        id: Number,
        answer: Number
    }]
})

// Setting the subtraction answer schema for the database
const subtractionAnswerSchema = new Schema({
    id: Number,
    correctAnswer: Number,
    answers: [{
        id: Number,
        answer: Number
    }]
})

// Setting the multiplication answer schema for the database
const multiplicationAnswerSchema = new Schema({
    id: Number,
    correctAnswer: Number,
    answers: [{
        id: Number,
        answer: Number
    }]
})

// Setting the division answer schema for the database
const divisionAnswerSchema = new Schema({
    id: Number,
    correctAnswer: Number,
    answers: [{
        id: Number,
        answer: Number
    }]
})

// Export the schemas so they can be accessed in other files
module.exports.AdditionAnswers = mongoose.model('AdditionAnswers', additionAnswerSchema);
module.exports.SubtractionAnswers = mongoose.model('SubtractionAnswers', subtractionAnswerSchema);
module.exports.MultiplicationAnswers = mongoose.model('MultiplicationAnswers', multiplicationAnswerSchema);
module.exports.DivisionAnswers = mongoose.model('DivisionAnswers', divisionAnswerSchema);