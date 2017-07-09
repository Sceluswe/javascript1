window.Questions = (function () {
	// 1x2 module.

	function removeQuestion(question) {
		// Remove all children of the question.
		// while (question.firstChild) {
			// question.removeChild(question.firstChild);
		// }
		question.remove();
	}

	/*
	* Display a supplied DOM element inside the .content div.
	* @question dom-element, the dom element of the question to display.
	* @returns void.
	*/
	function displayQuestion(question) {
		window.Elemu.select(".content", function (elem) {
			elem.appendChild(question);
		});

		console.log("Displaying question");
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
				// Remove the previous question.
				removeQuestion(questions[currentQuestion]);

				// Increase counter size.
				currentQuestion++;

				if (currentQuestion < questions.length) {
					// Change to the next question if there is one.
					displayQuestion(questions[currentQuestion]);
				}

				console.log("Answered the question with: " + item);
			});

			questionDiv.appendChild(answerNode);
		});

		return questionDiv;
	}

	// Create questions and make them private.
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
		),
	];

	var currentQuestion = 0;

	// Return object with public functionality.
	return {
		"start": function () {
			// Use the display function to display the question in the DOM.
			displayQuestion(questions[0]);
		},
	};
})()
