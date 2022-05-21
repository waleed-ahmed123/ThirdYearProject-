const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Setting the addition question schema for the database
const additionQuestionSchema = new Schema({
    id: Number,
    question: String
})

// Setting the subtraction question schema for the database
const subtractionQuestionSchema = new Schema({
    id: Number,
    question: String
})

// Setting the multiplication question schema for the database
const multiplicationQuestionSchema = new Schema({
    id: Number,
    question: String
})

// Setting the division question schema for the database
const divisionQuestionSchema = new Schema({
    id: Number,
    question: String
})

// Export the schemas so they can be accessed in other files
module.exports.AdditionQuestions = mongoose.model('AdditionQuestions', additionQuestionSchema);
module.exports.SubtractionQuestions = mongoose.model('SubtractionQuestions', subtractionQuestionSchema);
module.exports.MultiplicationQuestions = mongoose.model('MultiplicationQuestions', multiplicationQuestionSchema);
module.exports.DivisionQuestions = mongoose.model('DivisionQuestions', divisionQuestionSchema);