(function(){
    'use strict';

    var boxElem = document.getElementById("box1");

    /*
    * Returns the style of an object. The returned style cannot be used for modification.
    * @param elem, the element object of the box/element.
    */
    function getElemStyle(elem) {
        var elemStyle = window.getComputedStyle(elem, null);

        return elemStyle;
    }

    /*
    * Logs the size of the window.
    * @param elem, the element object of the box/element.
    */
    function logWindowSize() {
        console.log("WindowW: " + window.innerWidth + ", WindowH: " + window.innerHeight);
    }

    /*
    * Logs offset and client width of a box.
    * @param elem, the element object of the box/element.
    */
    function logBoxSize(elem) {
        console.log(elem.id + ": offsetWidth: " + elem.offsetWidth  + ", offsetHeight: " + elem.offsetHeight);

        console.log(elem.id + ": clientWidth: " + elem.offsetWidth  + ", clientHeight: " + elem.offsetHeight);
    }

    /*
    * Logs the left and top offset position of a box.
    * @param elem, the element object of the box/element.
    */
    function logBoxPos(elem) {
        var boxStyle = getElemStyle(elem);

        console.log(elem.id + ": Pos left: " + boxStyle.top + ", Pos top: " + boxStyle.left);
    }

    /*
    * Logs info about the window and the box using id.
    * @param elem, the element object of the box/element.
    */
    function logBoxInfo(elem) {
        logWindowSize();

        logBoxSize(elem);

        logBoxPos(elem);
    }

    /*
    * Function moves elem with the given id and then prints its info.
    * @param elem, the element object of the box/element.
    */
    function moveBox(elem, newLeft, newTop) {
        elem.style.left = newLeft + "px";
        elem.style.top = newTop + "px";

        console.log("Elem moved to:");
        logBoxPos(elem);
    }

    /*
    * Centers the box on the page.
    * @param elem, the element object of the box/element.
    */
    function centerBoxInPage(elem) {
        console.log("windowWidth: " + parseInt(window.innerWidth));
        console.log("windowHeight: " + parseInt(window.innerHeight));

        // Get width and height of the box, split in 2.
        var boxStyle = window.getComputedStyle(elem);
        console.log("centerBoxInPage: width:" + boxStyle.width);
        console.log("centerBoxInPage: height:" + boxStyle.height);

        // Get current size.
        var boxWidth = parseInt(boxStyle.width.replace("px", "")) / 2;
        var boxHeight = parseInt(boxStyle.height.replace("px", "")) / 2;

        // Get page center coordinates, remove box size from window.
        var centerX = (parseInt(window.innerWidth) / 2) - boxWidth;
        var centerY = (parseInt(window.innerHeight) / 2) - boxHeight;

        moveBox(elem, centerX, centerY);
    }

    /*
    * Increases the CSS style width and height of the element and reduce
    * top and left so that it remains centered.
    * @param elem, the element object of the box/element.
    * @param inc, the amount to be added.
    */
    var increaseWidthHeight = function (elem, inc) {
        var boxStyle = getElemStyle(elem);

        console.log(elem);

        // Get current size.
        var int_boxWidth = parseInt(boxStyle.width.replace("px", ""));
        var int_boxHeight = parseInt(boxStyle.height.replace("px", ""));

        if ((int_boxWidth + inc) > 0 && (int_boxHeight + inc) > 0) {
            // Get current top and left position.
            var int_topPos = parseInt(boxStyle.top.replace("px", ""));
            var int_leftPos = parseInt(boxStyle.left.replace("px", ""));

            // Log current size.
            console.log("current width:" + int_boxWidth);
            console.log("current height:" + int_boxHeight);

            // Create new width and height.
            elem.style.width = (int_boxWidth + inc) + "px";
            elem.style.height = (int_boxHeight + inc) + "px";

            console.log(elem.style.width);
            console.log(elem.style.height);

            // Calculate new values and assign.
            elem.style.top = (int_topPos - (inc / 2)) + "px";
            elem.style.left = (int_leftPos - (inc / 2)) + "px";
            console.log("Increase size of:" + elem.id);

            console.log(elem.style.top);
            console.log(elem.style.left);
        }
    };

    /*
    * Changes the color of an element based on it's previous color.
    * @oaram elem, the element to change color on.
    */
    var changeElemBgColor = function (elem) {
        // Get the elements background-color.
        var elemBGColor = getElemStyle(elem).backgroundColor;

        console.log("Current background-color: '" + elemBGColor + "'");

        if (elemBGColor === "rgb(0, 128, 0)") {
            elem.classList.remove("green");
            elem.classList.add("yellow");
        }
        else if (elemBGColor === "rgb(255, 255, 0)") {
            elem.classList.remove("yellow");
            elem.classList.add("red");
        }
        else if (elemBGColor === "rgb(255, 0, 0)") {
            elem.classList.remove("red");
            elem.classList.add("blue");
        }
        else if (elemBGColor === "rgb(0, 0, 255)") {
            elem.classList.remove("blue");
            elem.classList.add("green");
        }
    };

    /*
    * Takes 2 numbers and returns a random integer inside the range.
    * @param min, the minimum number in the range.
    * @param max, the maximum number in the range.
    * @returns an integer.
    */
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /*
    * Returns an obj containing a new randomized left and top position.
    * @param elem, the element used to define a range for the new positions.
    */
    var getRandElemPos = function (elem) {
        // Get element style.
        var elemStyle = getElemStyle(elem);

        // Get maximum Top position.
        var elemHeight = parseInt(elemStyle.height.replace("px", ""));
        var maxTop = parseInt(window.innerHeight) - elemHeight;

        // Get maximum Left position.
        var elemWidth = parseInt(elemStyle.width.replace("px", ""));
        var maxLeft = parseInt(window.innerWidth) - elemWidth;

        // Get new random position.
        var top = getRandomInt(0, maxTop);
        var left = getRandomInt(0, maxLeft);

        return { newTop: top, newLeft: left };
    };

    /*
    * Apply events to the element.
    * @param elem, the element to receive the events.
    */
    var boxEvents = function (elem) {
        elem.addEventListener("click", function (event) {
            elem.classList.toggle("selected");
            console.log(elem);
            console.log(event);
        });

        // On double-click, remove the element after 2 seconds.
        elem.addEventListener("dblclick", function (event) {
            elem.classList.toggle("animateSize");
            elem.style.width = "2px";
            elem.style.height = "2px";
            window.setTimeout(function () {
                elem.remove();
            }, 1100);
            console.log(elem);
            console.log(event);
        });
    };

    /*
    * Creates a copy of an element and puts it in targetContainer.
    * @param elem, the element to copy.
    * @param targetContainer, the container to put the copy in.
    * @return the new element.
    */
    var copyElement = function (elem, targetContainer) {
        // Clone the element.
        var dupNode = elem.cloneNode();

        // Append clone to content.
        var content = document.getElementById(targetContainer);
        content.appendChild(dupNode);

        // Return the new element.
        return dupNode;
    };

    /*
    * Takes a box element, copies it, gives it a random pos and increases z.
    * @param elem, the box element to copy.
    */
    var copyBox = function (elem) {
        // Copy element.
        var dupNode = copyElement(elem, "content");

        // Get new random left and top position.
        var newPos = getRandElemPos(dupNode);

        // Move copy into position.
        moveBox(dupNode, newPos.newLeft, newPos.newTop);

        // Set new z-index of copy.
        increaseZ(dupNode, 1);

        // Add eventListener to the copy so it can be selected.
        boxEvents(dupNode);

        // De-select the copy.
        dupNode.classList.remove("selected");

        return dupNode;
    };

    /*
    * Increases the CSS z-index of an element.
    * @param elem, the element to increase.
    * @param inc, the incrementor added the elements previous z-index.
    */
    var increaseZ = function (elem, inc) {
        // Increase z-index of copy by 1 above the original.
        elem.style.zIndex = parseInt(elem.style.zIndex) + inc;
    };

    /*
    * Moves an element X amount of pixels to the left and/or top.
    * @param elem, the element to move.
    * @param left, the amount of pixels to move horistontally.
    * @param top, the amount of pixels to move vertically.
    */
    var directElem = function (elem, left, top) {
        // Get the stye of the element.
        var elemStyle = getElemStyle(elem);

        // Calculate new position of the element.
        var newLeft = parseInt(elemStyle.left.replace("px", "")) + left;
        var newTop = parseInt(elemStyle.top.replace("px", "")) + top;

        // Move element to its new position.
        moveBox(elem, newLeft, newTop);
    };

    /*
    * Randomizes a random color class for an HTML element.
    * @param elem, the element to randomize a class for.
    */
    var randColor = function (elem) {
        // Randomize a color for it.
        var colors = ["green", "blue", "yellow", "red"];
        var randColor = getRandomInt(0, 4);

        // Log color number.
        console.log("randColor:" + randColor);

        // Assign random color to elem.
        elem.classList.add(colors[randColor]);
    };

    /*
    * Randomize a CSS class shape for an HTML element.
    * @param elem, the element to randomize for.
    */
    var randShape = function (elem) {
        // Randomize a shape for it.
        var randShape = getRandomInt(0, 2);

        switch (randShape) {
            case 0:
                // Let box from the copy remain.
                break;
            case 1:
                // Add circle.
                elem.classList.toggle("circle");
                break;
        }
    };

    /*
    * High-order function executing callable on HTMLelements with target class.
    * @param targetClass, the CSSclass used to target elements.
    * @param callable, callable to be used on each targeted element.
    * @param ...params, rest arguments used as arguments for callable.
    */
    function styleElem(target, callable) {
        // Get all targeted HTML elements using target.
        var selected = document.querySelectorAll(target);

        // Make sure we have at least one element.
        if (selected.length > 0) {
            for (var i = 0; i < selected.length; i++) {
                // Remove callable from args, keep target as formal parameter.
                var args = Array.prototype.slice.call(arguments, 2);
                // Add target element obj as first formal parameter.
                args.unshift(selected[i]);
                // Execute the callable, using spread syntax.
                callable.apply(null, args);
            }

            console.log("Nr of Elements: " + selected.length);
        }
        else {
            console.log("No elements with the class: " + target);
        }
    }

    logBoxInfo(boxElem);
    centerBoxInPage(boxElem);

    // Place the box in the center whenever the window is resized.
    window.onresize = function () {
        centerBoxInPage(boxElem);
    };

    // Add events to the #box1 element.
    boxEvents(boxElem);

    document.addEventListener("keydown", function (event) {
        var key = event.keyCode;

        switch (key) {
            // When E is pressed.
            case 69:
                styleElem(".selected", function (elem) {
                    // Get element style.
                    var elemStyle = getElemStyle(elem);

                    // Make sure it's a box.
                    if (elemStyle.width === elemStyle.height) {
                        elem.classList.toggle("circle");
                    }
                    else {
                        // Remove identifier class.
                        elem.classList.remove("rectangle");
                        elem.classList.remove("leftcircle");
                        elem.classList.remove("rightcircle");

                        elem.style.width = elemStyle.height;
                        elem.style.borderRadius = "";
                    }
                });
                break;
            // When Q is pressed.
            case 81:
                styleElem(".selected", function (elem) {
                    increaseWidthHeight(elem, 10);

                    // get element style.
                    var elemStyle = getElemStyle(elem);

                    var newWidth = parseInt(elemStyle.width.replace("px", ""));

                    if (elem.classList.contains("leftcircle")) {
                        // Set new radius.
                        elem.style.borderRadius = "0px " + newWidth + "px " + newWidth + "px 0px";
                        elem.style.height = (parseInt(elemStyle.height.replace("px", "")) + 10) + "px";
                    }
                    else if (elem.classList.contains("rightcircle")) {
                        // Set new radius.
                        elem.style.borderRadius = newWidth + "px 0px 0px " + newWidth + "px";
                        elem.style.height = (parseInt(elemStyle.height.replace("px", "")) + 10) + "px";
                    }
                });
                break;
            // When W is pressed.
            case 87:
            styleElem(".selected", function (elem) {
                increaseWidthHeight(elem, -10);

                // get element style.
                var elemStyle = getElemStyle(elem);

                var newWidth = parseInt(elemStyle.width.replace("px", ""));
                var newHeight = "";

                if (elem.classList.contains("leftcircle")) {
                    // Set new radius.
                    elem.style.borderRadius = "0px " + newWidth + "px " + newWidth + "px 0px";

                    newHeight = parseInt(elemStyle.height.replace("px", "")) - 10;

                    if (newHeight > 10) {
                        elem.style.height = newHeight + "px";
                    }
                }
                else if (elem.classList.contains("rightcircle")) {
                    // Set new radius.
                    elem.style.borderRadius = newWidth + "px 0px 0px " + newWidth + "px";

                    newHeight = parseInt(elemStyle.height.replace("px", "")) - 10;

                    if (newHeight > 10) {
                        elem.style.height = newHeight + "px";
                    }
                }
            });
                break;
            // When R is pressed.
            case 82:
                styleElem(".selected", changeElemBgColor);
                break;
            // When T is pressed.
            case 84:
                styleElem(".selected", copyBox);
                break;
            // When S is pressed.
            case 83:
                styleElem(".selected", increaseZ, 1);
                break;
            // When A is pressed.
            case 65:
                styleElem(".selected", increaseZ, -1);
                break;
            // When Y is pressed.
            case 89:
                styleElem(".selected", function (elem) {
                    console.log("Removed: " + elem.id);
                    elem.remove();
                });
                break;
            // When arrow LEFT is pressed.
            case 37:
                styleElem(".selected", directElem, -10, 0);
                break;
            // When arrow UP is pressed.
            case 38:
                styleElem(".selected", directElem, 0, -10);
                break;
            // When arrow RIGHT is pressed.
            case 39:
                styleElem(".selected", directElem, 10, 0);
                break;
            // When arrow DOWN is pressed.
            case 40:
                styleElem(".selected", directElem, 0, 10);
                break;
            // When U is pressed.
            case 85:
                styleElem(".selected", function (elem) {
                    elem.classList.remove("selected");
                });
                break;
            // When I is pressed.
            case 73:
                styleElem(".box", function (elem) {
                    elem.classList.add("selected");
                });
                break;
            // When P is pressed.
            case 80:
                styleElem("#content", function (elem) {
                    console.log("Selected: " + elem.id);
                    // Make a copy of #box1.
                    var dupNode = copyBox(boxElem);

                    // Get random color.
                    randColor(dupNode);

                    // Get random shape.
                    randShape(dupNode);
                });
                break;
            // When D is pressed.
            case 68:
                styleElem(".selected", function (elem) {
                    // Keep track of the number of executions.
                    var index = 0;
                    var myInterval = window.setInterval(function () {
                        console.log("Timer" + (index + 1) + " done.");

                        changeElemBgColor(elem);
                        randShape(elem);
                        index = index + 1;

                        if (index == 5) {
                            window.clearInterval(myInterval);
                        }

                    }, 200);
                });
                break;
            // When Z is pressed..
            case 90:
                styleElem(".selected", function (elem) {
                    // Prepare copy variables.
                    var dupNode1 = "", dupNode2 = "";

                    // Get the original element style.
                    var elemStyle = getElemStyle(elem);

                    // Create new width.
                    var newWidth = parseInt(elemStyle.width.replace("px", "")) / 2;

                    // Find out if the item is a square or a circle.
                    if (elem.classList.contains("circle")) {
                        // Remove the circle class.
                        elem.classList.remove("circle");

                        // Create two copies of the item (split the original).
                        dupNode1 = copyBox(elem);
                        dupNode2 = copyBox(elem);

                        // Set new width of the copies.
                        dupNode1.style.width = newWidth + "px";
                        dupNode2.style.width = newWidth + "px";

                        dupNode1.classList.add("leftcircle");
                        dupNode2.classList.add("rightcircle");

                        // Turn dupNode1 into a half circle.
                        dupNode1.style.borderRadius = "0px " + newWidth + "px " + newWidth + "px 0px";
                        // Turn dupNode2 into a half circle.
                        dupNode2.style.borderRadius = newWidth + "px 0px 0px " + newWidth + "px";

                        // Remove the original element.
                        elem.remove();
                    }
                    else if (elem.classList.contains("box")) {
                        // Make sure it's a square.
                        if (elemStyle.width === elemStyle.height) {
                            // Create two copies of the item (split the original).
                            dupNode1 = copyBox(elem);
                            dupNode2 = copyBox(elem);

                            // Turn copies into rectangles by setting new width.
                            dupNode1.style.width = newWidth + "px";
                            dupNode2.style.width = newWidth + "px";

                            dupNode1.classList.add("rectangle");
                            dupNode2.classList.add("rectangle");

                            // Remove the original element.
                            elem.remove();
                        }
                    }
                });
                break;
        }

        // Print pressed key.
        console.log(event.keyCode);
    });


    console.log('Sandbox is ready!');
})();
