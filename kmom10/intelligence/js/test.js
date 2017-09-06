window.Test = (function () {
	'use strict';

	var tempTest = {
		"start": function (parentNode, callbackParam) {
			console.log("my parentNode: " + parentNode);
			callbackParam();
		}
	};

	var Test = {
		"tests": [],
		"currentTest": 0,

		/**
		* Function initiates all the subtests and saves them in the tests array.
		* @returns void.
		*/
		"init": function () {
			// Create the questions object.
			var questionTest = Object.create(window.Questions);
			// Create questions for the questions test.
			questionTest.createQuestion(
				"Vad händer med ett russin om du lägger det i ett glas med Champagne?",
				["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
				2
			);
			questionTest.createQuestion(
				"Vilket land har ett skjutvapen avbildat på flaggan?",
				["1. Mocambique", "X. Nigeria", "2. Liberia"],
				0
			);
			questionTest.createQuestion(
				"Vad är den romerska siffran för 100?",
				["1. M", "X. C", "2. D"],
				1
			);
			// Add questions to the tests array.
			this.tests.push(questionTest);

			// Add fizzbuzz test.
			this.tests.push(Object.create(window.FizzBuzz));

			// Add the memory test.
			this.tests.push(Object.create(window.Memory));
			this.currentTest = 2;

			//
			// // Create a second questions object just for testing.
			// var questions2 = Object.create(window.Questions);
			// questions2.createQuestion(
			// 	"Vad händer med ett russin om du lägger det i ett glas med Champagne?",
			// 	["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
			// 	2
			// );
			// questions2.createQuestion(
			// 	"Vilket land har ett skjutvapen avbildat på flaggan?",
			// 	["1. Mocambique", "X. Nigeria", "2. Liberia"],
			// 	0
			// );
			// questions2.createQuestion(
			// 	"Vad är den romerska siffran för 100?",
			// 	["1. M", "X. C", "2. D"],
			// 	1
			// );
			// // Add questions2 to the tests array.
			// this.tests.push(questions2);
		},

		/**
		* Creates callbacks for all the different tests and distributes them
		* to their respective test.
		* @returns void.
		*/
		"start": function () {
			var that = this;

			var callback1 = function () {
				window.Elemu.select(".content", function (elem) {
					elem.innerHTML = "<p>Hej</p>";
					console.log("Being silly with callback");
				});
			}

			// Create callback for the memory.js test.
			// Create callback for the fizzbuzz.js test.
			var fizzbuzzCallback = function () {
				window.Elemu.select(".content", function (elem) {
					var button = window.Elemu.create("button", {
						text: "Go to the next test.",
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
						that.tests[that.currentTest].start(".content", callback1);
					});
				});
			}

			// Create callback for the questions.js test.
			var questionsCallback = function () {
				that.currentTest++;
				console.log(that.currentTest);
				that.tests[that.currentTest].start(".content", fizzbuzzCallback);
			}

			this.tests[this.currentTest].start(".content", questionsCallback);
		},

		/**
		* Calls the internal reset function for the currently active test.
		* This allows the user to do the test again, (cheating).
		* @returns void.
		*/
		"reset": function () {
			tests[this.currentTest].reset();
		}
	};

	return Test;
})();
