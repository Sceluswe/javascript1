window.Flag = (function () {
	"use strict";

	var Flag = {
		"node": undefined,
		"listName": "",

		/**
		* Initiates this flag, creates an element and children to that element with a single class.
		* @param listName, the listname of the flag.
		* @param classes, array of strings, each string is the class of one object. 1 object = 1 flagpart.
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

			this.node = flag;
		}
	};

	return Flag;
})();
