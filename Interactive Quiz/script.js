const questions = [
    {
        question: "Who is the main character in KGF?",
        options: ["Darshan", "Yash", "Sudeep", "Ganesh"],
        answer: 1
    },
    {
        question: "What is the best college in mysore?",
        options: ["SJCE", "NIE", "Vidya Vardaka", "Sapient"],
        answer: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

function selectOption(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.answer) {
        score++;
    }
    nextButton.disabled = false;
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        nextButton.disabled = true;
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `${score} / ${questions.length}`;
}

nextButton.addEventListener('click', showNextQuestion);
submitButton.addEventListener('click', showResult);

showQuestion(currentQuestionIndex);
nextButton.disabled = true;