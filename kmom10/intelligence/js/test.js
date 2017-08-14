window.Test = (function () {
	'use strict';
	// Add eventListener that starts the test if the user presses the button.
	window.Elemu.select(".startButton", function (elem) {
		elem.addEventListener("click", function () {
			// Remove welcome screen.
			window.Elemu.select(".content", function (elem) {
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}
			});
		});
	});

	var tests = [
		Object.create(window.Questions),
		Object.create(window.FizzBuzz),
		Object.create(window.Questions),
	];

	var Test = {
		"currentTest": 0,

		/**
		* Creates callbacks for all the different tests and distributes them
		* to their respective test.
		*/
		"startTest": function () {
			var that = this;

			var callback1 = function () {
				window.Elemu.select(".content", function (elem) {
					elem.innerHTML = "<p>Hej</p>";
					console.log("Being silly with callback");
				});
			}

			// Create callback for the fizzbuzz.js test.
			var fizzbuzzCallback = function () {
				window.Elemu.select(".content", function (elem) {
					var button = window.Elemu.create("button", {
						text: "Go to the next test.",
						classList: ["startButton"]
					});

					elem.appendChild(button);

					button.addEventListener("click", function () {
						// Start the next test.
						that.currentTest++;
						tests[that.currentTest].start(".content", callback1);
					});
				});
			}

			// Create callback for the questions.js test.
			var questionsCallback = function () {
				that.currentTest++;
				console.log(that.currentTest);
				tests[that.currentTest].start(".content", fizzbuzzCallback);
			}

			// tests[this.currentTest].start(".content", callback);
			tests[this.currentTest].start(".content", questionsCallback);
		},

		/**
		* Calls the internal reset function for the currently active test.
		* This allows the user to do the test again, (cheating).
		*/
		"reset": function () {
			tests[this.currentTest].reset();
		}
	};

	return Test;
})();
