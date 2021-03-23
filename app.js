// import functions and grab DOM elements

import { isYes } from './test/utilities.js';
const result = document.getElementById('result');
const button = document.getElementById('button');
// initialize state

button.addEventListener('click', () => {
    console.log('anything');
    
    alert('Welcome to the Anpanman Quiz!');

    const startQuiz = confirm('Would you like try our quiz?');
    if (startQuiz === false) {
        alert('OK, have a nice day!');
        return;
    }
    
    let score = 0;
    const name = prompt('What is your name?');
    const questionOne = prompt('Is Hello Kitty more popular than Anpanman? (Yes or No)');
    const questionTwo = prompt('Does The Hamburger Kid have a horse named Pickles? (Yes or No)');
    const questionThree = prompt('If you are hungry, will Anpanman save you? (Yes or No)');
    
    if (!isYes(questionOne)) score++;
    
    if (isYes(questionTwo)) score++;
    
    if (isYes(questionThree)) score++;
    

    result.textContent = `Okay ${name} you got ${score} right out of three!`;

});
// set event listeners to update state and DOM