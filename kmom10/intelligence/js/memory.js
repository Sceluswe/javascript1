window.Memory = (function(){
	'use strict';


	/**
	* Writes the test description and a start button for this sub-test.
	* @returns DOM node containing the "start test" button and said description.
	*/
	function getDescription() {
		// Create paragraf.
		var p = window.Elemu.create("p", {
			text: "I följande test testas ditt minne. Du kommer få se nio olika flaggor i fem sekunder och därefter döljs de. När de dolts får du en lista med flaggornas namn och i vilken ordning du ska klicka på flaggorna så att de återigen syns. Om du väljer rätt får du 3 poäng, väljer du fel avslutas testet."
		});

		return p;
	}

	/**
	* Creates and returns a styled startbutton wrapped in a div.
	* @param eventListener, adds a callable to the button.
	* @returns void.
	*/
	function getStartButton(eventListener) {
		var buttonDiv = window.Elemu.create("div", {classList: ["center"]});

		var button = window.Elemu.create("button", {
			classList: ["startButton"],
			text: "Starta testet"
		});

		if (eventListener !== "undefined") {
			button.addEventListener("click", eventListener);
		}

		buttonDiv.appendChild(button);

		return buttonDiv;
	}

	/**
	* Creates a flag object and returns it.
	* @param listName, name of the flag, the displayed name in the visual list.
	* @param classes, the CSS classes used for the DOMNode in the flag object.
	* @returns void.
	*/
	function createFlag(listName, classes) {
		var flag = Object.create(window.Flag);

		flag.init(listName, classes);

		return flag;
	}

	var Memory = {
		// Create an array with flag objects.
		"myFlags": [
			createFlag("Tyskland", ["germany", "ger-black-top", "ger-red-middle"]),
			createFlag("Jamaica", ["jamaica", "jam-triangle-yellow-right", "jam-triangle-yellow-left", "jam-triangle-black-left", "jam-triangle-black-right"]),
			createFlag("Sverige", ["sweden", "swe-yellow-top", "swe-yellow-middle"]),
			createFlag("Sydafrika", ["southafrica", "sa-square-red-top", "sa-square-white-middle", "sa-square-green-middle", "sa-triangle-white", "sa-triangle-green", "sa-triangle-yellow", "sa-triangle-black"]),
			createFlag("Norge", ["norway", "nor-white-top", "nor-white-middle", "nor-blue-top", "nor-blue-middle"]),
			createFlag("Finland", ["finnish", "fin-blue-top", "fin-blue-middle"]),
			createFlag("Danmark", ["denmark", "den-white-top", "den-white-middle"]),
			createFlag("Österrike", ["austria", "aus-red-top", "aus-red-bottom"]),
			createFlag("Armenien", ["armenia", "arm-red-top", "arm-blue-middle"])
		],

		// Create an array with flagnames for the selection list.
		"flagSelectionList": [
			"Tyskland", "Jamaica", "Sverige",
			"Sydafrika", "Norge", "Findland",
			"Danmark", "Österrike", "Armenien"
		],

		"currentFlag": 0,

		"nrOfPoints": 0,

		"wrapperClassname": "memory-wrapper",
		/**
		* Returns the number of points collected.
		* @returns integer.
		*/
		"getNrOfPoints": function () {
			return this.nrOfPoints;
		},

		// Function to be called when all memory blocks have been revealed.
		"myCallback": function () {
			console.log("Called empty callback");
		},

		/**
		* Creates a node containing a numbered list and returns it.
		* @param strings, the array of strings used as text in the list elements.
		* @param indexParam, the list element to be high-lighted.
		* @returns a DOM node, a list with text elements from the textFlag array.
		*/
		"createFlagList": function (indexParam) {
			var listWrapper = window.Elemu.create("div", {
				id: "listWrapper"
			});

			var list = window.Elemu.create("ol", {
				classList: ["ordered-list"]
			});

			this.flagSelectionList.forEach(function (item, index) {
				var listElem = undefined;

				if (index === indexParam) {
					listElem = window.Elemu.create("li", {
						classList: ["blue", "big"],
						text: item
					});
				}
				else {
					listElem = window.Elemu.create("li", {
						classList: ["opacity04"],
						text: item
					});
				}

				list.appendChild(listElem);
			});

			listWrapper.appendChild(list);

			return listWrapper;
		},

		/**
		* Removes the old list and creates a new one.
		* @param indexParam, the item in the list to be highlighted.
		* @returns void.
		*/
		"updateFlagList": function (indexParam) {
			window.Elemu.select("listWrapper", function (elem) {
				elem.innerHTML = "";
				elem.createFlagList(indexParam);
			});
		},

		/* Add an event listener to the blocks, checks if the correct flag has been pressed.
		* @param flagNr, the index number of the flag in the array.
		* @param block, the block to receive a listener.
		* @returns void.
		*/
		"blockEventListener": function (flagNr, block) {
			var that = this;
			block.addEventListener("click", function () {
				console.log("clicked block:" + block.id);

				// Check if the user selected the right block.
				if (flagNr === that.currentFlag) {
					// If the user selected the correct flag, award point.
					that.nrOfPoints += 1;

					// Move on to the next flag.
					that.currentFlag++;
					that.updateFlagList(that.currentFlag);
				}
			});
		},

		/**
		* Draw FlagList, flags and blocks for the memory game.
		* @param parentNode, id or classname of the node in the DOM to draw to.
		* @returns void.
		*/
		"drawMemory": function (parentNode) {
			console.log("Trying to drawMemory.");

			// Create wrapper.
			var listWrapper = window.Elemu.create("div", {classList: [this.wrapperClassname]});

			// Create the list and apply it to the wrapper.
			var list = this.createFlagList();
			listWrapper.appendChild(list);

			// Add the flags and blocks to the DOM.
			var that = this;
			this.myFlags.forEach(function (flag, flagNr) {
				listWrapper.appendChild(flag.node);

				// Create a block to hide the flag.
				var block = window.Elemu.create("div", {
					id: "block" + flagNr,
					classList: ["block"],
					text: "?"
				});

				// Set the top and left position of the block equal to the flag.
				block.style.top = flag.node.offsetTop + "px";
				block.style.left = flag.node.offsetLeft + "px";

				window.setTimeout(function () {
					// Set event listener on block.
					that.blockEventListener(flagNr, block);
					listWrapper.appendChild(block);
				}, 5000);
			});

			// Select parent node and apply wrapper.
			window.Elemu.select(parentNode, function (elem) {
				elem.appendChild(listWrapper);
			});

			console.log("Done drawing memory.");
		},

		/**
		* Creates the startpage for the test and allows the test to be started.
		* @param parentNode, the DOM node the test will draw to.
		* @param callbackParam, the optional code that will be executed when the test is done.
		* @returns void.
		*/
		"start": function (parentNode, callbackParam) {
			console.log(this.myFlags);
			// Shuffle the arrays.
			window.Elemu.shuffle(this.myFlags);
			window.Elemu.shuffle(this.flagSelectionList);

			// Set callback.
			this.callback = callbackParam;

			// Create the startpage for the test.
			// Create wrapper.
			var wrapper = window.Elemu.create("div", {classList: ["description"]});

			// Draw the description.
			wrapper.appendChild(getDescription());

			// Draw the start button and give it a callable.
			var that = this;
			wrapper.appendChild(getStartButton(function () {
				// Remove description.
				window.Elemu.remove(wrapper);

				// Create wrapper node.
				var memoryWrapper = window.Elemu.create("div", {
					classList: [that.wrapperClassname]
				});

				// Apply wrapper to the parentNode.
				window.Elemu.select(parentNode, function (elem) {
					elem.appendChild(wrapper);
				});

				// Draw the test.
				that.drawMemory(parentNode);
			}));

			// Apply wrapper to the parentNode.
			window.Elemu.select(parentNode, function (elem) {
				elem.appendChild(wrapper);
			});

			// // Place all flags and blocks in the correct positions.
			// window.onresize = function () {
			// 	window.Elemu.select(parentNode, function (elem) {
			// 		elem.innerHTML = "";
			// 		that.drawMemory(parentNode);
			// 	});
			// };
		},

		/**
		* Resets the test and allows the player to retake the test without the flags moving.
		* @returns void.
		*/
		"reset": function () {
			// Reset the test.
		},
	}

	return Memory;
})();
