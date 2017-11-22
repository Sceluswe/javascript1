window.Questions = (function () {
	'use strict';
	// 1x2 module.


	var Questions = {
		// Create Questions.
		"questions": [],
		// Declare private attributes.
		"nrOfPoints": 0,
		// Create counter for the current question.
		"currentQuestion": 0,

		"parentNode": undefined,
		"myCallback": function () {
			if (typeof this.parentNode !== "undefined") {
				window.Elemu.select(this.parentNode, function (parent) {
					var displayText = window.Elemu.create("p", {text: "Sista frågan besvarad"});
					parent.appendChild(displayText);
				});
			}
		},

		/**
		* Adds a question object to the questions array.
		* @question string, the question to answer.
		* @answers array of strings, the 1x2 answers to the question.
		* @correctAnswer, the index of the correct answer in the answers array.
		* @returns void.
		*/
		"createQuestion": function (question, answers, correctAnswer) {
			var questionObj = Object.create(window.Question);
			questionObj.initialize(question, answers, correctAnswer);

			var that = this;
			questionObj.setCallback(function () {
				// Award the player points for answering correctly.
				if (questionObj.getUserAnswer()) {
					that.nrOfPoints += 3;
				}

				// Display button for the next question.
				if (that.currentQuestion < (that.questions.length - 1)) {
					var nextButton = window.Elemu.create("button", {
						id: "next-question",
						classList: ["startButton"],
						text: "Nästa fråga"
					});

					// Remove old question and display the next one.
					nextButton.addEventListener("click", function () {
						window.Elemu.remove(questionObj.getWrapper());
						window.Elemu.remove(nextButton);

						that.currentQuestion++;

						window.Elemu.select(that.parentNode, function (elem) {
							elem.appendChild(that.questions[that.currentQuestion].getWrapper());
						});
					});

					window.Elemu.select(that.parentNode, function (elem) {
						elem.appendChild(nextButton);
					});
				}
				else {
					// If there are no more questions end the test.
					that.myCallback();
				}
			});
			// Add question to array.
			this.questions.push(questionObj);
		},

		/**
		* Returns the number of points the user has acquired.
		* @returns an integer, number.
		*/
		"getPoints": function () {
			return this.nrOfPoints;
		},

		/**
		* Starts the test and creates the first question in the DOM.
		* @param, parentNode, the HTML node the question(s) should be displayed in.
		* @param, callbackParam, the callback to be executed when the last question is answered.
		* @returns void.
		*/
		"start": function (parentNode, callbackParam) {
			this.parentNode = parentNode;
			this.myCallback = callbackParam;

			var that = this;
			// Display first question.
			window.Elemu.select(parentNode, function (elem) {
				var question = that.questions[that.currentQuestion];
				elem.appendChild(question.getWrapper());
			});
		},

		/**
		* Resets the test and allows the user to start over from the beginning.
		* Mainly used for bugtesting.
		* @returns void.
		*/
		"reset": function () {
			// Reset everything in the subtest and start over.
			this.nrOfPoints = 0;
			this.currentQuestion = 0;

			this.questions.forEach(function (question)  {
				question.reset();
			});

			var that = this;
			window.Elemu.select(that.parentNode, function (elem) {
				elem.innerHTML = "";
				var question = that.questions[that.currentQuestion];
				elem.appendChild(question.getWrapper());
			});
		}
	};

	// Return object with public functionality.
	return Questions;
})();
