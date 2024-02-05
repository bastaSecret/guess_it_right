// open hint box
let hint = document.getElementById("userHint");
 
function chooseHint() {
    userHint.classList.add("openHint");
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
 
let currentWord, correctLetter, wrongGuessCount, points;
const maxGuesses = 3;
const pointPerCorrectAnswer = 10;
let score = 0;
let currentIndex = 0;
 
 
 
 
const resetGame = () => {
    correctLetter = [];
    wrongGuessCount = 0;
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
 
    if(lowercurrentWord.includes(lowerclickedLetter)) {
        [...lowercurrentWord].forEach((letter, index) => {
            if(letter === lowerclickedLetter) {
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
    button.disabled = true;
    guessText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
 
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetter.length === lowercurrentWord.length) return gameOver(true);
}
 
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}
 
getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
