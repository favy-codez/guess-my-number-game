'use strict';
document.querySelector('.message').textContent = 'correct number! 🎉';
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
if(! guess) {
    document.querySelector('.message').textContent = '😡 No number!';
}else if (guess === secretNum){  
    document.querySelector('.message').textContent = '🎉 correct number!';
}else if (guess > secretNum){  
    if(score > 1){
        document.querySelector('.message').textContent = '📈 Too high';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = '😔 You lost !!!';
    }
    
}else if (guess < secretNum){  
    document.querySelector('.message').textContent = '📉 Too low';
    score--;
    document.querySelector('.score').textContent = score;
}

})
