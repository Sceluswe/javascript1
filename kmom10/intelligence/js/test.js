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
	];

	var Test = {
		"currentTest": 0,

		"startTest": function () {
			var callback = function () {
				window.Elemu.select(".content", function (elem){
					elem.innerHTML = "<p>Hej</p>";
					console.log("Being silly with callback");
				});
			}

			// tests[this.currentTest].start(".content", callback);
			tests[1].start(".content", callback);
		},

		"reset": function () {
			tests[this.currentTest].reset();
		}
	};

	return Test;
})();
