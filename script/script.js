function createButton(letter) {
    const button = document.createElement("button");
    button.innerText = letter;
    button.addEventListener("click", () => initGame(button, letter));
    return button;
}
 
function resetGame() {
    // Reset game
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `hangman/pic-${wrongGuessCount}.png`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}
 
function getRandomWord() {
    // Select a random word and question
    const { word, question } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    currentWord = word;
    document.querySelector(".Questionst b").innerText = question;
    resetGame();
}
 
function gameOver(isVictory) {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `gege/${isVictory ? 'victory' : 'lost'}.pn`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congratulations!' : 'Game Over'}.pn`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}
 
function initGame(button, clickedLetter) {
    // check code if clickedletter exists on the currentWord
    const lowerClickedLetter = clickedLetter.toLowerCase();
    const lowerCurrentWord = currentWord.toLowerCase();
 
    if (lowerCurrentWord.includes(lowerClickedLetter)) {
        // show correct word
        [...lowerCurrentWord].forEach((letter, index) => {
            if (letter === lowerClickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // if user is wrong, update guess and img
        wrongGuessCount++;
        hangmanImage.src = `hangman/pic-${wrongGuessCount}.png`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
 
    // gameOver Functions
    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetters.length === currentWord.length) return gameOver(true);
}
 
function setupHangarooGame() {
    const hangmanImage = document.querySelector(".hangaroo-box img");
    const wordDisplay = document.querySelector(".word-display");
    const guessesText = document.querySelector(".guesses-text b");
    const keyboardDiv = document.querySelector(".keyboard");
    const gameModal = document.querySelector(".game-modal");
    const playAgainBtn = document.querySelector(".play-again");
    const difficultyButtons = document.querySelectorAll(".difficulty-button");
 
    function createButton(letter) {
        const button = document.createElement("button");
        button.innerText = letter;
        button.addEventListener("click", () => initGame(button, letter));
        return button;
    }
 
    let currentWord, correctLetters = [], wrongGuessCount;
    let currentDifficulty = "easy"; // Default difficulty
    const maxGuesses = 3;
 
    const difficultyQuestions = {
        easy: easyQuestions,
        medium: mediumQuestions,
        hard: hardQuestions
        // Add more difficulty levels if needed
    };
 
    function resetGame() {
        // Reset game
        correctLetters = [];
        wrongGuessCount = 0;
        hangmanImage.src = `hangman/pic-${wrongGuessCount}.png`;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
        wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
        gameModal.classList.remove("show");
    }
 
    function getRandomWord() {
        // Select a random word and question based on difficulty
        const { word, question } = difficultyQuestions[currentDifficulty][Math.floor(Math.random() * difficultyQuestions[currentDifficulty].length)];
        console.log(word);
        currentWord = word;
        document.querySelector(".question-text b").innerText = question;
        resetGame();
    }
 
    function gameOver(isVictory) {
        setTimeout(() => {
            const modalText = isVictory ? `You found the word:` : `The correct word was:`;
            gameModal.querySelector("img").src = `gege/${isVictory ? 'victory' : 'lost'}.png`;
            gameModal.querySelector("h4").innerText = `${isVictory ? 'Congratulations!' : 'Game Over.'}.`;
            gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
            gameModal.classList.add("show");
        }, 300);
    }
 
    function initGame(button, clickedLetter) {
        // check code if clickedletter exists on the currentWord
        const lowerClickedLetter = clickedLetter.toLowerCase();
        const lowerCurrentWord = currentWord.toLowerCase();
 
        if (lowerCurrentWord.includes(lowerClickedLetter)) {
            // show correct word
            [...lowerCurrentWord].forEach((letter, index) => {
                if (letter === lowerClickedLetter) {
                    correctLetters.push(letter);
                    wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
        } else {
            // if user is wrong, update guess and img
            wrongGuessCount++;
            hangmanImage.src = `hangman/pic-${wrongGuessCount}.png`;
        }
        button.disabled = true;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
 
        // gameOver Functions
        if (wrongGuessCount === maxGuesses) return gameOver(false);
        if (correctLetters.length === currentWord.length) return gameOver(true);
    }
 
    // Dynamic keyboard
    for (let i = 97; i <= 122; i++) {
        const button = createButton(String.fromCharCode(i));
        keyboardDiv.appendChild(button);
    }
    difficultyButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentDifficulty = button.dataset.difficulty;
            getRandomWord();
        });
    });
 
    getRandomWord();
    playAgainBtn.addEventListener("click", getRandomWord);
}
 
// Call the function to set up the Hangaroo game
setupHangarooGame();