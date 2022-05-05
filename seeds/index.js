const mongoose = require('mongoose');
const { AdditionQuestions, SubtractionQuestions, MultiplicationQuestions, DivisionQuestions } = require('../models/questions')
const { AdditionAnswers, SubtractionAnswers, MultiplicationAnswers, DivisionAnswers } = require('../models/answers')
const { Topics } = require('../models/topics')
const { additionQuestions, additionAnswers } = require('./additionQuestionAnswers')
const { subtractionQuestions, subtractionAnswers } = require('./subtractionQuestionAnswers')
const { multiplicationQuestions, multiplicationAnswers } = require('./multiplicationQuestionAnswers')
const { divisionQuestions, divisionAnswers } = require('./divisionQuestionAnswers')
const { topics } = require('./topics')


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
    await MultiplicationQuestions.deleteMany({});
    await DivisionQuestions.deleteMany({});
    await Topics.deleteMany({});

    await AdditionAnswers.deleteMany({});
    await SubtractionAnswers.deleteMany({});
    await MultiplicationAnswers.deleteMany({});
    await DivisionAnswers.deleteMany({});

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

    for (let i = 0; i < multiplicationQuestions.length; i++) {
        const q = new MultiplicationQuestions({
            id: `${multiplicationQuestions[i].id}`,
            question: `${multiplicationQuestions[i].question}`
        })
        await q.save();
    }

    for (let i = 0; i < divisionQuestions.length; i++) {
        const q = new DivisionQuestions({
            id: `${divisionQuestions[i].id}`,
            question: `${divisionQuestions[i].question}`
        })
        await q.save();
    }

    for (let i = 0; i < topics.length; i++) {
        const q = new Topics({
            id: `${topics[i].id}`,
            name: `${topics[i].name}`
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



    const m = MultiplicationAnswers.insertMany([
        {
            id: 1,
            correctAnswer: 4,
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
            correctAnswer: 20,
            answers: [
                {
                    id: 1,
                    answer: 15
                },
                {
                    id: 2,
                    answer: 16
                },
                {
                    id: 3,
                    answer: 25
                },
                {
                    id: 4,
                    answer: 20
                },
            ]
        },
        {
            id: 3,
            correctAnswer: 24,
            answers: [
                {
                    id: 1,
                    answer: 18
                },
                {
                    id: 2,
                    answer: 30
                },
                {
                    id: 3,
                    answer: 24
                },
                {
                    id: 4,
                    answer: 22
                },
            ]
        },
        {
            id: 4,
            correctAnswer: 21,
            answers: [
                {
                    id: 1,
                    answer: 20
                },
                {
                    id: 2,
                    answer: 29
                },
                {
                    id: 3,
                    answer: 21
                },
                {
                    id: 4,
                    answer: 28
                },
            ]
        },
    ])
        .then(data => {
            console.log(data)
        })


    const d = DivisionAnswers.insertMany([
        {
            id: 1,
            correctAnswer: 1,
            answers: [
                {
                    id: 1,
                    answer: 2
                },
                {
                    id: 2,
                    answer: 0
                },
                {
                    id: 3,
                    answer: 1
                },
                {
                    id: 4,
                    answer: 0
                },
            ]
        },
        {
            id: 2,
            correctAnswer: 2,
            answers: [
                {
                    id: 1,
                    answer: 2
                },
                {
                    id: 2,
                    answer: 4
                },
                {
                    id: 3,
                    answer: 1
                },
                {
                    id: 4,
                    answer: 3
                },
            ]
        },
        {
            id: 3,
            correctAnswer: 4,
            answers: [
                {
                    id: 1,
                    answer: 5
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
                    answer: 6
                },
            ]
        },
        {
            id: 4,
            correctAnswer: 5,
            answers: [
                {
                    id: 1,
                    answer: 4
                },
                {
                    id: 2,
                    answer: 6
                },
                {
                    id: 3,
                    answer: 2
                },
                {
                    id: 4,
                    answer: 5
                },
            ]
        },
    ])
        .then(data => {
            console.log(data)
        })
}

seedDB();