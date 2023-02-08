'use strict';

document.querySelector('highscore') = 'highScore';
    // target secret number
    let secretNum = Math.floor(Math.random() * 20) + 1;
    // initialize score
    let score = 20;
    let highScore = 0;

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

    // display  secret number only when user gets correct answer
    document.querySelector('.number').textContent = secretNum ;
    
    // change color of the body when user wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // highscore
    if(score > highScore){
        highScore = score;
    };

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
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNum = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    // we are setting the value of this input tag to an empty string because, the value of an input tsg is always a string
    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
