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

        window.Elemu.select(".pressedKeys", function (elem) {
            elem.innerHTML = "(-" + result + "-)";
        });
    }

    function disableButtons() {
        // Make all buttons unclickable.
        window.Elemu.select(".button", function (elem) {
            elem.classList.add("selected");
        });

        // Make all buttons pressed.
        pressedButtons = letters;
    }

    // Create our HTML-list of buttons inside the leftLane part of the grid.
    window.Elemu.select(".leftLane", function (leftLane) {
        // Create list element.
        var listElem = window.Elemu.create("ul", { classList: ["gameButtons", "ul-simple"] });
        leftLane.appendChild(listElem);

        // Add all list elements.
        letters.forEach(function (item, index) {
            var liElem = window.Elemu.create("li", { classList: ["left"] });
            var button = window.Elemu.create("button", {
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
                    var currentWord = window.Hangman.peek().toUpperCase();
                    // Check if the letter exists in the word.
                    var letterExists = currentWord.indexOf(letter);

                    if (letterExists === -1) {
                        // If the letter doesn't exist. Show another part.
                        window.Hangman.showNextPart();
                        console.log("Wrong letter!");
                    }
                    else {
                        // If it exists, find where and update.
                        for (var i = 0; i < currentWord.length; i++) {
                            if (currentWord.charAt(i) === letter) {
                                hiddenWord = window.Elemu.replaceChar(hiddenWord, i, letter);
                            }
                        }

                        window.Elemu.select(".hiddenWord", function (elem) {
                            elem.innerHTML = hiddenWord;
                        });
                    }

                    // Log output.
                    console.log("Pressed button:" + button);
                    console.log(event);
                    console.log("Selected letter:" + letter);

                    // Check if the player has lost.
                    if (window.Hangman.isShown()) {
                        // Disable all buttons.
                        disableButtons();

                        // Display gameover text.
                        var gameOver = window.Elemu.create("p", {
                            classList: ["red"],
                            text: "GAME OVER!"
                        });

                        leftLane.appendChild(gameOver);

                        var flavorText = window.Elemu.create("p", {
                            text: "Hangman is dead :("
                        });

                        leftLane.appendChild(flavorText);

                        var playAgain = window.Elemu.create("a", {
                            classList: ["underline"],
                            text: "Play again?",
                            attrs: {"href": ""}
                        });

                        leftLane.appendChild(playAgain);
                    }
                    else if (hiddenWord === currentWord) {
                        // Disable all buttons.
                        disableButtons();

                        // Let the player know he has won.
                        var winnersPraise = window.Elemu.create("p", {
                            classList: ["green"],
                            text: "CONGRATULATIONS!"
                        });

                        leftLane.appendChild(winnersPraise);

                        var winnersFlavorText = window.Elemu.create("p", {
                            text: "You've saved Hangman! :D"
                        });

                        leftLane.appendChild(winnersFlavorText);


                        var PlayAgain = window.Elemu.create("a", {
                            classList: ["underline"],
                            text: "Play again?",
                            attrs: {"href": ""}
                        });

                        leftLane.appendChild(PlayAgain);
                    }
                }
            });

            // Put button in li.
            liElem.appendChild(button);
            // Put li in list.
            listElem.appendChild(liElem);
        });

        // Create text-node for the pressed keys.
        var gameText = window.Elemu.create("div", {
            classList: ["gameText"]
        });
        // Add it to leftLane.
        leftLane.appendChild(gameText);

        var pressedText = window.Elemu.create("p", {
            classList: ["pressedKeysText"],
            text: "Used letters:"
        });

        gameText.appendChild(pressedText);

        var pressed = window.Elemu.create("p", {
            classList: ["pressedKeys"],
            text: "(--)"
        });

        gameText.appendChild(pressed);
    });

    // Declare and return public functions of the Game module.
    return {
        /**
         * Restart the game and pick a new random word.
         *
         * @returns void.
         */
        "start": function () {
            this.reset();

            window.Hangman.randWord();

            // Get the current word and use its length.
            var wordLength = window.Hangman.peek().length;
            for (var i = 0; i < wordLength; i++) {
                hiddenWord += "_";
            }

            // Display the hiddenWord.
            window.Elemu.select(".gameText", function (elem) {
                var wordToGuess = window.Elemu.create("p", {
                    classList: ["hiddenWordText"],
                    text: "Guess the word:"
                });

                elem.appendChild(wordToGuess);

                var hiddenWordElem = window.Elemu.create("p", {
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
            window.Elemu.select(".button", function (elem) {
                elem.classList.remove("selected");
            });

            window.Elemu.select(".pressedKeys", function (elem) {
                elem.innerHTML = "(--)";
            });

            // Reset array.
            pressedButtons = [];

            // Reset hangman.
            window.Hangman.hideAll();
        }
    };
})();
