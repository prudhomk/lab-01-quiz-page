// import functions and grab DOM elements

import { answerYes } from './test/utilities.js';
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
    
    if (!answerYes(questionOne)) score++;
    
    if (answerYes(questionTwo)) score++;
    
    if (answerYes(questionThree)) score++;
    
    alert('Look at the bottom of the page for your results!');
    result.textContent = `Alright ${name}!  You got ${score} right out of three!`;

    //if (score.value === 0);
    //result.textContent = `Did you even read the page ${name}, you know nothing!`;
    //result.classList.add('.failure');

});
