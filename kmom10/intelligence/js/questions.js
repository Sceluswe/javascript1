window.Questions = (function () {
	'use strict';
	// 1x2 module.

	// Declare private attributes.
	var nrOfPoints = 0;
	// Create counter for the current question.
	var currentQuestion = 0;

	// Register the parentNode to write questions to.
	var parentNode = "";

	// The follow up function to be run when all questions are answered.
	var myCallback = function () {
		// Empty by default.
		console.log("myCallback is empty");
	}

	/**
	* Display a supplied DOM element inside the .content div.
	* @question dom-element, the dom element of the question to display.
	* @returns void.
	*/
	function displayQuestion(parentNode, question) {
		console.log("starting displayQuestion");

		window.Elemu.select(parentNode, function (elem) {
			console.log("attempting to display: " + typeof question);
			elem.appendChild(question);
		});

		console.log("exiting displayQuestion");
	}

	/**
	* Display a supplied DOM element inside the .content div.
	* @returns void.
	*/
	function displayNextQuestion() {
		console.log("start displayNextQuestion()");

		// Remove the previous question.
		window.Elemu.remove(questions[currentQuestion]);

		if (currentQuestion < questions.length) {
			// Save the question to be displayed for readability.
			var question = questions[++currentQuestion];

			// Change to the next question if there is one.
			displayQuestion(parentNode, question);

			window.Elemu.select(".content", function (elem) {
				elem.appendChild(question);
			});
		}

		console.log("exit displayNextQuestion()");
	}

	/**
	* Returns a DOM-node question.
	* @question string, the question to answer.
	* @answers array of strings, the 1x2 answers to the question.
	* @correctAnswer, the index of the correct answer in the answers array.
	* @returns void.
	*/
	function createQuestion(question, answers, correctAnswer) {
		var questionDiv = window.Elemu.create("div", {
			classList: ["currentQuestion"]
		});
		//  Create question node.
		var questionNode = window.Elemu.create("p", {
			classList: ["question"],
			text: question
		});

		questionDiv.appendChild(questionNode);

		answers.forEach(function (item, index) {
			var answerNode = window.Elemu.create("button", {
				id: "answer" + index,
				classList: ["answer"],
				text: item
			});

			// Add eventListener to the node.
			answerNode.addEventListener("click", function () {
				if (index === correctAnswer) {
					nrOfPoints += 5;
					console.log("Answered the question with: " + item);
					console.log("You earned 5 points, you now have: " + nrOfPoints);
				}

				if (currentQuestion < (questions.length -1)) {
					// Display the next question.
					displayNextQuestion();
				}
				else if (currentQuestion === (questions.length -1)) {
					window.Elemu.remove(questions[currentQuestion]);
					// Execute the user provided callback (if any).
					myCallback();
				}
			});

			questionDiv.appendChild(answerNode);
		});

		return questionDiv;
	}

	// Create Questions attributes.
	var questions = [
		createQuestion(
			"Vad händer med ett russin om du lägger det i ett glas med Champagne?",
			["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
			2
		),
		createQuestion(
			"Vilket land har ett skjutvapen avbildat på flaggan?",
			["1. Mocambique", "X. Nigeria", "2. Liberia"],
			0
		),
		createQuestion(
			"Vad är den romerska siffran för 100?",
			["1. M", "X. C", "2. D"],
			1
		)
	];

	// Create object module with the public functions for the object.
	var Questions = {
		nrOfQuestions: questions.length,
		/**
		* Returns the number of points the user has acquired.
		* Returns a number.
		*/
		"getPoints": function () {
			return nrOfPoints;
		},

		/**
		* Starts the test and creates the first question in the DOM.
		* @param, parentNodeParam, the HTML node the question should be displayed in.
		* @param, callbackParam, the callback to be executed when the last question is answered.
		*/
		"start": function (parentNodeParam, callbackParam) {
			// Set the private variable callback if the param is defined..
			console.log("typeof callbackParam:" + typeof callbackParam);
			if (typeof callbackParam !== "undefined") {
				myCallback = callbackParam;
				console.log("OBS: Setting myCallback");
			}

			// Set the parentNode all questions will be written to.
			parentNode = parentNodeParam;

			// Save currentQuestion for readability.
			var question = questions[currentQuestion];

			console.log(question);
			console.log(typeof question);

			// Display first question.
			displayQuestion(parentNode, question);
		},

		/**
		* Resets the test and allows the user to start over from the beginning.
		* Mainly used for bugtesting.
		*/
		"reset": function () {
			// Reset everything in the subtest and start over.
			window.Elemu.remove(questions[currentQuestion]);
			nrOfPoints = 0;
			currentQuestion = 0;
			displayQuestion(questions[currentQuestion]);
		}
	};

	// Return object with public functionality.
	return Questions;
})();
