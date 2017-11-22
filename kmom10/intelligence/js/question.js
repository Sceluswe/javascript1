window.Question = (function () {
	"use strict";

	/*
	* Creates an eventListener for each answer to each question.
	* @param answer, the node to receive the eventListener.
	* @param questionObj, the object containing all the questions data.
	* @returns void.
	*/
	function createEventListener(answer, questionObj) {
		answer.addEventListener("click", function () {
			if (!questionObj.answered) {
				questionObj.answered = true;

				// Hide the question.
				questionObj.questionNode.classList.add("selected");

				questionObj.displayAnswer();

				if (answer.textContent === questionObj.correctAnswer){
					questionObj.userAnswer = true;
				}
				else {
					// If the user is wrong, highlight the user answer with red.
					answer.classList.add("buttonRed");
				}

				// Execute user callback.
				questionObj.callback();
			}
		});
	}

	return {
		wrapperNode: undefined,
		questionNode: undefined,
		answerNodes: undefined,
		correctAnswer: undefined,
		// Used to determine if the user was right or not.
		userAnswer: false,
		answered: false,

		callback: function () {
			console.log("Called undefined callback");
		},

		/**
		* Initializes a question object with the provided values.
		* @param question, string containing the question.
		* @param answers, array containing the different answers.
		* @param correctAnswer, a string indicating which answer is the correct one.
		* @returns void.
		*/
		"initialize": function (question, answers, correctAnswer) {
			this.answerNodes = [];
			this.questionNode = window.Elemu.create("p", {
				id: "question",
				text: question,
			});

			var that = this;
			answers.forEach(function (answer) {
				var answerNode = window.Elemu.create("button", {
					id: "answer",
					classList: ["answer"],
					text: answer
				});

				that.answerNodes.push(answerNode);
			});

			this.correctAnswer = answers[correctAnswer];
		},

		/**
		* Makes the other answers unclickable and displays the correct answer.
		* Also displays the users incorrect answer (if it was incorrect).
		* @returns void.
		*/
		"displayAnswer": function () {
			var that = this;
			// Highlight the correct answer with green.
			this.answerNodes.forEach(function (answer) {
				// Make the answers unclickable.
				answer.classList.add("selected");

				if (answer.textContent === that.correctAnswer) {
					answer.classList.add("buttonGreen");
				}
			});

			// Display the correct answer again for clarity.
			var displayAnswer = window.Elemu.create("p", {
				id: "correctAnswer",
				text: "Det rätta svaret var: \"" + this.correctAnswer + "\"",
				classList: ["correctAnswer", "green"]
			});

			window.Elemu.select(("#question-wrapper"), function (elem) {
				elem.appendChild(displayAnswer);
			});
		},

		/**
		* Make the answers clickable again.
		* @returns void.
		*/
		"hideAnswer": function () {
			// Remove the highlight.
			window.Elemu.select(("#answer"), function (elem) {
				// Make the answers unclickable.
				elem.classList.remove("selected");

				if (elem.textContent === this.correctAnswer) {
					elem.classList.remove("buttonGreen");
				}
			});

			window.Elemu.select(("#correctAnswer"), function (elem) {
				window.Elemu.remove(elem);
			});

			this.answered = false;
		},

		/**
		* Creates and returns the question (with answers) wrapped in a div.
		* @param callback, a callback function to be executed when the question is answered.
		* @returns DOM node.
		*/
		"getWrapper": function () {
			var wrapper;

			if (typeof this.wrapperNode === "undefined") {
				wrapper = window.Elemu.create("div", {
					id: "question-wrapper"
				});

				wrapper.appendChild(this.questionNode);

				var that = this;
				this.answerNodes.forEach(function (answer) {
					createEventListener(answer, that);

					wrapper.appendChild(answer);
				});

				// Save wrapper node.
				this.wrapperNode = wrapper;
			}
			else {
				wrapper = this.wrapperNode;
			}

			return wrapper;
		},

		"setCallback": function (callback) {
			this.callback = callback;
		},

		/**
		* Returns true if the player answered correctly.
		* @returns boolean.
		*/
		"getUserAnswer": function () {
			return this.userAnswer;
		}
	};
})();
