const questions = [
{
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
},
{
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS"
},
{
    question: "Which language is used for web interactivity?",
    options: ["JavaScript", "Java", "C++", "SQL"],
    answer: "JavaScript"
},
{
    question: "Which keyword is used to declare a constant?",
    options: ["let", "var", "const", "static"],
    answer: "const"
},
{
    question: "Which method is used to select an element by ID?",
    options: [
        "querySelector()",
        "getElementById()",
        "getElementsByClassName()",
        "getAttribute()"
    ],
    answer: "getElementById()"
},
{
    question: "Which array method creates a new array?",
    options: [
        "map()",
        "forEach()",
        "push()",
        "splice()"
    ],
    answer: "map()"
},
{
    question: "What does DOM stand for?",
    options: [
        "Document Object Model",
        "Data Object Model",
        "Desktop Object Model",
        "Document Oriented Method"
    ],
    answer: "Document Object Model"
},
{
    question: "Which storage persists after browser refresh?",
    options: [
        "sessionStorage",
        "localStorage",
        "memoryStorage",
        "cacheStorage"
    ],
    answer: "localStorage"
},
{
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: [
        "//",
        "/* */",
        "#",
        "<!-- -->"
    ],
    answer: "//"
},
{
    question: "Which company originally developed JavaScript?",
    options: [
        "Google",
        "Microsoft",
        "Netscape",
        "Apple"
    ],
    answer: "Netscape"
}
];

const questionElement =
document.getElementById("question");

const optionsElement =
document.getElementById("options");

const nextBtn =
document.getElementById("nextBtn");

const scoreElement =
document.getElementById("score");

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {

    const current =
    questions[currentQuestion];

    questionElement.textContent =
    `Q${currentQuestion + 1}. ${current.question}`;

    optionsElement.innerHTML = "";

    selectedAnswer = null;

    current.options.forEach(option => {

        const button =
        document.createElement("button");

        button.textContent = option;

        button.addEventListener("click", () => {

            selectedAnswer = option;

            document
                .querySelectorAll("#options button")
                .forEach(btn => {
                    btn.style.background = "#eaeaea";
                });

            button.style.background = "lightgreen";
        });

        optionsElement.appendChild(button);

    });

}

function showResult() {

    questionElement.textContent =
    "Quiz Completed 🎉";

    optionsElement.innerHTML = "";

    scoreElement.textContent =
    `Your Score: ${score}/${questions.length}`;

    nextBtn.textContent = "Restart Quiz";
}

nextBtn.addEventListener("click", () => {

    if (currentQuestion === questions.length) {

        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;
        scoreElement.textContent = "";

        nextBtn.textContent = "Next";

        loadQuestion();
        return;
    }

    if (!selectedAnswer) {
        alert("Please select an answer");
        return;
    }

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();
        currentQuestion = questions.length;
    }

});

loadQuestion();