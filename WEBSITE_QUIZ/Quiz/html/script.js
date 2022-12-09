const quizData = [
    {
        question: "What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Marking Language",
        c: "HyperText Marking Language",
        d: "HyperText Machine Language",
        correct: "a",
    },
    {
        question: "What is HTML?",
        a: "HTML describes the structure of a webpage",
        b: "HTML is the standard markup language mainly used to create web pages",
        c: "All of the mentioned",
        d: "HTML consists of a set of elements that helps the browser how to view the content",
        correct: "c",
    },
    {
        question: "Which of the following is used to read an HTML page and render it?",
        a: "Web server",
        b: "Web matrix",
        c: "Web network",
        d: "Web browser",
        correct: "d",
    },
    {
        question: "Which element is used to get highlighted text in HTML5?",
        a: "<u>",
        b: "<b>",
        c: "<highlight>",
        d: "<mark>",
        correct: "d",
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