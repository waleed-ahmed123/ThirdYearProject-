if (typeof window !== 'undefined') {
    console.log('You are on the browser')
    // 👉️ can use alert()
} else {
    console.log('You are on the server')
    // 👉️ can't use alert()
}

/* const btn = document.getElementById('#answerButton');

btn.onclick = function () {
    console.log('clicked')
}

const checkAnswer = function (usersAnswer, correctAnswer) {
    if (usersAnswer != correctAnswer) {
        console.log('wrong answer')
    } else if (usersAnswer == correctAnswer) {
        console.log('correct answer')
    }
}  */