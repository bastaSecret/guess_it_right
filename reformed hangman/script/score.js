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
