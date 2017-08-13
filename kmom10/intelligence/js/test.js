window.Test = (function () {
	// Add eventListener that starts the test if the user presses the button.
	window.Elemu.select(".startButton", function (elem) {
		elem.addEventListener("click", function () {
			// Remove welcome screen.
			window.Elemu.select(".content", function (elem) {
				while (elem.firstChild) {
					elem.removeChild(elem.firstChild);
				}
			});
		});
	});

	var tests = [
		window.Questions,
		window.FizzBuzz,
		window.Questions
	];

	var Test = {
		"currentTest": 0,

		"startTest": function () {
			var that = this;

			var callback1 = function () {
				window.Elemu.select(".content", function (elem) {
					elem.innerHTML = "<p>Hej</p>";
					console.log("Being silly with callback");
				});
			}

			var fizzbuzzCallback = function () {
				window.Elemu.select(".content", function (elem) {
					var button = window.Elemu.create("button", {
						text: "Go to the next test.",
						classList: ["startButton"]
					});

					elem.appendChild(button);

					button.addEventListener("click", function () {
						// Start the next test.
						that.currentTest++;
						tests[that.currentTest].start(".content", callback1);
					});
				});
			}

			var questionsCallback = function () {
				that.currentTest++;
				console.log(that.currentTest);
				tests[that.currentTest].start(".content", fizzbuzzCallback);
			}

			// tests[this.currentTest].start(".content", callback);
			tests[this.currentTest].start(".content", questionsCallback);
		},

		"reset": function () {
			tests[this.currentTest].reset();
		}
	};

	return Test;
})();
