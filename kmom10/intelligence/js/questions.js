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

		// The follow up function to be run when all questions are answered.
		"myCallback": function () {
			// Empty by default.
			console.log("myCallback is empty");
		},

		/**
		* Adds a question object (a DOM node) to the questions array.
		* @question string, the question to answer.
		* @answers array of strings, the 1x2 answers to the question.
		* @correctAnswer, the index of the correct answer in the answers array.
		*/
		"createQuestion": function (question, answers, correctAnswer) {
			var questionDiv = window.Elemu.create("div", {
				classList: ["currentQuestion"]
			});
			//  Create question node.
			var questionNode = window.Elemu.create("p", {
				classList: ["question"],
				text: question
			});

			questionDiv.appendChild(questionNode);

			var that = this;
			answers.forEach(function (item, index) {
				var answerNode = window.Elemu.create("button", {
					id: "answer" + index,
					classList: ["answer"],
					text: item
				});

				// Add eventListener to the node.
				console.log(that.currentQuestion);
				answerNode.addEventListener("click", function () {
					if (index === correctAnswer) {
						that.nrOfPoints += 5;
						console.log("Answered the question with: " + item);
						console.log("You earned 5 points, you now have: " + that.nrOfPoints);
					}

					if (that.currentQuestion < (that.questions.length -1 )) {
						// Display the next question.
						that.displayNextQuestion();
					}
					else if (that.currentQuestion === (that.questions.length -1)) {
						window.Elemu.remove(that.questions[that.currentQuestion]);
						// Execute the user provided callback (if any).
						that.myCallback();
					}
				});

				questionDiv.appendChild(answerNode);
			});

			// Add question node to the question array.
			this.questions.push(questionDiv);
		},


		/**
		* Display a supplied DOM element inside the .content div.
		* @question dom-element, the dom element of the question to display.
		* @returns void.
		*/
		"displayQuestion": function (parentNode, question) {
			console.log("starting displayQuestion");

			window.Elemu.select(parentNode, function (elem) {
				console.log("attempting to display: " + typeof question);
				elem.appendChild(question);
			});

			console.log("exiting displayQuestion");
		},

		/**
		* Display a supplied DOM element inside the .content div.
		* @returns void.
		*/
		"displayNextQuestion": function () {
			console.log("start displayNextQuestion()");
			// Get parent from the previous question.
			var parentNode = this.questions[this.currentQuestion].parentNode;

			// Remove the previous question from the DOM.
			window.Elemu.remove(this.questions[this.currentQuestion]);

			if (this.currentQuestion < this.questions.length) {
				// Move to the next question.
				this.currentQuestion++;

				// Display the new question in the DOM.
				parentNode.appendChild(this.questions[this.currentQuestion]);
			}

			console.log("exit displayNextQuestion()");
		},

		/**
		* Returns the number of points the user has acquired.
		* Returns a number.
		*/
		"getPoints": function () {
			return this.nrOfPoints;
		},

		/**
		* Starts the test and creates the first question in the DOM.
		* @param, parentNode, the HTML node the question should be displayed in.
		* @param, callbackParam, the callback to be executed when the last question is answered.
		*/
		"start": function (parentNode, callbackParam) {
			// Set the private variable callback if the param is defined..
			console.log("typeof callbackParam:" + typeof callbackParam);
			if (typeof callbackParam !== "undefined") {
				this.myCallback = callbackParam;
				console.log("OBS: Setting myCallback");
			}

			// Save currentQuestion for readability.
			var question = this.questions[this.currentQuestion];

			console.log(question);
			console.log(typeof question);

			// Display first question.
			this.displayQuestion(parentNode, question);
		},

		/**
		* Resets the test and allows the user to start over from the beginning.
		* Mainly used for bugtesting.
		*/
		"reset": function () {
			// Reset everything in the subtest and start over.
			window.Elemu.remove(this.questions[this.currentQuestion]);
			this.nrOfPoints = 0;
			this.currentQuestion = 0;
			this.displayQuestion(this.questions[this.currentQuestion]);
		}
	};

	// Return object with public functionality.
	return Questions;
})();
