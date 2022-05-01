const mongoose = require('mongoose');
const { AdditionQuestions, SubtractionQuestions } = require('../models/questions')
const { AdditionAnswers, SubtractionAnswers } = require('../models/answers')
const subQuestions = require('../models/questions')
const subAnswers = require('../models/answers')
const { additionQuestions, additionAnswers } = require('./additionQuestionAnswers')
const { subtractionQuestions, subtractionAnswers } = require('./subtractionQuestionAnswers')

mongoose.connect('mongodb://localhost:27017/maths-quiz', {
    useNewUrlParser: true,
    //useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await AdditionQuestions.deleteMany({});
    await SubtractionQuestions.deleteMany({});
    //await addAnswers.deleteMany({});
    await AdditionAnswers.deleteMany({});
    await SubtractionAnswers.deleteMany({});
    /* const q = new Questions({ id: 1, question: 'what is 1+1?' })
    await q.save(); */

    for (let i = 0; i < additionQuestions.length; i++) {
        const q = new AdditionQuestions({
            id: `${additionQuestions[i].id}`,
            question: `${additionQuestions[i].question}`
        })
        await q.save();
    }

    for (let i = 0; i < subtractionQuestions.length; i++) {
        const q = new SubtractionQuestions({
            id: `${subtractionQuestions[i].id}`,
            question: `${subtractionQuestions[i].question}`
        })
        await q.save();
    }
    /*     for (let i = 0; i < additionAnswers.length; i++) {
            for (j = 0; j < additionAnswers[i].answers.length; j++) {
                const a = new Answers({
                    id: `${additionAnswers[i].id}`,
                    correctAnswer: `${additionAnswers[i].correctAnswer}`,
                    answers: {
                        id: `${additionAnswers[i].answers[j, j].id}`,
                        answer: `${additionAnswers[i].answers[j, j].answer}`
                    }
                })
                await a.save();
            }
        } */

    const a = AdditionAnswers.insertMany([
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
        }
    ])
        .then(data => {
            console.log(data)
        })




    const s = SubtractionAnswers.insertMany([
        {
            id: 1,
            correctAnswer: 18,
            answers: [
                {
                    id: 1,
                    answer: 17
                },
                {
                    id: 2,
                    answer: 18
                },
                {
                    id: 3,
                    answer: 19
                },
                {
                    id: 4,
                    answer: 16
                },
            ]
        },
        {
            id: 2,
            correctAnswer: 27,
            answers: [
                {
                    id: 1,
                    answer: 37
                },
                {
                    id: 2,
                    answer: 26
                },
                {
                    id: 3,
                    answer: 27
                },
                {
                    id: 4,
                    answer: 28
                },
            ]
        },
        {
            id: 3,
            correctAnswer: 3.9,
            answers: [
                {
                    id: 1,
                    answer: 2.9
                },
                {
                    id: 2,
                    answer: 3.9
                },
                {
                    id: 3,
                    answer: 4
                },
                {
                    id: 4,
                    answer: 4.1
                },
            ]
        },
        {
            id: 4,
            correctAnswer: 6.4,
            answers: [
                {
                    id: 1,
                    answer: 6.5
                },
                {
                    id: 2,
                    answer: 7.4
                },
                {
                    id: 3,
                    answer: 6.4
                },
                {
                    id: 4,
                    answer: 6.2
                },
            ]
        },
    ])
        .then(data => {
            console.log(data)
        })



}

seedDB();