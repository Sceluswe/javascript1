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

			// Start sub-test 1.
			// window.Questions.start();

			// Start sub-test 2. Placeholder for now:
			// window.Elemu.select(".content", function (elem) {
				// var placeHolder = window.Elemu.create("p", {
					// id: "placeholder",
					// text: "Hello! You just finished the first test module. I'm a placeholder!"
				// });

				// elem.appendChild(placeHolder);
			// })
		});
	});

	var tests = [
		window.Questions,
	];

	var Test = {
		"test": function () {
			tests[0].start();
		}
	};

	return Test;
})();
