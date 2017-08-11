window.FizzBuzz = (function() {
	// A module with a fizzbuzz question.
	var question = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17";
	var answers = ["18", "Fizz", "Buzz", "FizzBuzz"];
	var answered = false;
	var correctAnswer = "Fizz";
	var points = 0;

	var fizzbuzz = {
		"getPoints": function () {
			return points;
		},

		"start": function (parentNode, callbackParam) {
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
	return fizzbuzz;
}());
