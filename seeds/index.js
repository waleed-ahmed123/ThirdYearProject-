const mongoose = require('mongoose');
const Questions = require('../models/questions')
const Answers = require('../models/answers')
const { additionQuestions, additionAnswers } = require('./additionQuestion')

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
    await Questions.deleteMany({});
    await Answers.deleteMany({});
    /* const q = new Questions({ id: 1, question: 'what is 1+1?' })
    await q.save(); */
    console.log(additionQuestions)
    console.log(additionAnswers)
    console.log(additionAnswers.length)
    /*     console.log(additionAnswers[0].answers.length)
        console.log(additionAnswers[0].answers[0, 1].answer)
        console.log(additionAnswers[0].answers[0, 2].answer)
        console.log(additionAnswers[1].answers[0, 2].answer) */
    for (let i = 0; i < additionQuestions.length; i++) {
        const q = new Questions({
            id: `${additionQuestions[i].id}`,
            question: `${additionQuestions[i].question}`
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

    const a = Answers.insertMany([
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

}

seedDB();