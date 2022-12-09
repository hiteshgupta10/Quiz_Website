const quizData = [
    {
        question: "What is JavaScript?",
        a: "All",
        b: "JavaScript is a compiled language used to make the website interactive",
        c: " JavaScript is a scripting language used to make the website interactive",
        d: "JavaScript is an assembly language used to make the website interactive",
        correct: "c",
    },
    {
        question: "Which of the following is correct about JavaScript?",
        a: "It is an ordered list of objects",
        b: "It is an ordered list of string",
        c: "It is an ordered list of functions",
        d: "It is an ordered list of values",
        correct: "d",
    },
    {
        question: "Which of the following is not javascript data types?",
        a: " Number type",
        b: "All of the mentioned",
        c: "Undefined type",
        d: "Null type",
        correct: "b",
    },
    {
        question: "Why JavaScript Engine is needed?",
        a: "Interpreting the JavaScript",
        b: "Compiling the JavaScript",
        c: "Parsing the javascript",
        d: "Both Compiling & Interpreting the JavaScript",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function foo() {
var user_choice = window.confirm('Do you want go back to Quiz-Land');
if(user_choice==true) {
window.location='http://127.0.0.1:5500/Quiz/main.html';  // you can also use element.submit() if your input type='submit' 
} else {
return false;
}
}
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly  ${score} out of ${quizData.length} questions.</h2>
                
                <button onclick="foo()">Go To Home</button>
            `;
        }
    }
});