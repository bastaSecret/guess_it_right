//para sa hint button 
let hint = document.getElementById("userHint");

function chooseHint() {
    userHint.classList.add("openHint");
}

function closeHint() {
    userHint.classList.remove("openHint");
}

//sa pag pili kung vowel ba or consonant
//functions para sa vowel


//functions para sa consonant



//functions para sa questions

// Initialization

let currentWordIndex = 0;
let currentWord;
let wrongGuess = 0;
const maxGuesses = 3;
const wordDisplay = document.querySelector('.word-display');
const guessText = document.querySelector('.guess-text b')
const monsterImage = document.querySelector('.main-left img')


//functions para sa questions
const getRandomWord = () => {
    const { question, word } = progressiveQuestions[currentWordIndex];
    console.log(word);
    currentWord = word;
    document.querySelector(".question-text b").innerHTML = question;
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
    

    // Increment the index and reset if it reaches the end of the array
    currentWordIndex = (currentWordIndex + 1) % progressiveQuestions.length;
};

// function when a button is clicked and gets value
function handleButtonClick(event) {
    const buttonValue = event.target.innerText;
    initGame(buttonValue);
}
 
const keyboardButtons = document.querySelectorAll('.keys');
keyboardButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Function if clicked letter exists
function handleButtonClick(button) {
    const buttonValue = button.innerText;
    initGame(buttonValue, button);
}

const initGame = (clickedLetter, button) => {
    // Ignore capitalization
    const lowercaseWord = currentWord.toLowerCase();
    const lowercaseClickedLetter = clickedLetter.toLowerCase();

    // If clicked letter exists
    if (lowercaseWord.includes(lowercaseClickedLetter)) {
        [...lowercaseWord].forEach((letter, index) => {
            if (letter === lowercaseClickedLetter) {
                // Display on <li>
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // If wrong, change picture every time an incorrect letter is guessed
        wrongGuess++;
        monsterImage.src = `monster_game/pic-${wrongGuess}.png`;
    }
    // Display total of guesses left, and disable the button if clicked
    button.disabled = true;
    guessText.innerText = `${wrongGuess} / ${maxGuesses}`;
};


// Call the function to start from the first question
getRandomWord();
