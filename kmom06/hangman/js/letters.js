window.Letters = (function () {
    'use strict';

    // All possible letters.
    var letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    // All the letters of the pressed buttons.
    var pressedLetters = [];

    // Number of pressed buttons.
    var pressedCounter = 0;

    function showPressed() {
        // Sort the array.
        pressedLetters.sort();
        // Join all letters and uppercase string.
        var result = pressedLetters.join().toUpperCase();
        // Return a alphabetically ordered string.
        return result;
    }

    function showPressedCounter() {
        return pressedCounter;
    }

    // Create our HTML-list of letters.
    Elemu.select(".content", function (elem) {
        // Add a surrounding div for our list.
        var divElem = Elemu.create("div", { classList: ["letters"] });
        // Append the div to .content.
        elem.appendChild(divElem);

        // Create list element in div.letters.
        var listElem = Elemu.create("ul", { classList: ["ul-simple"] });
        divElem.appendChild(listElem);

        // Add all list elements.
        letters.forEach(function (item, index) {
            var liElem = Elemu.create("li", { classList: ["left"] });
            var button = Elemu.create("button", {
                id: "button" + index,
                classList: ["button"],
                text: item
            });

            button.addEventListener("click", function (event) {
                // Mark button as selected with CSS class.
                button.classList.add("selected");

                // Remove the event handler from <div>
                button.removeEventListener("click", function () {});

                // Report the letter as pressed.
                var letter = button.textContent;
                pressedLetters.push(letter);

                // Log output.
                console.log("Pressed button:" + button);
                console.log(event);
                console.log("Selected letter:" + letter);
            });

            // Put button in li.
            liElem.appendChild(button);
            // Put li in list.
            listElem.appendChild(liElem);
        });
    });

    return {
        showPressed: showPressed,
        showPressedCounter: showPressedCounter
    };
})();
