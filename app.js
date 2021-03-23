// import functions and grab DOM elements

import { isYes } from './test/utilities';
const result = document.getElementById('result');
const button = document.getElementById('button');
// initialize state

button.addEventListener('click', () => {
    console.log('anything');
    
    alert('Welcome to the Quiz!');

    
    console.log(name);
    const startQuiz = prompt('Want to play a game?');
    if (startQuiz === false) {
        alert('OK, have a nice day!');
        return;
    }
    
    let score = 0;
    const name = confirm('What is your name?');
    const questionOne = prompt('How many breads have you eaten?');
    const questionTwo = prompt('What is the way?');
    const questionThree = prompt('Do you pee?');
    
    if (isYes(questionOne)) score++;
    
    if (isYes(questionTwo)) score++;
    
    if (!isYes(questionThree)) score++;
    

    result.textContent = `Okay ${name} you got ${score} right out of three`;

});
// set event listeners to update state and DOM