window.Memory = (function(){
	'use strict';

	// All useful functions.

	/**
	* Creates a node containing a numbered list and returns it.
	* @param strings, the array of strings used as text in the list elements.
	* @returns a DOM node.
	*/
	function createFlagList(strings) {
		var listWrapper = window.Elemu.create("div", {
			id: "listWrapper"
		});

		var list = window.Elemu.create("ol", {
			classList: ["ordered-list"]
		});

		strings.forEach(function (item) {
			var listElem = window.Elemu.create("li", {
				text: item
			});

			list.appendChild(listElem);
		});

		listWrapper.appendChild(list);

		return listWrapper;
	}

	/**
	* Creates an element and children to that element with a single class.
	* @param classes, an array of strings, each string contains the class of one object.
	* @return DOM list node.
	*/
	function createFlagDiv(classes) {
		// Create parent.
		var parentNode = window.Elemu.create("div", {id: classes[0], classList: ["flag"]});

		// Apply all other classes children of parent.
		classes.forEach(function (item) {
			parentNode.appendChild(window.Elemu.create("div", {classList: [item]}));
		});

		return parentNode;
	}

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
	function getStartButton (eventListener) {
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

	// Strings for the displayed flag list.
	var flagStrings = [
		"Tyskland",
		"Jamaica",
		"Svenska",
		"Sydafrikanska",
		"Norska",
		"Finska",
		"Danmark",
		"Österrike",
		"Armenien"
	];

	var Memory = {
		// Create an array using the two flag arrays to get duplicates of each flag.
		"myFlags": [
			createFlagDiv(["germany", "ger-black-top", "ger-red-middle"]),
			createFlagDiv(["jamaica", "jam-triangle-yellow-right", "jam-triangle-yellow-left", "jam-triangle-black-left", "jam-triangle-black-right"]),
			createFlagDiv(["sweden", "swe-yellow-top", "swe-yellow-middle"]),
			createFlagDiv(["southafrica", "sa-square-red-top", "sa-square-white-middle", "sa-square-green-middle", "sa-triangle-white", "sa-triangle-green", "sa-triangle-yellow", "sa-triangle-black"]),
			createFlagDiv(["norway", "nor-white-top", "nor-white-middle", "nor-blue-top", "nor-blue-middle"]),
			createFlagDiv(["finnish", "fin-blue-top", "fin-blue-middle"]),
			createFlagDiv(["denmark", "den-white-top", "den-white-middle"]),
			createFlagDiv(["austria", "aus-red-top", "aus-red-bottom"]),
			createFlagDiv(["armenia", "arm-red-top", "arm-blue-middle"])
		],

		// List of selected elements.
		"selected": [],
		"found": 0,

		// Function to be called when all memory blocks have been revealed.
		"myCallback": function () {
			console.log("Called empty callback");
		},

		/* Add an event listener to the blocks.
		* @param flag, the flag the block is blocking.
		* @param block, the block to receive a listener.
		*/
		"blockListener": function (flag, block) {
			var that = this;
			block.addEventListener("click", function () {
				// Log click.
				console.log("clicked block:" + block.id);

				if (that.selected.length < 2) {
					// Hide clicked item.
					block.classList.add("hidden");

					// Save selected.
					that.selected.push({ flag: flag, block: block });

					// Log selected.
					console.log("selected items: " + that.selected);

					// If we have matching flags, keep them visible.
					if (that.selected.length === 2 && that.selected[0].flag.id === that.selected[1].flag.id) {
						that.selected = [];
						// And record them as found.
						that.found += 2;
					}
					// If we don't have matching flags, hide them after a few seconds.
					else if (that.selected.length === 2 && that.selected[0].flag !== that.selected[1].flag) {
						window.setTimeout(function () {
							that.selected[0].block.classList.remove("hidden");
							that.selected[1].block.classList.remove("hidden");

							that.selected = [];
						}, 1000);
					}

					console.log("found: " + that.found);
					console.log("length: " + that.myFlags.length);

					// If all the flags have been discovered, call callback.
					if (that.found === that.myFlags.length) {
						that.myCallback();
					}
				}
			});
		},

		/**
		* Draw flags and blocks for the memory game.
		*/
		"drawMemory": function (parentNode) {
			console.log("Trying to drawMemory.");

			// Shuffle the array.
			window.Elemu.shuffle(this.myFlags);

			var that = this;
			window.Elemu.select(parentNode, function (elem) {
				// Test the list function.
				var list = createFlagList(flagStrings);
				elem.appendChild(list);

				// Add the flags to the DOM.
				that.myFlags.forEach(function (flag, index) {
					elem.appendChild(flag);

					// Create a block to hide the flag.
					var block = window.Elemu.create("div", {
						id: "block" + index,
						classList: ["block"],
						text: "?"
					});

					// Set the top and left position of the block equal to the flag.
					block.style.top = flag.offsetTop + "px";
					block.style.left = flag.offsetLeft + "px";

					window.setTimeout(function () {
						// Set event listener on block.
						that.blockListener(flag, block);
						elem.appendChild(block);
					}, 5000);
				});

				console.log(list);
			});

			console.log("Done drawing memory.");
		},

		/**
		* Start the subtest by drawing it to the DOM.
		* @param parentNode, the DOM node the test will draw to.
		* @param callbackParam, the optional code that will be executed when the test is done.
		* @returns void.
		*/
		"start": function (parentNode, callbackParam) {
			// Set callback.
			this.callback = callbackParam;

			// Create the startpage for the test.
			// Create a wrapper.
			var wrapper = window.Elemu.create("div", {classList: ["description"]});

			// Draw the description and "start test" button.
			wrapper.appendChild(getDescription());

			var that = this;
			wrapper.appendChild(getStartButton(function () {
				// Remove description.
				window.Elemu.remove(wrapper);

				// Run the test.
				that.drawMemory(parentNode);
			}));

			window.Elemu.select(parentNode, function (elem) {
				elem.appendChild(wrapper);
			});

			// Place all flags and blocks in the correct positions.
			window.onresize = function () {
				window.Elemu.select(parentNode, function (elem) {
					elem.innerHTML = "";
					this.drawMemory(parentNode);
				});
			};
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
