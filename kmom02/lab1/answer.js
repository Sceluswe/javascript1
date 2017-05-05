/**
 * @preserve 75b1e0bbd7c7fc611241bd9fe5ad6f67
 *
 * 75b1e0bbd7c7fc611241bd9fe5ad6f67
 * javascript1
 * lab1
 * emmd12
 * 2016-11-18 14:29:34
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-11-18 15:29:35 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 1 - javascript1
 *
 * If you need to peek at examples or just want to know more, take a look at
 * the references at MDNs (Mozilla Developers Network) page:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference.
 *
 * Here you will find everything this lab will go through and much more.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Integers, floats and variables
 *
 * The foundation of variables, numbers, strings and basic arithmetic. In
 * questions 1.5 and 1.6 you are going to work with floats. One way to round a
 * float to a certain amount of decimals is:  Math.round(val*10000)/10000,
 * where 'val' is your float number.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a variable called 'numberOne' and give it the value 762. Create
 * another variable called 'numberTwo' and give it the value 923. Create a
 * third variable called 'result' and assign to it the sum of the first two
 * variables.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numberOne = 762;
var numberTwo = 923;
var result = numberOne + numberTwo;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Use your two variables, 'numberOne' and 'numberTwo'. Create one more,
 * called 'numberThree' and give it the value: 719. Use your variable 'result'
 * and assign to it the sum of all three variables.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numberThree = 719;
result = numberOne + numberTwo + numberThree;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Use your variables 'numberOne' and 'numberTwo' and answer with the product
 * of the numbers in your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = numberOne * numberTwo;




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Use your variables 'numberOne', 'numberTwo' and 'numberThree'. Subtract
 * 'numberThree' from the product of the other two variables.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


result = numberOne * numberTwo - numberThree;



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Create two variables, 'floatOne' and 'floatTwo'. Give them the values:
 * 610.57 and 128.72. Use your 'result'-variable and assign to it the sum of
 * the float numbers.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var floatOne = 610.57;
var floatTwo = 128.72;

result = floatOne + floatTwo;


ANSWER = Number(Math.round(result+'e2')+'e-2');

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, true);

/**
 * Exercise 1.6
 *
 * Answer with the result of 559 modulus (%) 82.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = 559 % 82;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Built-in Number-methods and functions
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Number
 *
 */



/**
 * Exercise 2.1
 *
 * Create a variable 'someIntText' and give it a value of '431.923 reindeer'.
 * Use the function 'parseInt' to find out the integer representation of the
 * text.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var someIntText = '431.923reindeer';




ANSWER = parseInt(someIntText);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2
 *
 * Use your variable 'someIntText'. Use the function 'parseFloat' to find out
 * the float representation of the text.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


result = parseFloat(someIntText);



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Built-in Math-methods and functions
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Math
 *
 */



/**
 * Exercise 3.1
 *
 * Use the method 'max', in Math, to find out the highest number in the serie:
 * 587,665,460,233.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.max(587, 665, 460, 233);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, false);

/**
 * Exercise 3.2
 *
 * Use the method 'min', in Math, to find out the lowest number in the serie:
 * 587,665,460,233.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.min(587, 665, 460, 233);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Use the method 'round', in Math, to round the float number: 744.18 to the
 * closest integer.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.round(744.18);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, false);

/**
 * Exercise 3.4
 *
 * Find out the quotient of 414 / 50 and use the method 'floor', in Math, to
 * get only the integer value.
 *
 * Use your 'result'-variable in your answer.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.floor(414 / 50);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, false);

/**
 * Exercise 3.5
 *
 * Use the Math property 'E' to get the float value of 'E'. Find the product
 * of 'E' and 76. Use the built-in method 'ceil()' to get an integer value of
 * your result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.ceil(Math.E * 76);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.5", ANSWER, false);

/**
 * Exercise 3.6
 *
 * Use the Math property 'PI' to get the float value of 'Pi'. Round the result
 * to 4 decimals.
 *
 * Answer with your 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Number(Math.round(Math.PI+'e4')+'e-4');




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.6", ANSWER, false);

/**
 * Exercise 3.7
 *
 * Use the method 'pow', in Math, to find the power of (base) 50 and
 * (exponent) 5.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = Math.pow(50, 5);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.7", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 4 . Strings and variables
 *
 * Practice strings and variables. If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String
 *
 */



/**
 * Exercise 4.1
 *
 * Create a variable, named 'firstWord', that holds the word 'JavaScript'.
 * Create a second variable, named 'secondWord', that holds the word 'rocks!'.
 * Create a third variable, named 'bothWords', and put together 'firstWord'
 * and 'secondWord' with a space between.
 *
 * Answer with the variable 'bothWords'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var firstWord = 'JavaScript';
var secondWord = 'rocks!';
var bothWords = firstWord + " " + secondWord;





ANSWER = bothWords;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.1", ANSWER, false);

/**
 * Exercise 4.2
 *
 * Create a variable called 'wordOne' and assign to it: 'elephant'. Add the
 * number 796 to the word and answer with the result in your
 * 'result'-variable.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var wordOne = 'elephant';

wordOne += 796;




ANSWER = wordOne;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("4.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 5 . Built-in String-methods, functions and properties
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/String
 *
 */



/**
 * Exercise 5.1
 *
 * Use 'charAt' on a string to return the character at a given index. Use it
 * on the word 'rabbit' and answer with the character at index 1.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 'rabbit'.charAt(1);




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.1", ANSWER, false);

/**
 * Exercise 5.2
 *
 * Use 'toUpperCase' to transform the string: 'If peeing your pants is cool,
 * consider me Miles Davis.' to uppercase.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = "If peeing your pants is cool, consider me Miles Davis.".toUpperCase();




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.2", ANSWER, false);

/**
 * Exercise 5.3
 *
 * Use 'length' to find out the length of the string: 'rabbit'.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = 'rabbit'.length;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.3", ANSWER, false);

/**
 * Exercise 5.4
 *
 * Use 'substr' to extract the last three characters of the word: 'rabbit'.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = 'rabbit'.substr(-3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("5.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 6 . Built-in Date-methods and functions
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Date
 *
 */



/**
 * Exercise 6.1
 *
 * Create a Date object called 'myDate' and initiate it with: 'Aug 21, 1987'.
 * Use the built-in function Date.getFullYear to get the year from your Date
 * object.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myDate = new Date('Aug 21, 1987');




ANSWER = myDate.getFullYear();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("6.1", ANSWER, false);

/**
 * Exercise 6.2
 *
 * Create a new Date object that is equal to 'myDate' plus 30 days.
 *
 * Use Date.getDate and answer with the day of the month.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var otherDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 30);


ANSWER = otherDate.getDate();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("6.2", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 7 . If, else if and else
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/if...else
 *
 */



/**
 * Exercise 7.1
 *
 * Create five variables: 'card1'=1, 'card2'=4, 'card3'=8, 'card4'=7,
 * 'card5'=8.
 *
 * Add them up and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var card1 = 1, card2 = 4, card3 = 8, card4 = 7, card5= 8;

var allCards = card1 + card2 + card3 + card4 + card5;




ANSWER = allCards;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.1", ANSWER, false);

/**
 * Exercise 7.2
 *
 * Use an if statement to see if the five cards (card1-card5) have a combined
 * value that is higher than 21.
 *
 * If the value is higher, answer with the string 'busted'. Else answer with
 * the string 'safe'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

result = 'safe';

if (allCards > 21) {
    result = 'busted';
}




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.2", ANSWER, false);

/**
 * Exercise 7.3
 *
 * Use if else statements to see if the combined value of the first three
 * cards (card1-card3) is lower, higher or exactly 21.
 *
 * Answer with lower = 'safe', higher = 'busted', 21 = 'black jack'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var firstThreeCards = card1 + card2 + card3;
result = "";

if (firstThreeCards < 21) {
    result = "safe";
}
else if (firstThreeCards > 21) {
    result = "busted";
}
else if (firstThreeCards === 21) {
    result = "black jack";
}



ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.3", ANSWER, false);

/**
 * Exercise 7.4
 *
 * Create three variables: 'dealer1' = 4, 'dealer2' = 3 and 'dealer3' = 7.
 * Combine the if, else and the AND (&&) statements to see what the dealer
 * should do.
 *
 * If the combined value of the dealercards is lower than 17, answer with
 * 'safe', if the value is higher than or equal to 17 and lower than 21 answer
 * 'stop'. If the value is 21 answer 'black jack'. If the value is higher than
 * 21 answer 'busted'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var dealer1 = 4, dealer2 = 3, dealer3 = 7;

var combinedValue = dealer1 + dealer2 + dealer3;

if (combinedValue < 17) {
    result = "safe";
}
else if (combinedValue > 17 && combinedValue < 21) {
    result = "stop";
}
else if (combinedValue === 21) {
    result = "black jack";
}
else if (combinedValue > 21) {
    result = "busted";
}

ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("7.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 8 . Switch, case
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/switch
 *
 */



/**
 * Exercise 8.1
 *
 * Use a switch-case statement to figure out the color of a fruit. You have
 * the following fruits - banana=yellow, apple=green, kiwi=green,
 * plum=purple). Create a variable 'myFruit' which holds the current value of
 * your fruit. If 'myFruit' is banana, the result should be 'The banana is
 * yellow.'.
 *
 * Answer with the result where 'myFruit = plum'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myFruit = 'plum';

switch (myFruit) {
    case 'banana': result = 'The banana is yellow.';
        break;
    case 'apple': result = 'The apple is green.';
        break;
    case 'kiwi': result = 'The kiwi is green.';
        break;
    case 'plum': result = 'The plum is purple.';
        break;
}


ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("8.1", ANSWER, false);

/**
 * Exercise 8.2
 *
 * Extend your switch-case statement with a default value. The result should
 * be 'That is an unknown fruit.' when the variable 'myFruit' has an unknown
 * value.
 *
 * Answer with the result where 'myFruit = pear'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

myFruit = 'pear';

switch (myFruit) {
    case 'banana': result = 'The banana is yellow.';
        break;
    case 'apple': result = 'The apple is green.';
        break;
    case 'kiwi': result = 'The kiwi is green.';
        break;
    case 'plum': result = 'The plum is purple.';
        break;
    default: result = "That is an unknown fruit.";
}




ANSWER = result;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("8.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 9 . For loops
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/for
 *
 */


/**
 * Exercise 9.1
 *
 * Use a for-loop to increment 735 with the value 4, 12 times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var myNr = 735;
var i = 0;
for (i = 0; i < 12; i++) {
    myNr += 4;
}




ANSWER = myNr;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.1", ANSWER, false);

/**
 * Exercise 9.2
 *
 * Use a for-loop to decrement 706 with the value 6, 12 times.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


myNr = 706;

for (i = 0; i < 12; i++) {
    myNr -= 6;
}



ANSWER = myNr;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.2", ANSWER, false);

/**
 * Exercise 9.3
 *
 * Use a for-loop to add all the values in the range - 27 to 48 - to a string
 * with each number separated by a comma ','. The result should not end with a
 * comma. You should neither have a space after the comma.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var mySum = "";

for (i = 27; i <= 48; i++) {
    mySum += i + ",";
}



ANSWER = mySum.slice(0, -1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("9.3", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 10 . While loops
 *
 * If you need a hint, take a look at:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statement
 * s/while
 *
 */



/**
 * Exercise 10.1
 *
 * Use a while-loop to increment 12 with the value 4 until it has reached or
 * passed 735.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

i = 12;
var steps = 0;
while (i <= 735) {
    i += 4;
    steps++;
}




ANSWER = steps;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("10.1", ANSWER, false);

/**
 * Exercise 10.2
 *
 * Use a while-loop to subtract 6 from 706 until the value has reached or
 * passed 0.
 *
 * Answer with the amount of steps needed.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

i = 706;
steps = 0;

while (i >= 0) {
    i -= 6;
    steps++;
}




ANSWER = steps;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("10.2", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
