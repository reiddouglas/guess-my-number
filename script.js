'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const setMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  score--;
  document.querySelector(`.score`).textContent = score;

  //No input
  if (!guess) {
    setMessage(`🔴 No Number!`);
    score++;
    document.querySelector(`.score`).textContent = score;
    //correct guess
  } else if (guess === secretNumber) {
    score++;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = secretNumber;
    setMessage(`🟢 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    //guess too high
  } else if (score >= 1) {
    setMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
  } else {
    setMessage(`You Lose!`);
    document.querySelector(`.score`).textContent = 0;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`.score`).textContent = score;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
});
