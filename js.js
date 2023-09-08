const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Madrid", "Paris", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Earth", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "The sum of two numbers is 15 and the sum of their squares is 113. Find the numbers?",
        choices: ["5,6", "6,7", "8,9", "7,8"],
        correctAnswer: "7,8"
    },
    {
        question: "GB stands for?",
        choices: ["Gilobit", "Gigabyte", "Gilobyte", "Gigabit"],
        correctAnswer: "Gigabyte"
    },
    {
        question: "RAM consists of binary numbers 0s and?",
        choices: ["1s", "2s", "3s", "4s"],
        correctAnswer: "1s"
    },
    {
        question: "Which kind of storage device can be carried around?",
        choices: ["Hard disk drive", "System cabinet", "Hard disk", "Floppy disk"],
        correctAnswer: "Floppy disk"
    },
    {
        question: "Pride is related to Humility in the same way as Desire is related to?",
        choices: ["Indifference", "Supress", "Wish", "Hate"],
        correctAnswer: "Hate"
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Giraffe", "Elephant", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = "";

    for (const choice of currentQuestion.choices) {
        const li = document.createElement("li");
        li.textContent = choice;
        li.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(li);
    }
}

function checkAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.textContent = "";
    choicesElement.innerHTML = "";
    nextButton.style.display = "none";
    resultElement.textContent = `Your Score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

// Start the game by loading the first question
loadQuestion();
