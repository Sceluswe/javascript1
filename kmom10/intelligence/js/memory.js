window.Memory = (function(){
	'use strict';

	/**
	* Writes the test description and a start button for this sub-test.
	* @returns DOM node containing the "start test" button and said description.
	*/
	function getDescription() {
		// Create paragraf.
		var p = window.Elemu.create("p", {
			text: "I följande test testas ditt minne. Du kommer få se nio olika flaggor i fem sekunder och därefter döljs de. Listan högst upp på hemsidan indikerar vilken flagga du skall trycka på och i vilken ordning. Om du väljer rätt får du 1 poäng, väljer du fel avslutas testet."
		});

		return p;
	}

	/**
	* Creates and returns a styled startbutton wrapped in a div.
	* @param eventListener, adds a callable to the button.
	* @returns void.
	*/
	function createButton(text, eventListener) {
		var buttonDiv = window.Elemu.create("div", {classList: ["center"]});

		var button = window.Elemu.create("button", {
			classList: ["startButton"],
			text: text
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

	/**
	* Returns an ordered list with elements from the array, one of which is highlighted.
	* @param array, the array with strings to be put inside li elements.
	* @param indexParam, the index of the li element to be highlighted.
	* @returns DOMnode, an unordered list.
	*/
	function createMemoryList(array, indexParam) {
		var list = window.Elemu.create("ol", {
			classList: ["ordered-list"]
		});

		array.forEach(function (item, index) {
			var listElem;

			if (index === indexParam) {
				listElem = window.Elemu.create("li", {
					classList: ["blue", "big"],
					text: item + " <<< Tryck på blocket som döljer denna flagga."
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

		return list;
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
			"Sydafrika", "Norge", "Finland",
			"Danmark", "Österrike", "Armenien"
		],

		"currentFlag": 0,
		"nrOfPoints": 0,
		"parentNode": undefined,

		/**
		* Returns the number of points collected.
		* @returns integer.
		*/
		"getPoints": function () {
			return this.nrOfPoints;
		},

		// Function to be called when all memory blocks have been revealed.
		"myCallback": function () {
			console.log("Called empty callback");
		},

		/**
		* Creates a wrapper node containing a numbered list and returns it.
		* @returns DOMnode, div wrapper.
		*/
		"createFlagList": function () {
			var listWrapper = window.Elemu.create("div", {id: "list-wrapper"});

			// Put list inside wrapper.
			listWrapper.appendChild(createMemoryList(this.flagSelectionList, 0));

			return listWrapper;
		},

		/**
		* Removes the old list and creates a new one with new highlighted element.
		* @param indexParam, the item in the list to be highlighted.
		* @returns void.
		*/
		"updateFlagList": function (indexParam) {
			var that = this;
			window.Elemu.select("#list-wrapper", function (elem) {
				elem.innerHTML = "";
				elem.appendChild(createMemoryList(that.flagSelectionList, indexParam));
			});
		},

		/* Add an event listener to the blocks, checks if the correct flag has been pressed.
		* @param flag, the flag in the myFlags array.
		* @param block, the block to receive a listener.
		* @returns void.
		*/
		"blockEventListener": function (flag, block) {
			var that = this;
			block.addEventListener("click", function () {
				console.log("clicked block:" + block.id);
				block.classList.add("hidden");

				// Check if the user selected the right block.
				if (flag.listName === that.flagSelectionList[that.currentFlag]) {
					console.log("Correct flag selected!");

					// If the user selected the correct flag, award point.
					that.nrOfPoints += 1;

					// Move on to the next flag.
					that.currentFlag++;
					that.updateFlagList(that.currentFlag);
				}
				// If the user guesses incorrectly the game ends.
				else {
					console.log("Test ends");
					that.updateFlagList(-1);

					// Remove all blocks.
					window.Elemu.select(".block", function (elem) {
						elem.classList.add("hidden");
					});

					// Create button with the callback.
					that.myCallback();
				}

				if (that.currentFlag === that.flagSelectionList.length) {
					console.log("Test ends");
					// Create button with the callback.
					that.myCallback();
				}
			});
		},

		/**
		* Draw FlagList, flags and blocks for the memory game.
		* @returns void.
		*/
		"drawMemory": function () {
			console.log("Trying to drawMemory.");

			var memoryWrapper = window.Elemu.create("div", {id: "memory-game"});

			// Create and append flagList to memoryWrapper.
			memoryWrapper.appendChild(this.createFlagList());

			// Create and append flagWrapper to memoryWrapper.
			var flagWrapper = window.Elemu.create("div", {id: "flag-wrapper"});
			memoryWrapper.appendChild(flagWrapper);

			// Add memoryWrapper to the parentNode.
			window.Elemu.select(this.parentNode, function (elem) {
				elem.appendChild(memoryWrapper);
			});

			// Add the flags and blocks to the flagWrapper.
			var that = this;
			this.myFlags.forEach(function (flag, flagNr) {
				flagWrapper.appendChild(flag.node);

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
					that.blockEventListener(flag, block);
					flagWrapper.appendChild(block);
				}, 5000);
			});

			console.log("Done drawing memory.");
		},

		/**
		* Draw the description page, explaining the test.
		* @returns void.
		*/
		"drawDescription": function () {
			// Create the description page for the test.
			var wrapper = window.Elemu.create("div", {classList: ["description"]});

			wrapper.appendChild(getDescription());

			var that = this;
			wrapper.appendChild(createButton("Starta testet", function () {
				// Remove description.
				window.Elemu.remove(wrapper);

				that.drawMemory(that.parentNode);
			}));

			// Apply wrapper to the parentNode.
			window.Elemu.select(that.parentNode, function (elem) {
				elem.appendChild(wrapper);
			});
		},

		/**
		* Creates the startpage for the test and allows the test to be started.
		* @param parentNode, the DOM node the test will draw to.
		* @param callbackParam, the optional code that will be executed when the test is done.
		* @returns void.
		*/
		"start": function (parentNode, callbackParam) {
			this.parentNode = parentNode;
			this.myCallback = callbackParam;

			// Shuffle the arrays to make the test different everytime.
			window.Elemu.shuffle(this.myFlags);
			window.Elemu.shuffle(this.flagSelectionList);

			this.drawDescription();
		},

		/**
		* Resets the test and allows the player to retake the test without the flags moving.
		* @returns void.
		*/
		"reset": function () {
			// Reset the test.
			this.nrOfPoints = 0;
			this.currentFlag = 0;

			// // Updaste list.
			this.updateFlagList(0);
			// Show all blocks.
			window.Elemu.select(".block", function (elem) {
				elem.classList.remove("hidden");
			});

			this.drawMemory();
		},
	};

	return Memory;
})();
