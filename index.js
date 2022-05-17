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
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/maths-quiz';
//'mongodb://localhost:27017/maths-quiz'

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

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

/* const topics = [
    {
        id: 1,
        name: 'Addition'
    },
    {
        id: 2,
        name: 'Subtraction'
    },
    {
        id: 3,
        name: 'Multiplication'
    },
    {
        id: 4,
        name: 'Division'
    }
] */
/* const additionQuestions = [
    {
        id: 1,
        question: 'What is 1 + 1?'
    },
    {
        id: 2,
        question: 'What is 5 + 4?'
    },
    {
        id: 3,
        question: 'What is 12 + 9?'
    },
    {
        id: 4,
        question: 'What is 13 + 17?'
    }
] */

/* const additionAnswers = [
    {
        id: 1,
        correctAnswer: 2,
        answers: [
            {
                id: 1,
                answer: 2
            },
            {
                id: 2,
                answer: 3
            },
            {
                id: 3,
                answer: 4
            },
            {
                id: 4,
                answer: 5
            },
        ]
    },
    {
        id: 2,
        correctAnswer: 9,
        answers: [
            {
                id: 1,
                answer: 6
            },
            {
                id: 2,
                answer: 7
            },
            {
                id: 3,
                answer: 8
            },
            {
                id: 4,
                answer: 9
            },
        ]
    },
    {
        id: 3,
        correctAnswer: 21,
        answers: [
            {
                id: 1,
                answer: 20
            },
            {
                id: 2,
                answer: 21
            },
            {
                id: 3,
                answer: 22
            },
            {
                id: 4,
                answer: 23
            },
        ]
    },
    {
        id: 4,
        correctAnswer: 30,
        answers: [
            {
                id: 1,
                answer: 28
            },
            {
                id: 2,
                answer: 29
            },
            {
                id: 3,
                answer: 40
            },
            {
                id: 4,
                answer: 30
            },
        ]
    },
] */

app.get('/allTopics', async (req, res) => {
    const topics = await Topics.find()
    res.render('topics/index', { topics })
})
app.get('/addition', async (req, res) => {
    const additionQuestions = await AdditionQuestions.find()
    const additionAnswers = await AdditionAnswers.find()
    res.render('topics/addition', { additionQuestions, additionAnswers, utils: myScripts })
})

app.get('/subtraction', async (req, res) => {
    const subtractionQuestions = await SubtractionQuestions.find()
    const subtractionAnswers = await SubtractionAnswers.find()
    res.render('topics/subtraction', { subtractionQuestions, subtractionAnswers, utils: myScripts })
})

app.get('/multiplication', async (req, res) => {
    const multiplicationQuestions = await MultiplicationQuestions.find()
    const multiplicationAnswers = await MultiplicationAnswers.find()
    res.render('topics/multiplication', { multiplicationQuestions, multiplicationAnswers, utils: myScripts })
})

app.get('/division', async (req, res) => {
    const divisionQuestions = await DivisionQuestions.find()
    const divisionAnswers = await DivisionAnswers.find()
    res.render('topics/division', { divisionQuestions, divisionAnswers, utils: myScripts })
})

app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.get('/topics', async (req, res) => {
    const topics = await Topics.find()
    res.render('topics.ejs', { topics })
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('*', (req, res) => {
    res.send("I dont know this request")
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})