window.Questions = (function () {
	// 1x2 module.

	/**
	* Returns a DOM-node question.
	* @question string, the question to answer.
	* @answers array of strings, the 1x2 answers to the question.
	* @correctAnswer, the index of the correct answer in the answers array.
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
			var answerNode = window.Elemu.create("p", {
				classList: [("answer" + index)],
				text: item
			});

			questionDiv.appendChild(answerNode);
		});

		return questionDiv;
	}

	function displayQuestion(question) {
		window.Elemu.select(".content", function (elem) {
			elem.appendChild(question);
		});
	}
	// Create questions and make them private.
	var questions = [
		createQuestion(
			"Vad händer med ett russin om du lägger det i ett glas med Champagne?",
			["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
			2
		),
		// createQuestion(
			// "V"
		// )
	];

	return {
		"start": function () {
			// Use the display function to display the question in the DOM.
			displayQuestion(questions[0]);
		},
	};
})();
