/**
 * @preserve 4bc261550b0d3509b72e76aa02793844
 *
 * 4bc261550b0d3509b72e76aa02793844
 * javascript1
 * lab2
 * emmd12
 * 2016-11-24 21:44:09
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-11-24 22:44:10 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 2 - javascript1
 *
 * Practice to write functions.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Basic functions
 *
 * Practice on basic functions.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a function called 'sumNumbers()'. The function should take two
 * arguments and return the sum of them. Test the function using the arguments
 * 85 and 143.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumNumbers(nr1, nr2) {
    return nr1 + nr2;
}




ANSWER = sumNumbers(85, 143);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Create a function called 'productNumbers()'. The function should take three
 * arguments and return the product of them. Try the function using the
 * numbers 85, 143 and 552.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function productNumbers(p1, p2, p3) {
    return p1 * p2 * p3;
}




ANSWER = productNumbers(85, 143, 552);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Create a function 'sumRangeNumbers()' that returns the sum of all numbers
 * between two chosen numbers. The function should take two arguments, one
 * representing the lowest boundary and one that represents the highest
 * boundary. For example, the arguments 10 and 20 should return the sum of
 * 10+11+12+13...+20.
 *
 * Test it using the values 41 and 64 and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function sumRangeNumbers(lowest, highest) {
    var sum = 0;
    for (var i = lowest; i < highest; i++) {
        sum += i;
    }

    return sum;
}




ANSWER = sumRangeNumbers(41, 65);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Create a function 'stringPhrase()' that returns a phrase. Your word is
 * 'blue'. Pass the word as an argument to the function and the returned
 * phrase should be: 'My favorite color is blue.'.
 *
 * Test your function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringPhrase(phrase) {
    return "My favorite color is " + phrase + ".";
}




ANSWER = stringPhrase("blue");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Create a function called 'fruitColor()' that takes one argument called
 * 'fruit' and returns the color of the fruit. The function should be aware of
 * the following fruits (banana, apple, kiwi, plum) with respective color
 * (yellow, green, green, red).
 *
 * Try it out using the fruit 'kiwi' and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function fruitColor(fruit) {
    var fruitColor = "";

    switch (fruit) {
        case "banana": fruitColor = "yellow";
            break;
        case "apple": fruitColor = "green";
            break;
        case "kiwi": fruitColor = "green";
            break;
        case "plum": fruitColor = "red";
            break;
        default: fruitColor = "We don't have that color";
    }

    return fruitColor;
}




ANSWER = fruitColor("kiwi");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6
 *
 * Create a function 'printRange()' that takes two arguments 'rangeStart' and
 * 'rangeStop' and returns a string with all numbers comma-separated in the
 * range. Try it using the arguments 23 and 49.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRange(rangeStart, rangeStop) {
    var text = "";

    for (var i = rangeStart; i < rangeStop+1; i++) {
        text += i + ",";
    }
    text = text.slice(0, -1);

    return text;
}




ANSWER = printRange(23, 49);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, true);

/**
 * Exercise 1.7
 *
 * Create a function 'printRangeReversed()' that takes two arguments
 * 'rangeStart' and 'rangeStop' and returns a string with all numbers
 * comma-separated in the range. Try it using the arguments 49 and 23.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printRangeReversed(rangeStart, rangeStop) {
    var text = "";

    for (var i = rangeStart; i > rangeStop-1; i--) {
        text += i + ",";
    }
    text = text.slice(0, -1);

    return text;
}




ANSWER = printRangeReversed(49, 23);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, false);

/**
 * Exercise 1.8
 *
 * Create a function 'printAnyRange()' that takes two arguments 'rangeStart'
 * and 'rangeStop' and returns a string with all numbers comma-separated in
 * the range. If 'rangeStart' is smaller than 'rangeStop' then call the
 * function 'printRange()'.  If 'rangeStart' is greater than 'rangeStop' the
 * call the function 'printRangeReversed()'. Try it using the arguments 23 and
 * 49 (both ways).
 *
 * Answer with the result using arguments 23 and 49.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printAnyRange(rangeStart, rangeStop) {
    var text = "";

    if (rangeStart < rangeStop) {
        text = printRange(rangeStart, rangeStop);
    }
    else if (rangeStart > rangeStop) {
        text = printRangeReversed(rangeStop, rangeStart);
    }

    return text;
}


ANSWER = printAnyRange(23, 49);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9
 *
 * Create a function called 'stringRepeat()' that returns a string a specific
 * number of times. The function should take two arguments, one string and one
 * number: 'pink' and 11. The number represents the number of times the string
 * should be added to a string.
 *
 * Test the function and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function stringRepeat(phrase, repeat) {
    var text = "";

    for (var i = 0; i < repeat; i++) {
        text += phrase;
    }

    return text;
}




ANSWER = stringRepeat('pink', 11);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10
 *
 * Create a function called 'calculateInterest()' that returns the money you
 * have after x years of interest, given three arguments: 656, 41 and 4. First
 * argument represents the start money, the second argument represents the
 * number of years your money produces interest. The third argument is the
 * interest rate in percent (%).
 *
 * Test your function and answer with the result with a maximum of 4 decimals.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function calculateInterest(money, yearsOfInterest, interest) {
    var sum = money;
    for (var i = 0; i < yearsOfInterest; i++) {
        sum = sum * (1 + (interest/100));
    }
    return Number(Math.round(sum+'e4')+'e-4');
}




ANSWER = calculateInterest(656, 41, 4);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, true);

/**
 * Exercise 1.11
 *
 * Create a function 'inRange()' that takes three arguments, 'rangeStart',
 * 'rangeStop' and 'value'. The function should return boolean 'true' if
 * 'value' is greater than 'rangeStart' and less than 'rangeStop'. Otherwise
 * it should return boolean 'false'. Try it out using the range 193 - 561 and
 * the value 493.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function inRange(rangeStart, rangeStop, value) {
    var returnBool = false;

    if (value > rangeStart && value < rangeStop) {
        returnBool = true;
    }

    return returnBool;
}

ANSWER = inRange(193, 561, 493);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.11", ANSWER, false);

/**
 * Exercise 1.12
 *
 * Try out the function 'inRange()' using the range 193 - 561 and the value
 * 667.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = inRange(193, 561, 667);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.12", ANSWER, false);

/**
 * Exercise 1.13
 *
 * Create a function called 'degreesToRadians()' that should take one
 * argument, a degree value. The function should convert the value to radians
 * and return the result with max 4 decimals.
 *
 * Test your function with the value 22 and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function degreesToRadians(degree) {
    return Number(Math.round((degree * (Math.PI / 180))+'e4')+'e-4');
}


ANSWER = degreesToRadians(22);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.13", ANSWER, true);

/**
 * Exercise 1.14
 *
 * Create a function called 'fizzBuzz()' that takes two arguments 'start' and
 * 'stop' and returns a comma-separated string. The arguments represents the
 * starting point and stop point of the game 'Fizz Buzz'
 * (http://en.wikipedia.org/wiki/Fizz_buzz). The function should run from
 * start to stop and add 'Fizz', 'Buzz' or both to your 'result'-variable at
 * appropriate numbers. Each entry to your result should be comma-separated.
 * If 'stop' is equal or lower than 'start', the function should return an
 * appropriate error message.
 *
 * Test the function using start=1 and stop=22.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

 function fizzBuzz(start, stop) {
     var result = "";
     for (var i = start; i < stop+1; i++) {
         if (i % 3 === 0 && i % 5 === 0) {
             result += "Fizz Buzz,";
         }
         else if (i % 3 === 0) {
             result += "Fizz,";
         }
         else if (i % 5 === 0) {
             result += "Buzz,";
         }
         else {
             result += i + ",";
         }
     }

     result = result.slice(0, -1);

     return result;
 }



ANSWER = fizzBuzz(1, 22);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.14", ANSWER, true);

/** ----------------------------------------------------------------------
 * Section 2 . Black jack functions
 *
 * In this section, you could re-use your code from lab 1
 *
 */



/**
 * Exercise 2.1
 *
 * Create a function called 'printSum()' that should take two variables, the
 * sum of the players hand and the sum of the dealers hand. Your hand should
 * be three cards with the values: 2, 1 and 3. The dealers hand should be
 * three card with the values: 1, 2, 6. The function should return the sum and
 * the player: 'Player: 6, Dealer: 9'.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function printSum(sumOfPlayerHand, sumOfDealerHand) {
    return "Player: " + sumOfPlayerHand + ", Dealer: " + sumOfDealerHand;
}




ANSWER = printSum((2+1+3), (1+2+6));

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Create a function called 'printResult()' that should take two variables,
 * the sum of the players hand and the sum of the dealers hand. Players hand
 * should be three cards with the values: 2, 1 and 3. The dealers hand should
 * be three card with the values: 1, 2, 6. This time you should include the
 * check from lab 1 where you find out the boundaries of the player and the
 * dealer. Player hand = 21 ('black jack'), Player hand less than 21 ('safe'),
 * Player hand larger than 21 ('busted'). Dealer hand less than 17 ('safe'),
 * Dealer hand larger or equal to 17 and less than 21 ('stop'), Dealer hand =
 * 21 ('black jack'), Delaer hand larger than 21 ('busted'). Return a string
 * in the format: 'Player: safe, Dealer: busted'.
 *
 * Test your function with the given values and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function blackJack(sumOfHand) {
    var result = "";
    if (sumOfHand < 17) {
        result = "safe";
    }
    else if (sumOfHand > 17 && sumOfHand < 21) {
        result = "stop";
    }
    else if (sumOfHand === 21) {
        result = "black jack";
    }
    else if (sumOfHand > 21) {
        result = "busted";
    }

    return result;
}

function printResult(sumOfPlayerHand, sumOfDealerHand) {
    // Get answer for both.
    var playerResult = blackJack(sumOfPlayerHand);
    var dealerResult = blackJack(sumOfDealerHand);

    return "Player: " + playerResult + ", Dealer: " + dealerResult;
}


ANSWER = printResult((2 + 1 + 3), (1 + 2 + 6));

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
