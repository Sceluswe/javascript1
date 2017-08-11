window.FizzBuzz = (function() {
	// A module with a fizzbuzz question.
	var question = "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17";
	var answers = ["18", "Fizz", "Buzz", "FizzBuzz"];
	var correctAnswer = "Fizz";

	var fizzbuzz = {
		"start": function (parentNode, callbackParam) {
			// Start the test.
			window.Elemu.select(parentNode, function (parentElem) {
				var wrapper = window.Elemu.create("div", {
					classList: ["currentQuestion"]
				});

				// Add it to the parentNode.
				parentElem.appendChild(wrapper);

				var sequence = window.Elemu.create("p", {
					text: question
				});

				wrapper.appendChild(sequence);

				answers.forEach(function (item, index, array) {
					var button = window.Elemu.create("button", {
						id: "answer" + index,
						classList: ["answer"],
						text: item
					});
				});
			});
		},

		"reset": function () {
			// Reset the test and do it over again.
		}
	};
	return fizzbuzz;
}());
