window.Question = (function () {

	function createEventListener(button, that, callback) {
		button.addEventListener("click", function () {
			if (!that.answered) {
				that.answered = true;

				// Hide the question.
				window.Elemu.select(("#question" + that.myID), function (elem) {
					elem.classList.add("selected");
				});

				that.displayAnswer();

				if (button.textContent === that.correctAnswer){
					that.userAnswer = true;
				}
				else {
					// If the user is wrong, highlight the user answer with red.
					button.classList.add("buttonRed");
				}


				// Execute user callback.
				if (typeof callback !== "undefined") {
					callback();
				}
			}
		});
	}

	var staticID = 0;

	var question = {
		myID: undefined,
		question: undefined,
		answers: undefined,
		correctAnswer: undefined,
		// Used to determine if the user was right or not.
		userAnswer: false,
		answered: false,

		/**
		* Initializes a question object with the provided values.
		* @param question, string containing the question.
		* @param answers, array containing the different answers.
		* @param correctAnswer, a string indicating which answer is the correct one.
		* @returns void.
		*/
		"initialize": function (question, answers, correctAnswer) {
			// Set the unique ID for this question.
			this.myID = staticID;
			// Create new staticID for the next question.
			staticID += 1;

			this.question = question;
			this.answers = answers;
			this.correctAnswer = correctAnswer;
		},

		/**
		* Makes the other answers unclickable and displays the correct answer.
		* Also displays the users incorrect answer (if it was incorrect).
		* @returns void.
		*/
		"displayAnswer": function () {
			var that  = this;

			// Highlight the correct answer with green.
			window.Elemu.select(("#answer" + this.myID), function (elem) {
				// Make the answers unclickable.
				elem.classList.add("selected");

				if (elem.textContent === that.correctAnswer) {
					elem.classList.add("buttonGreen");
				}
			});

			// Display the correct answer again for clarity.
			var displayAnswer = window.Elemu.create("p", {
				id: "correctAnswer" + this.myID,
				text: "The correct answer was: " + this.correctAnswer,
				classList: ["correctAnswer", "green"]
			});

			window.Elemu.select(("#question-wrapper" + this.myID), function (elem) {
				elem.appendChild(displayAnswer);
			});
		},

		"hideAnswer": function () {
			// Remove the highlight.
			window.Elemu.select(("#answer" + this.myID), function (elem) {
				// Make the answers unclickable.
				elem.classList.remove("selected");

				if (elem.textContent === this.correctAnswer) {
					elem.classList.remove("buttonGreen");
				}
			});

			window.Elemu.select(("#correctAnswer" + this.myID), function (elem) {
				window.Elemu.remove(elem);
			});
		},

		/**
		* Creates and returns the question (with answers) wrapped in a div.
		* @param callback, a callback function to be executed when the question is answered.
		* @returns DOM node.
		*/
		"getQuestion": function (callback) {
			var that = this;

			// Create and return the DOM Node.
			var wrapper = window.Elemu.create("div", {
				id: "question-wrapper" + that.myID,
			});

			var question = window.Elemu.create("p", {
				id: "question" + that.myID,
				text: that.question,
			});

			wrapper.appendChild(question);

			this.answers.forEach(function (item, index) {
				var button = window.Elemu.create("button", {
					id: "answer" + that.myID,
					classList: ["answer"],
					text: item
				});

				createEventListener(button, that, callback);

				wrapper.appendChild(button);
			});

			return wrapper;
		}
	};

	return question;
})();
