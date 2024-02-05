const progressiveQuestions = [
    { question: "What is the capital of France?", word: "Paris" }, //start of easy questions
    { question: "Who is the author of 'Harry Potter' series?", word: "Rowling" },
    { question: "What is the largest mammal on Earth?", word: "Whale" },
    { question: "Which country is known as the Land of the Rising Sun?", word: "Japan" },
    { question: "What is the currency of the United States?", word: "Dollar" },
    { question: "Who painted the Mona Lisa?", word: "DaVinci" },
    { question: "Which planet is known as the Red Planet?", word: "Mars" },
    { question: "What is the national animal of China?", word: "Panda" },
    { question: "What is the largest ocean on Earth?", word: "Pacific" },
    { question: "Who wrote 'To Kill a Mockingbird'?", word: "Lee" }, //end of easy questions

    { question: "HTML element for line break?", word: "br" }, // start of moderate questions
    { question: "CSS property for text color?", word: "color" },
    { question: "JavaScript data type for whole numbers?", word: "number" },
    { question: "HTML tag for creating a hyperlink?", word: "a" },
    { question: "specifies how an element should float", word: "float" },
    { question: "JavaScript framework for building user interfaces?", word: "React" },
    { question: "HTML element for unordered list?", word: "ul" },
    { question: "CSS box model property for outer spacing?", word: "margin" },
    { question: "syntax for superscript text", word: "sup" },
    { question: "HTML attribute for specifying image source?", word: "src" }, //end of moderate questions

    { question: "HTML element for line break?", word: "br" }, //start of difficult questions
    { question: "CSS property for text color?", word: "color" },
    { question: "JavaScript data type for whole numbers?", word: "number" },
    { question: "HTML tag for creating a hyperlink?", word: "a" },
    { question: "specifies how an element should float", word: "float" },
    { question: "JavaScript framework for building user interfaces?", word: "React" },
    { question: "HTML element for unordered list?", word: "ul" },
    { question: "CSS box model property for outer spacing?", word: "margin" },
    { question: "syntax for superscript text", word: "sup" },
    { question: "HTML attribute for specifying image source?", word: "src" }, //end of difficult questions
];

let points = 0; // initialize points
const correctAnswer = " "; // define the correct answer

function checkGuess() {
    const userGuess = document.getElementById('details').value.toUpperCase(); // function to check the user's guess

    if (userGuess === correctAnswer) {
        document.getElementById('points').innerText = "Correct!"; // display correct message
        points += 10;
        document.getElementById('answer').style.visibility = "hidden";
        
        // Add a delay before the next question or action
        setTimeout(function() {
            // Call the function to display the next question or perform the next action
            getNextQuestion();
        }, 2000); // Delay in milliseconds (2000 ms = 2 seconds)
    } else {
        document.getElementById('points').innerText = "Incorrect"; // display incorrect message
    } 
}

function userHint() {
    if (points >= 25) {
        points -= 25;
        console.log("You used a hint. 25 points will be deducted from your current points: " + points);
        // Call the function to provide the hint
        provideHint();
    } else {
        console.log("You don't have enough points to use the hint");
    }
}

document.getElementById('userHint').addEventListener('click', userHint);

function provideHint() {
    // Implement the logic to provide the hint (vowel or consonant)
    // Deduct the points for using the hint
}

// Define a global variable to keep track of the current question index
let currentQuestionIndex = 0;

function getNextQuestion() {
    // Check if there are more questions available
    if (currentQuestionIndex < progressiveQuestions.length) {
        // Get the next question object from the progressiveQuestions array
        const nextQuestion = progressiveQuestions[currentQuestionIndex];

        // Update the question text in the UI
        const questionTextElement = document.querySelector('.question-text b');
        questionTextElement.textContent = nextQuestion.question;

        // Clear any previous guesses and update the guess count
        const guessTextElement = document.querySelector('.guess-text b');
        guessTextElement.textContent = '0 / 3'; // Assuming you want to reset the guess count

        // Increment the current question index for the next call
        currentQuestionIndex++;
    } 
}
