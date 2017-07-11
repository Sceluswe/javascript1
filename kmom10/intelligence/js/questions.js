window.Questions = (function () {
	// 1x2 module.

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
	* Remove a question from the DOM.
	* @question the DOM element to remove.
	* returns void.
	*/
	function removeQuestion(question) {
		if (question !== undefined) {
			while (question.firstChild) {
				question.removeChild(question.firstChild);
			}
		}
	}

	/**
	* Display a supplied DOM element inside the .content div.
	* @question dom-element, the dom element of the question to display.
	* @returns void.
	*/
	function displayNextQuestion(question) {
		// Remove the previous question.
		removeQuestion(questions[currentQuestion]);

		// Increase counter size.
		currentQuestion++;

		if (currentQuestion < questions.length) {
			// Change to the next question if there is one.
			displayQuestion(questions[currentQuestion]);
		}

		window.Elemu.select(".content", function (elem) {
			elem.appendChild(question);
		});

		console.log("Displaying NEXT question");
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
				if (index === correctAnswer) {
					console.log("Answered the question with: " + item);
				}

				if (currentQuestion < (questions.length -1)) {
					// Display question.
					displayNextQuestion(questions[currentQuestion]);
				}
			});

			questionDiv.appendChild(answerNode);
		});

		return questionDiv;
	}

	// Declare private attributes.
	// Create counter for the current question.
	var currentQuestion = 0;

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

	var Questions = {
		"start": function () {
			console.log(questions);
			console.log(questions[currentQuestion]);

			console.log(typeof questions[currentQuestion]);
			// Display first question.
			displayQuestion(questions[currentQuestion]);
		},
	};

	// Return object with public functionality.
	return Questions;
})();
