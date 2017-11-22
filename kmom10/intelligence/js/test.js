window.Test = (function () {
	'use strict';

	var Test = {
		"tests": [],
		"currentTest": 0,

		/**
		* Function initiates all the subtests and saves them in the tests array.
		* @returns void.
		*/
		"init": function () {
			// Create the questions object.
			var questionTest = new Object(window.Questions);
			// Create questions for the questions test.
			questionTest.createQuestion(
				"Vad händer med ett russin om du lägger det i ett glas med Champagne?",
				["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
				"2. Det åker upp och ner"
			);
			questionTest.createQuestion(
				"Vilket land har ett skjutvapen avbildat på flaggan?",
				["1. Mocambique", "X. Nigeria", "2. Liberia"],
				"2. Liberia"
			);
			questionTest.createQuestion(
				"Vad är den romerska siffran för 100?",
				["1. M", "X. C", "2. D"],
				"X. C"
			);
			// Add questions to the tests array.
			this.tests.push(questionTest);

			// Add fizzbuzz test.
			this.tests.push(Object.create(window.FizzBuzz));

			// Add the memory test.
			this.tests.push(Object.create(window.Memory));
		},

		/**
		* Creates callbacks for all the different tests and distributes them
		* to their respective test.
		* @returns void.
		*/
		"start": function () {
			var that = this;
			// Create callback for the memory.js test.
			var memoryCallback = function () {
				var created = false;
				window.Elemu.select(".content", function (elem) {
					if (!created) {
						// Create buttonWrapper.
						var buttonWrapper = window.Elemu.create("div", {
							classList: ["exitbutton", "center"]
						});

						elem.appendChild(buttonWrapper);

						// Create button.
						var button = window.Elemu.create("button", {
							text: "Avsluta test",
							classList: ["startButton"]
						});

						buttonWrapper.appendChild(button);

						button.addEventListener("click", function () {
							// Clear .content.
							elem.innerHTML = "";

							// Thank the user.
							var paragraf = window.Elemu.create("p", {
								classList: ["center"],
								text: "Testet är slutfört! Tack för din medverkan."
							});

							elem.appendChild(paragraf);

							// Calculate points.
							var sum = 0;
							that.tests.forEach(function (test) {
								sum += test.getPoints();
							});

							var points = window.Elemu.create("h2", {
								classList: ["center"],
								text: "Din intelligens kvot: " + sum + " / 21"
							});

							elem.appendChild(points);
						});
					}
				});
			};

			// Create callback for the fizzbuzz.js test.
			var fizzbuzzCallback = function () {
				window.Elemu.select(".content", function (elem) {
					var button = window.Elemu.create("button", {
						text: "Nästa test!",
						classList: ["startButton"]
					});

					elem.appendChild(button);

					button.addEventListener("click", function () {
						// Remove the fizzbuzz test.
						window.Elemu.select(".content", function (elem) {
							elem.innerHTML = "";
						});
						// Start the next test.
						that.currentTest++;
						that.tests[that.currentTest].start(".content", memoryCallback);
					});
				});
			};

			// Create callback for the questions.js test.
			var questionsCallback = function () {
				// Remove anything remaining from the old test.
				window.Elemu.select(".content", function (content) {
					var nextButton = window.Elemu.create("button", {
						id: "next-question",
						classList: ["startButton"],
						text: "Nästa test!"
					});

					// Remove old question and display the next one.
					nextButton.addEventListener("click", function () {
						content.innerHTML="";
						// Start new test.
						that.currentTest++;
						that.tests[that.currentTest].start(".content", fizzbuzzCallback);
					});

					content.appendChild(nextButton);
				});
			};

			this.tests[this.currentTest].start(".content", questionsCallback);
		},

		/**
		* Calls the internal reset function for the currently active test.
		* This allows the user to do the test again, (cheating).
		* @returns void.
		*/
		"reset": function () {
			window.Elemu.select(".content", function (content) {
				content.innerHTML = "";
			});
			this.tests[this.currentTest].reset();
		}
	};

	return Test;
})();
