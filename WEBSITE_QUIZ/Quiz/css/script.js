const quizData = [
    {
        question: "What is CSS?",
        a: "CSS is the language used to style the HTML documents",
        b: "All of the mentioned",
        c: "CSS is designed to separate the presentation and content, including layout, colors, and fonts",
        d: "CSS is a style sheet language",
        correct: "b",
    },
    {
        question: "Which of the following tag is used to embed css in html page?",
        a: "<css>",
        b: "<!DOCTYPE html>",
        c: "<script>",
        d: "<style>",
        correct: "d",
    },
    {
        question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
        a: "CSS",
        b: "HTML",
        c: "PHP",
        d: "Ajax",
        correct: "a",
    },
    {
        question: "Which of the following CSS property is used to make the text bold?",
        a: "text-align: bold",
        b: "font-weight: bold",
        c: "text-decoration: bold",
        d: "font-style: bold",
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
window.location='https://hiteshgupta10.github.io/Quiz_Website/WEBSITE_QUIZ/main.html ';  // you can also use element.submit() if your input type='submit' 
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
