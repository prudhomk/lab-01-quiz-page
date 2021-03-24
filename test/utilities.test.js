// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { answerYes } from '../test/utilities.js';

const test = QUnit.test;

test('take in string and should return true if the string counts as a yes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = answerYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes is true');
    expect.equal(answerYes('YEAAH'), true, 'YEAAH IS TRUE');
    expect.equal(answerYes('boo'), false, 'boo is false');
    expect.equal(answerYes('naah'), false, 'naah is false');
});
