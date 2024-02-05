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

//functions para sa interactive keyboard 

//functions para sa questions
function getRandomWord() {
    // Select a random word and question
    const { word, question } = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    currentWord = word;
    document.querySelector(".Questions b").innerText = question;
    resetGame();
}