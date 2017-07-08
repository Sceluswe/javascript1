window.Questions = (function () {
	// 1x2 module.

	/**
	* Displays a question in the DOM by creating the DOM-elements.
	* @question string, the question to answer.
	* @answers array of strings, the 1x2 answers to the question.
	* @correctAnswer, the index of the correct answer in the answers array.
	*/
	function createQuestion(question, answers, correctAnswer) {
		window.Elemu.select(".content", function (elem) {
			var questionDiv = window.Elemu.create("div", {
				classList: ["currentQuestion"]
			});
			//  Create question node.
			var questionNode = window.Elemu.create("p", {
				classList: ["question"],
				text: question
			});

			elem.appendChild(questionNode);

			answers.forEach(function (item, index) {
				var answerNode = window.Elemu.create("p", {
					classList: [("answer" + index)],
					text: item
				});

				elem.appendChild(answerNode);
			});

		});
	}

	return {
		"start": function () {
			createQuestion(
					"Vad händer med ett russin om du lägger det i ett glas med Champagne?",
					["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
					2
					);
		},
	};
})();
