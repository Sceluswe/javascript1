window.Elemu = (function () {

    /*
    * High-order function executing callable on HTMLelements with target class/id.
    * @param target, the targeted HTMLelement preceeded by a . or # respectively.
    * @param callable, callable to be used on each of the targeted element.
    * @param ...params, rest arguments used as arguments for callable.
    */
    function selectElem(target, callable) {
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
    * @param element, the name of the element tag.
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

    return {
        select: selectElem,
        create: createElem
    };
})();
