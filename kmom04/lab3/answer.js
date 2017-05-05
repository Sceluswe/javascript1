/**
 * @preserve 67be76cc4a883fd235c548ddebd16170
 *
 * 67be76cc4a883fd235c548ddebd16170
 * javascript1
 * lab3
 * emmd12
 * 2016-11-29 23:10:53
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-11-30 00:10:54 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 3 - javascript1
 *
 * Practise arrays. You might find useful help here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Ob
 * jects/Array
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Arrays
 *
 * To copy an array use array.slice() to make a real copy, not a shallow one.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a variable 'array1' holding an array with the numbers
 * 42,78,-1,0,-432,799,2,1100.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var array1 = [42, 78, -1, 0, -432, 799, 2, 1100];




ANSWER = array1;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Use the variable 'array1'. How many items does the array have?
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = array1.length;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Create a variable 'array2' holding an array with the words:
 * potato,carrot,onion,leek,cabbage.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



var array2 = ["potato", "carrot", "onion", "leek", "cabbage"];


ANSWER = array2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Return the element on position: 2 in 'array2'.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = array2[2];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Return element 2 in 'array2'. Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */






ANSWER = array2[1];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/**
 * Exercise 1.6
 *
 * Use the variable 'array2'. Concatenate the first item and the last item as
 * a string. Separate the string with '-'.
 *
 * Answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




ANSWER = array2[0] + "-" + array2[array2.length-1];

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.6", ANSWER, false);

/**
 * Exercise 1.7
 *
 * Merge the two arrays 'array1' and 'array2' into a third variable 'array3'.
 *
 *
 * Answer with 'array3'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var array3 = array1.concat(array2);



ANSWER = array3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.7", ANSWER, true);

/**
 * Exercise 1.8
 *
 * Reverse the order of the elements in array 'array3'.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


array3.reverse();



ANSWER = array3;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.8", ANSWER, false);

/**
 * Exercise 1.9
 *
 * Create a variable 'array21' as a clone of 'array2'. Sort 'array21'. Answer
 * with the resulting array.
 * (Hint:
 * http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplic
 * ate-an-array-slice-vs-for-loop)
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var array21 = array2.slice();



ANSWER = array21.sort();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.9", ANSWER, false);

/**
 * Exercise 1.10
 *
 * Create a variable 'array11' as a copy of 'array1'. Sort 'array11' according
 * to its values. The smallest value comes first and the largest value comes
 * last.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var array11 = array1.slice();

array11.sort(function (a, b) {
    return a - b;
});

ANSWER = array11;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.10", ANSWER, true);

/**
 * Exercise 1.11
 *
 * Create a variable 'array22' which holds the same content as 'array2' - but
 * all strings are uppercase. Use the built-in Array-function 'map()' to solve
 * it.
 *
 * Answer with the array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var array22 = array2.map(function (item) {
    return typeof item === 'string' ? item.toUpperCase() : item;
});


ANSWER = array22;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.11", ANSWER, false);

/**
 * Exercise 1.12
 *
 * Create a new array 'messageOfToday'. It should contain all items from
 * 'array2' where each item is concatenated with the string ' is good for
 * you!'. Use the built-in array-function 'forEach()' to solve it. Each
 * sentence shold start with a capital letter.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var messageOfToday = array2.map(function (item) {
    return (typeof item === 'string' ? item[0].toUpperCase() + item.slice(1) : item) + ' is good for you!';
});



ANSWER = messageOfToday;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.12", ANSWER, true);

/**
 * Exercise 1.13
 *
 * Create a new array 'array12'. It should contain all positive numbers from
 * the 'array1'. Use the built-in array-function 'filter()' to solve it.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var array12 = array1.filter(function (item) {
    if (typeof item === "number" && item > 0) {
        return true;
    }
    return false;
});




ANSWER = array12;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.13", ANSWER, false);

/**
 * Exercise 1.14
 *
 * Create a variable 'iLike'. It should contain the string 'I like ' and then
 * all items from 'array2' separated with ', '. End the string with a '!'. Use
 * the built-in array-function 'join()' to solve it.
 *
 * Answer with the string.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var ilike = "I like " + array2.join(", ") + "!";



ANSWER = ilike;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.14", ANSWER, false);

/**
 * Exercise 1.15
 *
 * Create a function 'arraySum' that takes one array as argument and returns
 * the sum of all elements in that array.
 *
 * Try out the function using 'array1' and answer with the result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


function arraySum(array_arg) {
    var sum = 0;

    for (var i = 0; i < array_arg.length; i++) {
        sum += array_arg[i];
    }

    return sum;
}




ANSWER = arraySum(array1);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.15", ANSWER, false);

/**
 * Exercise 1.16
 *
 * Create a function 'arrayAverage' that takes one array as argument and
 * returns the average of all elements in that array.
 *
 * Try out the function using 'array1' and answer with the rounded integer
 * result.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function arrayAverage(array_arg) {
    var average = 0;
    var nrOfItems = array_arg.length;

    for (var i = 0; i < nrOfItems; i++) {
        average += array_arg[i];
    }

    return average / nrOfItems;
}




ANSWER = Math.round(arrayAverage(array1));

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.16", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Modify arrays
 *
 * Learn how to modify arrays.
 *
 */



/**
 * Exercise 2.1
 *
 * Create a new array 'myArray' and make it a copy of 'array1'. Get the last
 * element from 'myArray' using the built-in array-function 'pop()'.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


var myArray = array1.slice();

myArray.pop();

ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Add the boolean value 'true' to the array 'myArray' using built-in
 * array-function 'push()'.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


myArray.push(true);



ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/**
 * Exercise 2.3
 *
 * Use the built-in array-function 'shift()' to remove the first item from the
 * array 'myArray'.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




myArray.shift();

ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4
 *
 * Add the float number '3.14' to the beginning of 'myArray' using built-in
 * array-function 'unshift()'.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



myArray.unshift(3.14);


ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5
 *
 * Change 'myArray' element 3 and 4 to the boolean value 'false' using
 * built-in array-function 'splice()'.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

myArray.splice(2, 2, false, false);




ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, false);

/**
 * Exercise 2.6
 *
 * Extract the last two elements as a slice from 'myArray' using built-in
 * array-function 'slice()'.
 *
 * Answer with the slice array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */




ANSWER = myArray.slice(-2);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.6", ANSWER, false);

/**
 * Exercise 2.7
 *
 * Remove item 4 and 5 in 'myArray'. Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */



/*var result = myArray.filter(function (item, index) {
    var boolean = true;
    index === 4 && index === 5 ? boolean = false : boolean = true;
    return boolean;
});*/

myArray.splice(3, 2);


ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.7", ANSWER, true);

/**
 * Exercise 2.8
 *
 * Insert the string 'MEGA' after item 3 in 'myArray'. Answer with the
 * resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


myArray.splice(3, 0, 'MEGA');



ANSWER = myArray;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.8", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
