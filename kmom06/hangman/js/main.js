(function(){
    'use strict';

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

    /*
    * Creates an HTML element and returns it.
    * @param element, the name of the elemnt tag.
    * @param attrObj, object with attributes: id, classList, text
    */
    function createElem(element, attrObj) {
        // Create HTML node.
        var newElem = document.createElement(element);

        if (typeof attrObj !== "undefined") {
            if (typeof attrObj.id !== "undefined") {
                newElem.setAttribute("id", attrObj.id);
            }

            if (typeof attrObj.classList !== "undefined") {
                // Apply classes.
                attrObj.classList.forEach(function (item) {
                    newElem.classList.add(item);
                });
            }

            if (typeof attrObj.text !== "undefined") {
                newElem.innerHTML = attrObj.text;
            }
        }

        return newElem;
    }

    console.log('Sandbox is ready!');

    // All possible letters.
    var letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    // Create our list of letters.
    styleElem(".content", function (elem) {
        // Add a surrounding div for our list.
        var newElem = createElem("div", { classList: ["letters"] });
        elem.appendChild(newElem);

        // Create list element in div.letters.
        var listElem = createElem("ul", { classList: ["ul-simple"] });
        newElem.appendChild(listElem);

        // Add all elements.
        letters.forEach(function (item, index) {
            var liElem = createElem("li", { classList: ["left"] });
            var button = createElem("button", {
                id: "button" + index,
                classList: ["button"],
                text: item
            });
            // Put button in li.
            liElem.appendChild(button);
            // Put li in list.
            listElem.appendChild(liElem);
        });
    });

})();
