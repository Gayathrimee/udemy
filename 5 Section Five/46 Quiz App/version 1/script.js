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

const quiz = document.getElementById('quiz')
const answersEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answersEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer 

    answersEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else{
            quiz.innerHTML = `
            <h2> You answered correctly at ${score} /
             ${quizData.length} questions </h2>

             <button onclick = "location.reload()">Reload</button>
            `
        }
    }
})