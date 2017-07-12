window.Questions = (function () {
	// 1x2 module.

	// Declare private attributes.
	var nrOfPoints = 0;
	// Create counter for the current question.
	var currentQuestion = 0;

	/**
	* Display a supplied DOM element inside the .content div.
	* @question dom-element, the dom element of the question to display.
	* @returns void.
	*/
	function displayQuestion(question) {
		console.log("starting displayQuestion");

		window.Elemu.select(".content", function (elem) {
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
			displayQuestion(question);

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
				classList: [("answer")],
				text: item
			});

			// Add eventListener to the node.
			answerNode.addEventListener("click", function () {
				if (index === correctAnswer && (nrOfPoints < 15)) {
					nrOfPoints += 5;
					console.log("Answered the question with: " + item);
					console.log("You earned 5 points, you now have: " + nrOfPoints);
				}

				if (currentQuestion < (questions.length -1)) {
					// Display question.
					displayNextQuestion();
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
		"getPoints": function () {
			return nrOfPoints;
		},

		"start": function () {
			// Save currentQuestion for readability.
			var question = questions[currentQuestion];

			console.log(question);
			console.log(typeof question);

			// Display first question.
			displayQuestion(question);
		},

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
