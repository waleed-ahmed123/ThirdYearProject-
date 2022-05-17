if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const mongoose = require('mongoose');
const { AdditionQuestions, SubtractionQuestions, MultiplicationQuestions, DivisionQuestions } = require('../models/questions')
const { AdditionAnswers, SubtractionAnswers, MultiplicationAnswers, DivisionAnswers } = require('../models/answers')
const { Topics } = require('../models/topics')
const { additionQuestions, additionAnswers } = require('./additionQuestionAnswers')
const { subtractionQuestions, subtractionAnswers } = require('./subtractionQuestionAnswers')
const { multiplicationQuestions, multiplicationAnswers } = require('./multiplicationQuestionAnswers')
const { divisionQuestions, divisionAnswers } = require('./divisionQuestionAnswers')
const { topics } = require('./topics')
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/maths-quiz';

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
        },
        {
            id: 5,
            correctAnswer: 116,
            answers: [
                {
                    id: 1,
                    answer: 126
                },
                {
                    id: 2,
                    answer: 108
                },
                {
                    id: 3,
                    answer: 116
                },
                {
                    id: 4,
                    answer: 118
                },
            ]
        },
        {
            id: 6,
            correctAnswer: 8.2,
            answers: [
                {
                    id: 1,
                    answer: 7.3
                },
                {
                    id: 2,
                    answer: 8.2
                },
                {
                    id: 3,
                    answer: 9.2
                },
                {
                    id: 4,
                    answer: 7.4
                },
            ]
        },
        {
            id: 7,
            correctAnswer: 520,
            answers: [
                {
                    id: 1,
                    answer: 420
                },
                {
                    id: 2,
                    answer: 630
                },
                {
                    id: 3,
                    answer: 510
                },
                {
                    id: 4,
                    answer: 520
                },
            ]
        },
        {
            id: 8,
            correctAnswer: 780,
            answers: [
                {
                    id: 1,
                    answer: 880
                },
                {
                    id: 2,
                    answer: 770
                },
                {
                    id: 3,
                    answer: 780
                },
                {
                    id: 4,
                    answer: 870
                },
            ]
        },
        {
            id: 9,
            correctAnswer: 594,
            answers: [
                {
                    id: 1,
                    answer: 587
                },
                {
                    id: 2,
                    answer: 594
                },
                {
                    id: 3,
                    answer: 601
                },
                {
                    id: 4,
                    answer: 599
                },
            ]
        },
        {
            id: 10,
            correctAnswer: 3026,
            answers: [
                {
                    id: 1,
                    answer: 3026
                },
                {
                    id: 2,
                    answer: 3016
                },
                {
                    id: 3,
                    answer: 3036
                },
                {
                    id: 4,
                    answer: 3333
                },
            ]
        },
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
        {
            id: 5,
            correctAnswer: 44,
            answers: [
                {
                    id: 1,
                    answer: 37
                },
                {
                    id: 2,
                    answer: 38
                },
                {
                    id: 3,
                    answer: 44
                },
                {
                    id: 4,
                    answer: 41
                },
            ]
        },
        {
            id: 6,
            correctAnswer: 260,
            answers: [
                {
                    id: 1,
                    answer: 360
                },
                {
                    id: 2,
                    answer: 260
                },
                {
                    id: 3,
                    answer: 258
                },
                {
                    id: 4,
                    answer: 269
                },
            ]
        },
        {
            id: 7,
            correctAnswer: 4813,
            answers: [
                {
                    id: 1,
                    answer: 4756
                },
                {
                    id: 2,
                    answer: 4912
                },
                {
                    id: 3,
                    answer: 4813
                },
                {
                    id: 4,
                    answer: 4613
                },
            ]
        },
        {
            id: 8,
            correctAnswer: 3768,
            answers: [
                {
                    id: 1,
                    answer: 3657
                },
                {
                    id: 2,
                    answer: 3867
                },
                {
                    id: 3,
                    answer: 3723
                },
                {
                    id: 4,
                    answer: 3768
                },
            ]
        },
        {
            id: 9,
            correctAnswer: 123,
            answers: [
                {
                    id: 1,
                    answer: 123
                },
                {
                    id: 2,
                    answer: 77
                },
                {
                    id: 3,
                    answer: 144
                },
                {
                    id: 4,
                    answer: 135
                },
            ]
        },
        {
            id: 10,
            correctAnswer: 807,
            answers: [
                {
                    id: 1,
                    answer: 900
                },
                {
                    id: 2,
                    answer: 807
                },
                {
                    id: 3,
                    answer: 777
                },
                {
                    id: 4,
                    answer: 831
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
        {
            id: 5,
            correctAnswer: 1080,
            answers: [
                {
                    id: 1,
                    answer: 1080
                },
                {
                    id: 2,
                    answer: 1180
                },
                {
                    id: 3,
                    answer: 1160
                },
                {
                    id: 4,
                    answer: 1190
                },
            ]
        },
        {
            id: 6,
            correctAnswer: 22,
            answers: [
                {
                    id: 1,
                    answer: 48
                },
                {
                    id: 2,
                    answer: 22
                },
                {
                    id: 3,
                    answer: 25
                },
                {
                    id: 4,
                    answer: 23
                },
            ]
        },
        {
            id: 7,
            correctAnswer: 243.3,
            answers: [
                {
                    id: 1,
                    answer: 243.3
                },
                {
                    id: 2,
                    answer: 243
                },
                {
                    id: 3,
                    answer: 2433
                },
                {
                    id: 4,
                    answer: 0.2433
                },
            ]
        },
        {
            id: 8,
            correctAnswer: 4,
            answers: [
                {
                    id: 1,
                    answer: 3
                },
                {
                    id: 2,
                    answer: 6
                },
                {
                    id: 3,
                    answer: 5
                },
                {
                    id: 4,
                    answer: 4
                },
            ]
        },
        {
            id: 9,
            correctAnswer: 144,
            answers: [
                {
                    id: 1,
                    answer: 144
                },
                {
                    id: 2,
                    answer: 136
                },
                {
                    id: 3,
                    answer: 132
                },
                {
                    id: 4,
                    answer: 156
                },
            ]
        },
        {
            id: 10,
            correctAnswer: 64,
            answers: [
                {
                    id: 1,
                    answer: 72
                },
                {
                    id: 2,
                    answer: 64
                },
                {
                    id: 3,
                    answer: 56
                },
                {
                    id: 4,
                    answer: 63
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
        {
            id: 5,
            correctAnswer: 10,
            answers: [
                {
                    id: 1,
                    answer: 10
                },
                {
                    id: 2,
                    answer: 9
                },
                {
                    id: 3,
                    answer: 8
                },
                {
                    id: 4,
                    answer: 11
                },
            ]
        },
        {
            id: 6,
            correctAnswer: 7,
            answers: [
                {
                    id: 1,
                    answer: 6
                },
                {
                    id: 2,
                    answer: 5
                },
                {
                    id: 3,
                    answer: 9
                },
                {
                    id: 4,
                    answer: 7
                },
            ]
        },
        {
            id: 7,
            correctAnswer: 85,
            answers: [
                {
                    id: 1,
                    answer: 119
                },
                {
                    id: 2,
                    answer: 85
                },
                {
                    id: 3,
                    answer: 99
                },
                {
                    id: 4,
                    answer: 78
                },
            ]
        },
        {
            id: 8,
            correctAnswer: 3,
            answers: [
                {
                    id: 1,
                    answer: 0.4
                },
                {
                    id: 2,
                    answer: 5
                },
                {
                    id: 3,
                    answer: 6
                },
                {
                    id: 4,
                    answer: 3
                },
            ]
        },
        {
            id: 9,
            correctAnswer: 12,
            answers: [
                {
                    id: 1,
                    answer: 13
                },
                {
                    id: 2,
                    answer: 12
                },
                {
                    id: 3,
                    answer: 11
                },
                {
                    id: 4,
                    answer: 14
                },
            ]
        },
        {
            id: 10,
            correctAnswer: 40,
            answers: [
                {
                    id: 1,
                    answer: 40
                },
                {
                    id: 2,
                    answer: 20
                },
                {
                    id: 3,
                    answer: 35
                },
                {
                    id: 4,
                    answer: 33
                },
            ]
        },
    ])
        .then(data => {
            console.log(data)
        })
}

seedDB();