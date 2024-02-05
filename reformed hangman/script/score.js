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
    } else {
        document.getElementById('points').innerText = "Incorrect"; // display incorrect message
    } 
}

function userHint() {
    if (points >= 25) {
        points -= 25;
        console.log("You used a hint. 25 points will be deducted from your current points: " + points);
    } else {
        console.log("You don't have enough points to use the hints");
    }
}

document.getElementById('userHint').addEventListener('click', userHint);
