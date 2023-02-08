'use strict';

document.querySelector('.message').textContent = 'correct number! 🎉';
document.querySelector('.guess').value = 33;
// document.querySelector('.label-score') = score;
// document.querySelector('highscore') = highscore;


//  add event lister to the check button
document.querySelector('.check').addEventListener('click', function() {
    // convert the value of the input to number
    const guess = Number(document.querySelector('.guess').value);
})

// target secret number
const secretNum = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum ;


// create an if else statement
if(!guess) {
    document.querySelector('.message').textContent = 'No number! 😡';
}else if (guess === secretNum){  
    document.querySelector('.message').textContent = 'correct number! 🎉';
}else if (guess > secretNum){  
    document.querySelector('.message').textContent = 'Too high 📈';
}else if (guess === secretNum){  
    document.querySelector('.message').textContent = 'Too high 📉';
}