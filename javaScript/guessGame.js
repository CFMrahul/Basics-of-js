const userInput = document.querySelector("#guessField");
const submitGuess = document.querySelector("#submitGuess");
const resultBox = document.querySelector(".resultBox");
const prevGuess = document.querySelector("#guesses");
const guessRemain = document.querySelector("#remaining");
const message = document.querySelector("#message");
const p = document.createElement("p");

let randomNum = parseInt(Math.random() * 100 + 1);
let prevBox = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitGuess.addEventListener("click", function (e) {
    const guess = parseInt(userInput.value);
    console.log(guess);
    validationGuess(guess);
  });
}

function validationGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter validate number.`);
  } else if (guess < 0) {
    alert(`please enter more then 1.`);
  } else if (guess > 100) {
    alert(`please enter less then 100.`);
  } else {
    prevBox.push(guess);
    if (numGuess === 10) {
      cleanUpGuess(guess);
      displayMessage(`Game Over. Random Number is ${randomNum}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("You Win!");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("Too Low.");
  } else {
    displayMessage("Too High.");
  }
}
function cleanUpGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess}  `;
  numGuess++;
  guessRemain.innerHTML = `${11 - numGuess}`;
}
function displayMessage(msg) {
  message.innerHTML = `<h2>${msg}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button class="newGame">New Game</button>`;
  resultBox.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector(".newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);

    prevBox = [];
    numGuess = 1;

    prevGuess.innerHTML = "";
    guessRemain.innerHTML = `${11 - numGuess}`;

    message.innerHTML = "";

    userInput.removeAttribute("disabled");
    resultBox.removeChild(p);

    playGame = true;
  });
}
