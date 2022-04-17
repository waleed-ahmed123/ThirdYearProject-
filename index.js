const express = require("express");
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const { dirname } = require("path");

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//app.use('/js', express.static(__dirname + 'public/javascript/answers'))

app.set('view engine', 'ejs');
app.engine('ejs', ejsMate)
app.set('views', path.join(__dirname, '/views'));

var myScripts = require('./public/javascript/answers');

/* app.use((req, res) => {
    console.log("We got a new request")
    res.send("<h1>Hello, we got your request</h1>")
}) */

/* app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
}) */

const topics = [
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
]
const additionQuestions = [
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
]

const additionAnswers = [
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
]

app.get('/allTopics', (req, res) => {
    res.render('topics/index', { topics, additionQuestions })
})
app.get('/addition', (req, res) => {
    res.render('topics/addition', { additionQuestions, additionAnswers, utils: myScripts })
})

app.get('/', (req, res) => {
    res.render('home.ejs')
})
app.get('/topics', (req, res) => {
    res.render('topics.ejs', { topics, additionQuestions })
})
app.get('/contacts', (req, res) => {
    res.render('contact.ejs')
})
app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('*', (req, res) => {
    res.send("I dont know this request")
})

app.listen(3333, () => {
    console.log("Listening on port 3333");
})