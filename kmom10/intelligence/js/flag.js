window.Flag = (function () {
	"use strict";

	function createFlagDiv(classes) {
	}
	var Flag = {
		"node": undefined,
		"listName": "",

		/**
		* Initiates this flag, creates an element and children to that element with a single class.
		* @param listName, the listname of the flag.
		* @param classes, an array of strings, each string contains the class of one object.
		* @returns DOM-node, flag-divs wrapped inside a div.
		*/
		"init": function (listName, classes) {
			this.listName = listName;

			// Create parent.
			var flag = window.Elemu.create("div", {id: classes[0], classList: ["flag"]});

			// Apply all other classes as children of parentNode.
			classes.forEach(function (item) {
				flag.appendChild(window.Elemu.create("div", {classList: [item]}));
			});

			this.node = flaflagNrg;
		}
	};

	return Flag;
})();
