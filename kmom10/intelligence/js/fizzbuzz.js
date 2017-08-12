window.FizzBuzz = (function() {
	// A module with a fizzbuzz question.
	var question = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17";
	var answers = ["18", "Fizz", "Buzz", "FizzBuzz"];
	var answered = false;
	var correctAnswer = "Fizz";
	var points = 0;

	/**
	* Returns a random integer between min (inclusive) and max (inclusive)
	* Using Math.round() will give you a non-uniform distribution!
	*/
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function fizzbuzzNumber(number) {
		if (typeof number === "number") {
			var result = number;

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

		return result;
	}

	/**
	* Returns an object with a fizzbuzz sequence and the answer to the next
	* number in that sequence.
	*/
	function fizzbuzzQuestion() {
		// Get a random number.
		var randomNumber = getRandomInt(1, 20);

		var sequence = "";
		// Calculate the fizzbuzz sequence of the coming 5 numbers.
		for (var i = randomNumber; i < randomNumber + 5; i++) {
			sequence += fizzbuzzNumber(i) + ", ";
		}

		return {
			sequence: sequence + "?",
			answer: fizzbuzzNumber(randomNumber + 5)
		}
	}

	var FizzBuzz = {
		"getPoints": function () {
			return points;
		},

		"start": function (parentNode, callbackParam) {
			// Check if fizzbuzz works.
			console.log(fizzbuzzQuestion());
			// Start the test.
			window.Elemu.select(parentNode, function (parentElem) {
				var wrapper = window.Elemu.create("div", {
					classList: ["currentQuestion"]
				});

				// Add it to the parentNode.
				parentElem.appendChild(wrapper);

				var sequence = window.Elemu.create("p", {
					text: question,
					classList: ["question"]
				});

				wrapper.appendChild(sequence);

				answers.forEach(function (item, index, array) {
					var button = window.Elemu.create("button", {
						id: "answer" + index,
						classList: ["answer"],
						text: item
					});

					button.addEventListener("click", function () {
						if (!answered) {
							if (item === correctAnswer) {
								points = 3;
								console.log("Points gained: " + points);
							}
							else {
								button.classList.add("buttonRed");
							}

							answered = true;

							// Remove all buttons and the answer..
							window.Elemu.select(".question", function (elem) {
								elem.classList.add("selected");
							});

							window.Elemu.select(".answer", function (elem) {
								elem.classList.add("selected");

								if (elem.textContent === correctAnswer) {
									elem.classList.add("buttonGreen");
								}
							});

							// Display the correct answer.
							var displayAnswer = window.Elemu.create("p", {
								text: "The correct answer was: " + correctAnswer,
								classList: ["green"]
							});

							wrapper.appendChild(displayAnswer);

							console.log("Clicked");
						}
					});

					wrapper.appendChild(button);
				});
			});
		},

		"reset": function () {
			// Reset the test and do it over again.
		}
	};
	return FizzBuzz;
}());
