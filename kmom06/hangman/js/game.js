window.Game = (function () {
    'use strict';

    // Declare private variables:
    // All possible letters.
    var letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    // All the letters of the pressed buttons.
    var pressedButtons = [];

    // Number of pressed buttons.
    var pressedCounter = 0;

    // The hidden word.
    var hiddenWord = "";

    // Declare public functions of the Game module.
    var Game = {
        /**
         * Restart the game and pick a new random word.
         *
         * @returns void.
         */
        "start": function () {
            this.reset();

            Hangman.randWord();

            // Get the current word and use its length.
            var wordLength = Hangman.peek().length;
            for (var i = 0; i < wordLength; i++) {
                hiddenWord += "_";
            }

            // Display the hiddenWord.
            Elemu.select(".content", function (elem) {
                var wordToGuess = Elemu.create("p", {
                    classList: ["hiddenWordText"],
                    text: "Guess the word:"
                });

                elem.appendChild(wordToGuess);

                var hiddenWordElem = Elemu.create("p", {
                    classList: ["hiddenWord"],
                    text: hiddenWord
                });

                elem.appendChild(hiddenWordElem);
            });
        },

        /**
        * Reset Hangman and the gamebuttons, but keep the old word.
        *
        * @return void.
        */
        "reset": function () {
            // Reset gamebuttons.
            Elemu.select(".button", function (elem) {
                elem.classList.remove("selected");
            });

            Elemu.select(".pressedKeys", function (elem) {
                elem.innerHTML = "(--)";
            });

            // Reset array.
            pressedButtons = [];

            // Reset hangman.
            Hangman.hideAll();
        }
    };

    /**
     * Update the displayed text of the pressed buttons.
     *
     * @return void.
     */
    function updatePressedButtons() {
        // Sort the array.
        pressedButtons.sort();

        // Join all letters and uppercase string.
        var result = pressedButtons.join("").toUpperCase();

        Elemu.select(".pressedKeys", function (elem) {
            elem.innerHTML = "(-" + result + "-)";
        });
    }

    // Create our HTML-list of buttons.
    Elemu.select(".content", function (elem) {
        // Add a surrounding div for our list.
        var divElem = Elemu.create("div", { classList: ["gameButtons"] });
        // Append the div to .content.
        elem.appendChild(divElem);

        // Create list element in div.gameButtons.
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
                if (pressedButtons.indexOf(letter) < 0) {
                    // Report the letter as pressed.
                    pressedButtons.push(letter);
                    // Show it in the GUI/browser.
                    updatePressedButtons();

                    // Update counter.
                    pressedCounter++;

                    // Get the word from Hangman.
                    var currentWord = Hangman.peek().toUpperCase();
                    // Check if the letter exists in the word.
                    var letterExists = currentWord.indexOf(letter);

                    if (letterExists === -1) {
                        // If the letter doesn't exist. Show another part.
                        Hangman.showNextPart();
                        console.log("Wrong letter!");
                    }
                    else {
                        // If it exists, find where and update.
                        for (var i = 0; i < currentWord.length; i++) {
                            if (currentWord.charAt(i) === letter) {
                                hiddenWord = Elemu.replaceChar(hiddenWord, i, letter);
                            }
                        }

                        Elemu.select(".hiddenWord", function (elem) {
                            elem.innerHTML = hiddenWord;
                        });
                    }

                    // Log output.
                    console.log("Pressed button:" + button);
                    console.log(event);
                    console.log("Selected letter:" + letter);
                }

                // Check if the player has lost.
                if (Hangman.isShown()) {
                    // Make all buttons unclickable.
                    Elemu.select(".button", function (elem) {
                        elem.classList.add("selected");
                    });
                    // Make all buttons pressed. 
                    pressedButtons = letters;
                    // Display gameover text.
                }
            });

            // Put button in li.
            liElem.appendChild(button);
            // Put li in list.
            listElem.appendChild(liElem);
        });
    });

    // Create text-node for the pressed keys.
    Elemu.select(".content", function (elem) {
        var pressedText = Elemu.create("p", {
            classList: ["pressedKeysText"],
            text: "Used letters:"
        });

        elem.appendChild(pressedText);

        var pressed = Elemu.create("p", {
            classList: ["pressedKeys"],
            text: "(--)"
        });

        elem.appendChild(pressed);
    });

    return Game;
})();
