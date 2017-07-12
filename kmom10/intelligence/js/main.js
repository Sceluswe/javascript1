(function(){
	'use strict';

	// Add eventListener that starts the test if the user presses the button.
	window.Elemu.select(".startButton", function (elem) {
		elem.addEventListener("click", function () {
			window.Test.test();
		});
	});

	console.log('Sandbox is ready!');
})();
