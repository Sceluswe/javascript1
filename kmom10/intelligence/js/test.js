window.Test = (function () {
	'use strict';

	var Test = {
		"tests": [],
		"currentTest": 0,

		/**
		* Function initiates all the subtests.
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

			// // Add fizzbuzz test.
			// this.tests.push(Object.create(window.FizzBuzz));
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
		*/
		"start": function () {
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

			// tests[this.currentTest].start(".content", callback);
			this.tests[this.currentTest].start(".content", questionsCallback);
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
