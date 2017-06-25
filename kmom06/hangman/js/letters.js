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
        var result = pressedLetters.join("").toUpperCase();

        Elemu.select(".pressedKeys", function (elem) {
            elem.innerHTML = "(-" + result + "-)";
        });
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

                // Check if letter has already been pressed.
                var letter = button.textContent;
                if (pressedLetters.indexOf(letter) < 0) {
                    // Report the letter as pressed.
                    pressedLetters.push(letter);
                }

                showPressed();

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

    // Create node for the pressed keys.
    Elemu.select(".content", function (elem) {
        var pressedText = Elemu.create("p", {
            classList: ["pressedKeysText"],
            text: "Used letters:" 
        });

        elem.appendChild(pressedText);

        var pressed = Elemu.create("p", {
            classList: ["pressedKeys"],
            text: "(-)"
        });

        elem.appendChild(pressed);
    });

    return {
        showPressed: showPressed,
        showPressedCounter: showPressedCounter
    };
})();
