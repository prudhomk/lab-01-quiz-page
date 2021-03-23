// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../test/utilities.js';

const test = QUnit.test;

test('take in string and should return true if the string counts as a yes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes is true');
    expect.equal(isYes('YEAAH'), true, 'YEAAH IS TRUE');
    expect.equal(isYes('naah'), false, 'naah is false');
});
