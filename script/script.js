///// FIXED NOT MOVING QUESTIONS:

// open hint box
let hint = document.getElementById("userHint");

function chooseHint() {
    const pointsElement = document.getElementById("points");

    if (score >= 25) {
        // Deduct 25 points for using the hint
        score -= 25;
        updatePoints(); // Update the points display
        // Show the hint options
        userHint.classList.add("openHint");
    } else {
        alert("You need at least 25 points to use the hint feature.");
    }
}

function closeHint() {
    userHint.classList.remove("openHint");
}



const keyboardDiv = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const guessText = document.querySelector(".guess-text b");
const monsterImage = document.querySelector(".main-left img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetter, points;
const maxGuesses = 3;
const pointPerCorrectAnswer = 30;
let score = 0;
let currentIndex = 0;
let wrongGuessCount = 0;



const resetGame = () => {
    correctLetter = [];
    monsterImage.src = `monster_game/pic-${wrongGuessCount}.png`;
    guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}
const getRandomWord = () => {
    const { question, word } = progressiveQuestions[currentIndex]; // Always use the first element
    currentWord = word;
    console.log(word);
    document.querySelector(".question-text b").innerText = question;
    resetGame();
}
const updatePoints = () => {
    const pointsElement = document.getElementById("points");
    if (pointsElement) {
        if (correctLetter.length === new Set([...currentWord.toLowerCase()]).size) {
            score += pointPerCorrectAnswer;
            pointsElement.innerText = `Points: ${score}`;
            if (currentIndex < progressiveQuestions.length - 1) {
                currentIndex++;
            }
        }  else if (wrongGuessCount === maxGuesses) {
            score = 0; // Reset the score to 0 on failure
            pointsElement.innerText = `Points: ${score}`;
            currentIndex = 0; // Reset to index 0 on failure
        }
    } else {
        console.error("Error: Element with ID 'points' not found.");
    }
}

const gameOver = (isVictory) => {
    setTimeout(() => {
        if (!isVictory || wrongGuessCount === maxGuesses) {
            currentIndex = 0; // Reset to index 0 on failure
            score = 0;
            wrongGuessCount = 0;
            updatePoints();
        }
        const modalText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModal.querySelector("img").src = `sample/${isVictory ? 'sample' : 'sample'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}


const initGame = (button, clickedLetter) => {
    const lowerclickedLetter = clickedLetter.toLowerCase();
    const lowercurrentWord = currentWord.toLowerCase();

    button.disabled = true; // Disable the button for any clicked letter

    if (lowercurrentWord.includes(lowerclickedLetter)) {
        [...lowercurrentWord].forEach((letter, index) => {
            if (letter === lowerclickedLetter) {
                correctLetter.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
        updatePoints();
    } else {
        wrongGuessCount++;
        monsterImage.src = `monster_game/pic-${wrongGuessCount}.png`;
    }
    guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    if (correctLetter.length === lowercurrentWord.length) return gameOver(true);
}


function revealLetter(letter) {
    let wordLetters = currentWord.toLowerCase().split('');
    wordLetters.forEach((char, index) => {
        if (char === letter) {
            let letterElement = wordDisplay.querySelectorAll('.letter')[index];
            letterElement.innerText = letter.toUpperCase();
            letterElement.classList.add('guessed');
            correctLetter.push(letter); // Add the revealed letter to correctLetter array
            // Disable the corresponding keyboard button
            let buttonIndex = letter.charCodeAt(0) - 97; // Convert letter to button index
            let keyboardButton = keyboardDiv.querySelectorAll('button')[buttonIndex];
            keyboardButton.disabled = true;
        }
    });

    closeHint(); // Close the hint box after revealing the letter

    // Check for the next question
    if (correctLetter.length === wordLetters.length) {
        // All letters are guessed, move to the next question
        updatePoints();
        getRandomWord();
    }
}


for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

function getRemainingLetters() {
    let wordLetters = currentWord.toLowerCase().split('');
    let revealedLetters = wordDisplay.querySelectorAll('.guessed');
    let revealedLettersArray = Array.from(revealedLetters).map(letter => letter.innerText.toLowerCase());
    let remainingLetters = wordLetters.filter(letter => !revealedLettersArray.includes(letter));
    return remainingLetters;
}

function revealVowel() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let remainingLetters = getRemainingLetters();

    // Filter out vowels from remainingLetters
    let remainingVowels = remainingLetters.filter(letter => vowels.includes(letter));

    const pointsElement = document.getElementById("points");

    if (remainingVowels.length > 0) {
        let randomIndex = Math.floor(Math.random() * remainingVowels.length);
        let letterToReveal = remainingVowels[randomIndex];
        revealLetter(letterToReveal);
        closeHint(); // Close the hint box after revealing the letter
        updatePoints(); // Call updatePoints after revealing a letter
    }
}

function revealConsonant() {
    let consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
    let remainingLetters = getRemainingLetters();

    // Filter out consonants from remainingLetters
    let remainingConsonants = remainingLetters.filter(letter => consonants.includes(letter));

    const pointsElement = document.getElementById("points");

    if (remainingConsonants.length > 0) {
        let randomIndex = Math.floor(Math.random() * remainingConsonants.length);
        let letterToReveal = remainingConsonants[randomIndex];
        revealLetter(letterToReveal);
        closeHint(); // Close the hint box after revealing the letter
        updatePoints(); // Call updatePoints after revealing a letter
    }
}
