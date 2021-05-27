//Variables
let secretNumber = parseInt(Math.random() * 30) + 1;
let score = 10;
let playing = true;
//Global DOM manipulators
const Message = document.querySelector("#message");
let reset = document.querySelector(".reset");
const GuessNumber = document.querySelector("#guess-number");
const CurrentScore = document.querySelector(".score");
const checkBtn = document.querySelector(".check");
//Losing function
const Lost = function () {
  if (score <= 0) {
    message.textContent = "You lost";
    document.querySelector(".score").textContent = 0;
    playing = false;
  }
};

//Event listener to compare user input with secretNumber
document.querySelector(".check-btn").addEventListener("click", function () {
  //Initialization of game
  const Guess = Number(checkBtn.value);
  if (playing) {
    if (secretNumber === Guess) {
      GuessNumber.textContent = `The secret number was: ${secretNumber}`;
      message.textContent = "You guessed it";
      //console.log("You guessed it");
    } else if (secretNumber < Guess) {
      message.textContent = "You are higher";
      score--;
      CurrentScore.textContent = score;
      Lost();
      //console.log("You are higher");
    } else {
      message.textContent = "You are lower";
      score--;
      CurrentScore.textContent = score;
      Lost();
      //console.log("you are lower");
    }
  }
});

//Functionality of again button to restart the game
reset.addEventListener("click", function () {
  playing = true;
  secretNumber = parseInt(Math.random() * 30) + 1;
  GuessNumber.textContent = "The new number is yet to be discovered";
  Message.textContent = "Start guessing again...";
  score = 10;
  CurrentScore.textContent = score;
  checkBtn.value = "";
  console.log(secretNumber);
});

//Cheating purposes :)
console.log(secretNumber);
