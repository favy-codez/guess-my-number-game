'use strict';
document.querySelector('.number').textContent = 3;
document.querySelector('.message').textContent = 'correct number! 🎉';
document.querySelector('.guess').value = 33;
// document.querySelector('.btn') = guessBtn;
// document.querySelector('.label-score') = score;
// document.querySelector('highscore') = highscore;

// convert the value of the input to number
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);