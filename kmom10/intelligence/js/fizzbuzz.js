window.FizzBuzz = (function() {
	'use strict';
	// A module with a fizzbuzz question.
	var answered = false;
	var callback = false;
	var points = 0;

	/**
	* Returns a random integer between min (inclusive) and max (inclusive)
	* Using Math.round() will give you a non-uniform distribution!
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
		}
		else {
			console.log("fizzbuzzNumber() MUST RECEIVE A NUMBER");
			console.log("Received: " + typeof number);
		}

		return result;
	}

	/**
	* Returns a fizzbuzz question. The number after the sequence is
	* the correct answer.
	* @param, sequenceLength, the length of the fizzbuzz sequence.
	* @returns object, contains fizzbuzz sequence, possible answers and correctAnswer.
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

		return {
			sequence: sequence + "?",
			answers: [("" + finalNumber), "Fizz", "Buzz", "FizzBuzz"],
			correctAnswer: fizzbuzzNumber(finalNumber)
		}
	}

	var FizzBuzz = {
		/**
		* Returns the number of points the user has acquired.
		* @returns a number.
		*/
		"getPoints": function () {
			return points;
		},

		/**
		* Starts the test and creates the fizzbuzz question in the DOM.
		* @param, parentNodeParam, the HTML node the question should be displayed in.
		* @param, callbackParam, the callback to be executed when the question is answered.
		*/
		"start": function (parentNode, callbackParam) {
			// Create the question.
			var currentQuestion = fizzbuzzQuestion(5);

			// Start the test.
			window.Elemu.select(parentNode, function (parentElem) {
				var wrapper = window.Elemu.create("div", {
					classList: ["currentQuestion"]
				});

				// Add the wrapper to the parentNode.
				parentElem.appendChild(wrapper);

				var explanation = window.Elemu.create("p", {
					text: "Gissa nästa ord eller nummer i ordningen.",
				});

				wrapper.appendChild(explanation);

				var sequence = window.Elemu.create("p", {
					text: currentQuestion.sequence,
					classList: ["question"]
				});

				wrapper.appendChild(sequence);

				currentQuestion.answers.forEach(function (item, index, array) {
					var button = window.Elemu.create("button", {
						id: "answer" + index,
						classList: ["answer"],
						text: item
					});

					button.addEventListener("click", function () {
						if (!answered) {
							answered = true;

							// Hide the question.
							window.Elemu.select(".question", function (elem) {
								elem.classList.add("selected");
							});

							// Highlight the correct answer with green.
							window.Elemu.select(".answer", function (elem) {
								// Hide all buttons.
								elem.classList.add("selected");
								if (elem.textContent === currentQuestion.correctAnswer) {
									elem.classList.add("buttonGreen");
								}
							});

							// Check if the user was right or wrong.
							if (item === currentQuestion.correctAnswer) {
								points = 3;
								console.log("Points gained: " + points);
							}
							else {
								// If the user is wrong, highlight the user answer with red.
								button.classList.add("buttonRed");
							}

							// Display the correct answer again for clarity.
							var displayAnswer = window.Elemu.create("p", {
								text: "The correct answer was: " + currentQuestion.correctAnswer,
								classList: ["correctAnswer", "green"]
							});

							wrapper.appendChild(displayAnswer);

							console.log("Clicked");

							if (!callback) {
								callbackParam();
								callback = true;
							}
						}
					});

					wrapper.appendChild(button);
				});
			});
		},

		/**
		* Resets the test and allows the user to start over from the beginning.
		* Mainly used for bugtesting.
		*/
		"reset": function () {
			// Reset the test and do it over again.
			window.Elemu.select(".question", function (elem) {
				elem.classList.remove("selected");
			});

			window.Elemu.select(".answer", function (elem) {
				elem.classList.remove("selected");
				elem.classList.remove("buttonGreen");
				elem.classList.remove("buttonRed");
			});

			window.Elemu.select(".correctAnswer", function (elem) {
				window.Elemu.remove(elem);
			});

			points = 0;
			answered = false;
		}
	};

	return FizzBuzz;
}());
