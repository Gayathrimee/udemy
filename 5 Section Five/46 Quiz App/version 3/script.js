// const { current } = require("immer");

const quizData = [
    {
        question:"Which language runs in a web browser?",
        a: "Java",
        b:"C",
        c:"Python",
        d:"JavaScript",
        correct:"d"
    },
    {
        question:"What does HTML stand for?",
        a:"Hypertext Markup Language",
        b:"HyperText Markdown Language",
        c:"HyperText Machine Language",
        d:"Helicopters Terminals Mototboats Lamborginis",
        correct:"a"
    },
    {
        question:"What does CSS stand for?",
        a:"Central Style Sheets",
        b:"Cascading Style Sheets",
        c:"Cascading Simple Sheets",
        d:"Cars SUVs Sailboats",
        correct:"b"
    },
    {
        question:"What year was JavaScrip launched?",
        a:"1996",
        b:"1995",
        c:"1994",
        d:"none of the above",
        correct:"b"
    }
];

const quizContainer = document.getElementById('quiz')
const answers = document.querySelectorAll('.answer')
const question = document.getElementById('question')
const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')
const submission = document.getElementById('submit')

let currentQuiz = 0
let score = 0

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    question.innerHTML = currentQuizData.question
    aText.innerHTML = currentQuizData.a
    bText.innerHTML = currentQuizData.b
    cText.innerHTML = currentQuizData.c
    dText.innerHTML = currentQuizData.d
}

loadQuiz()

function deselectAnswers(){
    answers.forEach(answer => answer.checked = false)
}

function getSelected(){
    let theAnswer

    answers.forEach(answer =>{
        if(answer.checked){
            theAnswer = answer.id
        }
    })

    return theAnswer
}

submission.addEventListener('click',()=>{
    const newAnswer = getSelected()
    console.log(newAnswer)

    if(newAnswer){
        if(newAnswer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()

        } else{
            quizContainer.innerHTML = `
            <h2> You Answered correctly at ${score}/${quizData.length} questions</h2>
            
            <button onclick = "location.reload()">Reload</button>`
        }
    }
})