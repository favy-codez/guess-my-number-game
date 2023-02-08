'use strict';
// document.querySelector('.guess').value = 33;

// document.querySelector('highscore') = highscore;

// target secret number
const secretNum = Math.floor(Math.random() * 20) + 1;
// initialize score
let score = 20;

document.querySelector('.number').textContent = secretNum ;

//  add event lister to the check button
document.querySelector('.check').addEventListener('click', function() {
    // convert the value of the input to number
    const guess = Number(document.querySelector('.guess').value);
    console.log('guess');
    

// create an if else statement
// when there is no input
if(! guess) {
    document.querySelector('.message').textContent = '😡 No number!';
    // when user wins
}else if (guess === secretNum){
    document.querySelector('.message').textContent = '🎉 correct number!';
    // when user's guess is higher that our secret number
}else if (guess > secretNum){  
    if(score > 1){
        document.querySelector('.message').textContent = '📈 Too high';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = '😔 You lost !!!';
        document.querySelector('.score').textContent = 0;
    }
     // when user's guess is lower that our secret number
}else if (guess < secretNum){  
    if(score > 1){
        document.querySelector('.message').textContent = '📉 Too low';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = '😔 You lost !!!';
        document.querySelector('.score').textContent = 0;
    }
}

})
