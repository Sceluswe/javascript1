window.FizzBuzz = (function() {
	'use strict';
	/**
	* Returns a random integer between min (inclusive) and max (inclusive)
	* @param min, the minmum value that can be returned.
	* @param max, the largest value that can be returned.
	* @returns integer, randomized value.
	*/
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	* Fizzbuzzes the provided number.
	* Returns a string with either a fizzbuzz value or the number..
	* @param number, the number to fizzbuzz.
	* @returns string, always returns a string even if the number is not fizzbuzzed.
	*/
	function fizzbuzzNumber(number) {
		if (typeof number === "number") {
			var result = "" + number;

			if ((number % 3 === 0) && (number % 5 === 0)) {
				result = "FizzBuzz";
			}
			else if (number % 3 === 0) {
				result = "Fizz";
			}
			else if (number % 5 === 0) {
				result = "Buzz";
			}

			return result;
		}
		else {
			console.log("fizzbuzzNumber() MUST RECEIVE A NUMBER");
			console.log("Received: " + typeof number);
		}
	}

	/**
	* Returns a fizzbuzz question. The number after the sequence is
	* the correct answer.
	* @param, sequenceLength, the length of the fizzbuzz sequence.
	* @returns Question.js object, contains fizzbuzz sequence, possible answers and correctAnswer.
	*/
	function fizzbuzzQuestion(sequenceLength) {
		// Get a random number.
		var randomNumber = getRandomInt(1, 20);
		var finalNumber = randomNumber + sequenceLength;

		var sequence = "";
		// Calculate the fizzbuzz sequence of the coming 5 numbers.
		for (var i = randomNumber; i < randomNumber + sequenceLength; i++) {
			sequence += fizzbuzzNumber(i) + ", ";
		}

		var question = Object(window.Question);
		question.initialize(
			sequence + "?",
			[("" + finalNumber), "Fizz", "Buzz", "FizzBuzz"],
			fizzbuzzNumber(finalNumber)
		);

		return question;
	}

	var FizzBuzz = {
		// A module with a fizzbuzz question.
		"nrOfPoints": 0,
		"fizzbuzzQuestion": undefined,
		"parentNode": undefined,

		/**
		* Returns the number of points the user has acquired.
		* @returns a number.
		*/
		"getPoints": function () {
			return this.nrOfPoints;
		},

		/**
		* Starts the test and creates the fizzbuzz question in the DOM.
		* @param, parentNodeParam, the HTML node the question should be displayed in.
		* @param, callbackParam, the callback to be executed when the question is answered.
		* @returns void.
		*/
		"start": function (parentNode, callbackParam) {
			this.parentNode = parentNode;
			// Create the question.
			this.fizzbuzzQuestion = fizzbuzzQuestion(5);

			var that = this;
			this.fizzbuzzQuestion.setCallback(function () {
				callbackParam();

				if (that.fizzbuzzQuestion.answered) {
					that.nrOfPoints += 3;
				}
			});

			window.Elemu.select(parentNode, function (elem) {
				elem.appendChild(that.fizzbuzzQuestion.getWrapper());
			});
		},

		/**
		* Resets the test and allows the user to start over from the beginning.
		* Mainly used for bugtesting or cheating.
		* @returns void.
		*/
		"reset": function () {
			this.fizzbuzzQuestion.reset();
			this.nrOfPoints = 0;

			var that = this;
			window.Elemu.select(this.parentNode, function (elem) {
				elem.appendChild(that.fizzbuzzQuestion.getWrapper());
			});
		}
	};

	return FizzBuzz;
}());
