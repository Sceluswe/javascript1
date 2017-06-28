(function () {
    "use strict";

    // Start gameloop.
    var gameloop = true;

    // while (gameloop) {
        // Get a word from the hangman module.
        var gameWord = Hangman.peek();

        // Check if any button has been pressed.
        if (Game.getPressedCounter() > 0) {
            // Get pressed letters.
            var pressedLetters = Game.getPressedButtons();

            // Check if the pressed letters exist in gameWord.
            pressedLetters.forEach(function (item, index, array) {
                if (gameWord.indexOf(item)) {
                    console.log("Found: " + item); 
                }
            });
        }
    // }
})();
