/**
 * Showing off how to display/hide parts of a SVG-image.
 */
window.Hangman = (function() {
    "use strict";

    var hangman = {

        // Get all elements as their id
        "partAsElement": {
            "hill":     document.getElementById('hang_hill'),
            "gallow":   document.getElementById('hang_construction'),
            "body":     document.getElementById('hang_body'),
            "rightarm": document.getElementById('hang_rightarm'),
            "leftarm":  document.getElementById('hang_leftarm'),
            "rightleg": document.getElementById('hang_rightleg'),
            "leftleg":  document.getElementById('hang_leftleg'),
            "rope":     document.getElementById('hang_rope'),
            "head":     document.getElementById('hang_head')
        },

        // Create an array with all valid parts
        "validParts": [
            "hill",
            "gallow",
            "body",
            "rightarm",
            "leftarm",
            "rightleg",
            "leftleg",
            "rope",
            "head"
        ],

        "shownParts": {
            "hill": false,
            "gallow": false,
            "body": false,
            "rightarm": false,
            "leftarm": false,
            "rightleg": false,
            "leftleg": false,
            "rope": false,
            "head": false
        },

        // Create an array with 5 words.
        "words": [
            "quality",
            "stability",
            "stars",
            "online",
            "collection"
        ],

        // The word the player must guess in order to win.
        "activeWord": undefined,

        /**
         * Check if part a valid part, writes error message to console if the part is invalid.
         *
         * @param string part Name of the part to check.
         *
         * @returns boolean true if valid part, else false.
         */
        "isValid": function (part) {

            if (this.validParts.indexOf(part) === -1) {
                console.log("The part is not valid: " + part);
                return false;
            }
            console.log("The part is valid: " + part);
            return true;

        },


        /**
         * Hide a part.
         *
         * @param string part Name of the part to hide.
         *
         * @returns void.
         */
        "hide": function (part) {

            if (this.isValid(part)) {
                console.log("Hiding part: " + part);
                this.partAsElement[part].style.display = "none";
                this.shownParts[part] = false;
            }

        },


        /**
         * Show a part.
         *
         * @param string part Name of the part to show.
         *
         * @returns void.
         */
        "show": function (part) {

            if (this.isValid(part)) {
                console.log("Showing part: " + part);
                this.partAsElement[part].style.display = "inline";
                this.shownParts[part] = true;
            }

        },

        "showNextPart": function () {
            // Loop through the shownParts array and display 1 more part.
            for (var property in this.shownParts) {
                if (this.shownParts.hasOwnProperty(property)) {
                    if (!this.shownParts[property]) {
                        console.log("property: " + property);
                        this.show(property);
                        break;
                    }
                }
            }
        },

        /**
         * Return the list of words.
         *
         * @returns array.
         */
        "wordList": function () {
            return this.words;
        },

        /**
         * Sets a random word from the array "words" as active, (the word to guess).
         */
        "randWord": function () {
            this.activeWord = this.words[Math.floor(Math.random()*this.words.length)];
        },

        /**
         * Returns the currently active word.
         *
         * @returns string.
         */
        "peek": function () {
            return this.activeWord;
        }
    };

    console.log("You can now use the hangman object as a part of the window-object. Try\n\nwindow.Hangman.hide('gallow')\nwindow.Hangman.show('gallow')\n\nHere are all the parts you can work on.");
    console.log(hangman.validParts);

    // Return the object to make it visible.
    return hangman;
})();
