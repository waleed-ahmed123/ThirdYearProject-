// checks if the application is development mode
// If not require the contents of the .env file.
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const { dirname } = require("path");
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize')
const { AdditionQuestions, SubtractionQuestions, MultiplicationQuestions, DivisionQuestions } = require('./models/questions')
const { AdditionAnswers, SubtractionAnswers, MultiplicationAnswers, DivisionAnswers } = require('./models/answers')
const { Topics } = require('./models/topics')
// Connection to the database.
// Use cloud server if not in production otherwise use local server
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/maths-quiz';
//'mongodb://localhost:27017/maths-quiz'

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

// Set connection to database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(mongoSanitize())
//app.use('/js', express.static(__dirname + 'public/javascript/answers'))

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, '/views'));

var myScripts = require('./public/javascript/answers');

// Route to the addition topic page
// Retrieve the questions and answers from the database and stored in a variable
// Passed the questions and answers to the route so they can be used
app.get('/addition', async (req, res) => {
    const additionQuestions = await AdditionQuestions.find()
    const additionAnswers = await AdditionAnswers.find()
    res.render('topics/addition', { additionQuestions, additionAnswers, utils: myScripts })
})

// Route to the subtraction topic page
// Retrieve the questions and answers from the database and stored in a variable
// Passed the questions and answers to the route so they can be used
app.get('/subtraction', async (req, res) => {
    const subtractionQuestions = await SubtractionQuestions.find()
    const subtractionAnswers = await SubtractionAnswers.find()
    res.render('topics/subtraction', { subtractionQuestions, subtractionAnswers, utils: myScripts })
})

// Route to the multiplication topic page
// Retrieve the questions and answers from the database and stored in a variable
// Passed the questions and answers to the route so they can be used
app.get('/multiplication', async (req, res) => {
    const multiplicationQuestions = await MultiplicationQuestions.find()
    const multiplicationAnswers = await MultiplicationAnswers.find()
    res.render('topics/multiplication', { multiplicationQuestions, multiplicationAnswers, utils: myScripts })
})

// Route to the division topic page
// Retrieve the questions and answers from the database and stored in a variable
// Passed the questions and answers to the route so they can be used
app.get('/division', async (req, res) => {
    const divisionQuestions = await DivisionQuestions.find()
    const divisionAnswers = await DivisionAnswers.find()
    res.render('topics/division', { divisionQuestions, divisionAnswers, utils: myScripts })
})

// Home route
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// Route to the topics page
// Retrieve the topics from the database and stored in a variable
// Passed the topics to the route so they can be used
app.get('/topics', async (req, res) => {
    const topics = await Topics.find()
    res.render('topics.ejs', { topics })
})

// About page route
app.get('/about', (req, res) => {
    res.render('about.ejs')
})

// This route is called if a request is made to an unknown route
app.get('*', (req, res) => {
    res.send("I dont know this request")
})

// Listen to the port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})