const quizData = [
    {
        question: "What is C++?",
        a: "C++ is a functional programming language",
        b: "C++ is a procedural programming language",
        c: "C++ supports both procedural and object oriented programming language",
        d: "C++ is an object oriented programming language",
        correct: "c",
    },
    {
        question: "Which of the following is used for comments in C++?",
        a: "both // comment or /* comment */",
        b: "// comment",
        c: " // comment */",
        d: "/* comment */",
        correct: "a",
    },
    {
        question: "Which of the following approach is used by C++?",
        a: "Right-left",
        b: "Bottom-up",
        c: "Left-right",
        d: "Top-down",
        correct: "b",
    },
    {
        question: "What is Inheritance in C++?",
        a: "Overloading of classes",
        b: "Deriving new classes from existing classes",
        c: "Classes with same names",
        d: "Wrapping of data into a single class",
        correct: "b",
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
window.location=' http://127.0.0.1:5500/Quiz/main.html';  // you can also use element.submit() if your input type='submit' 
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