/**
 * @preserve 8e99a1a87ef18840a76fcf86283015f2
 *
 * 8e99a1a87ef18840a76fcf86283015f2
 * javascript1
 * lab4
 * emmd12
 * 2016-12-01 17:25:27
 * v2.2.21 (2016-10-07)
 *
 * Generated 2016-12-01 18:25:27 by dbwebb lab-utility v2.2.21 (2016-10-07).
 * https://github.com/mosbth/lab
 */

(function(dbwebb){
    "use strict";

    var ANSWER = null;

    console.log("Ready to begin.");


/** ======================================================================
 * Lab 4 - javascript1
 *
 * Practice basics on objects.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Create object
 *
 * Start by creating an empty object called 'person' by using the object
 * literal.
 *
 */

var person = {};

/**
 * Exercise 1.1
 *
 * Give your person-object the property 'firstName' with a value of 'Henri'.
 * Add a method called 'print1()' that returns a presentation of the object,
 * like this: 'My name is Henri.' Use 'this.firstName' to construct *  the
 * string.
 *
 * Answer with the result from calling 'person.print1()'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

person.firstName = "Henri";

person.print1 = function () {
    return "My name is " + this.firstName + ".";
};


ANSWER = person.print1();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, false);

/**
 * Exercise 1.2
 *
 * Add properties 'lastName' and 'nationality' to your person-object. Their
 * values should be 'Becquerel' and 'France'.
 *
 * Create the method 'person.print2()' which should say: 'My name is Henri
 * Becquerel from France.'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

person.lastName = "Becquerel";
person.nationality = "France";

person.print2 = function () {
    return "My name is " + this.firstName + " " + this.lastName + " from " + this.nationality + ".";
};


ANSWER = person.print2();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Add the property 'born' with the value of a Date object: '1852-12-15'.
 * Create a method 'print3()' that says exactly the same as 'print2()'
 * followed by 'I was born 1852.'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


person.born = new Date('1852-12-15');

person.print3 = function () {
    return this.print2() + ' I was born ' + this.born.getFullYear() + '.';
};



ANSWER = person.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Create a second person, called 'person2' by using built-in function
 * 'Object.create()'. The person2 should have the following properties:
 * 'Albert, Einstein, Germany, 1879-03-14'.
 *
 * Print out details on the second person using 'person2.print3()'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var person2 = Object.create(person);
person2.firstName = "Albert";
person2.lastName = "Einstein";
person2.nationality = "Germany";
person2.born = new Date("1879-03-14");



ANSWER = person2.print3();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . More on objects
 *
 * Even more on objects!
 *
 */



/**
 * Exercise 2.1
 *
 * Create a object called 'shape' with the properties: 'x', 'y', 'height',
 * 'width' and 'print'. Create a new object from 'shape' called 'shape1' and
 * initiate the properties with: x:73, y:19, height:10, width: 11.
 *
 * Use the 'print' method to print out the assigned values as: 'x:?, y:?,
 * height:?, width:?'
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var shape = {
    x: 73, y: 19,
    height: 10, width: 11,

    print: function () {
        return "x:" + this.x + ", y:" + this.y + ", height:" + this.height + ", width:" + this.width;
    }
};




ANSWER = shape.print();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, false);

/**
 * Exercise 2.2
 *
 * Create a method 'shape.init(x, y, height, width)' that helps you to
 * initiate a object. Try it out by re-initing 'shape1' using the method.
 *
 * Answer with 'shape1.print()'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */


shape.init = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

var shape1 = Object.create(shape);

shape1.init(73, 19, 11, 10);

ANSWER = shape1.print();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, true);

/**
 * Exercise 2.3
 *
 * Create another object from 'shape' called 'shape2' and initiate the
 * properties with: x:37, y:89, height:16, width: 20.
 *
 * Use the 'print' method to print out the assigned values.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var shape2 = Object.create(shape);

shape2.init(37, 89, 20, 16);


ANSWER = shape2.print();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.3", ANSWER, false);

/**
 * Exercise 2.4
 *
 * Create a method in 'shape' that calculates and returns the area of the
 * shape. Try it out by calling it for 'shape1' and 'shape2'.
 *
 * Answer with both values, separated by ', ' (notice the space after the
 * comma).
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.calculateShapeArea = function () {
    return this.width * this.height;
};




ANSWER = shape1.calculateShapeArea() + ", " + shape2.calculateShapeArea();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.4", ANSWER, false);

/**
 * Exercise 2.5
 *
 * Create a method 'shape.overlapPoint(posX, posY)' that checks if a position
 * x, y is within the current shape. Or, the shape overlaps that position. The
 * shapes position x and y is top left of the shape. Return true or false.
 * Test by checking if x:83, y:28 is within 'shape1' and if x:36, y:88 is
 * within 'shape2'.
 *
 * Return the result separated by ', ' (notice the space after the comma).
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.overlapPoint = function (posX, posY) {
    var result = false;
    // Calculate the shape, assuming it is a square.
    var maxX = this.x + this.width;
    var minX = this.x;
    var maxY = this.y + this.height;
    var minY = this.y;

    if (posX < maxX
        && posX > minX
        && posY > minY
        && posY < maxY
    ) {
        result = true;
    }

    return result;
};

console.log(shape1.print());


ANSWER = shape1.overlapPoint(83, 28) + ", " + shape2.overlapPoint(36, 88);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.5", ANSWER, true);

/**
 * Exercise 2.6
 *
 * Create a method 'shape.overlapShape()' that takes a shape as argument and
 * checks if the shapes overlaps (colliding bodies). Return true or false.
 * Create a new 'shape3' and initiate the properties with: x:79, y:24,
 * height:10, width: 11.
 *
 * Return the result from checking 'shape1.overlapShape(shape3)'.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.overlapShape = function (shape) {
    var result = false;
    // Calculate the x, y of each corner.
    var coords = [
        { x: shape.x, y: shape.y },
        { x: (shape.x + shape.width), y: shape.y },
        { x: shape.x, y: shape.y + shape.height },
        { x: shape.x + shape.width, y: shape.y + shape.y }
    ];

    for (var i = 0; i < 4; i++) {
        if (this.overlapPoint(coords[i].x, coords[i].y)) {
            result = true;
        }
    }

    return result;
};

var shape3 = Object.create(shape);

shape3.init(79, 24, 11, 10);


ANSWER = shape1.overlapShape(shape3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.6", ANSWER, false);

/**
 * Exercise 2.7
 *
 * Create a method 'shape.move(moveX, moveY)' which moves the shape from its
 * current position by adding 'x += moveX' and 'y += moveY'. Try it out by
 * moving 'shape3' using 'moveX: 11, moveY: 10'.
 *
 * Re-check if the bodies 'shape1' and 'shape3' collides.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

shape.move = function (moveX, moveY) {
    this.x += moveX;
    this.y += moveY;
};

shape3.move(11, 10);


ANSWER = shape1.overlapShape(shape3);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.7", ANSWER, false);


    console.log(dbwebb.exitWithSummary());

}(window.dbwebb));
