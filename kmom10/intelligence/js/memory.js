window.Memory = (function(){
	'use strict';

	// All useful functions.
	/*
	* In 1964, Richard Durstenfeld came up with the modern method as a computer algorithm. It has a run time complexity of O(n).
	* This function is Durstenfelds version of the fisher-yates algorithm.
	*/
	function shuffle (array) {
		var i = 0;
		var j = 0;
		var temp = null;

		for (i = array.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1));
			temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	/**
	* Creates an element and children to that element with a single class.
	* @param classes, an array of strings, each string contains the class of one object.
	*/
	function createFlagDiv(classes) {
		// Create parent.
		var parentNode = window.Elemu.create("div", {id: classes[0], classList: ["flag"]});
		// classes.shift();

		// Apply all other classes children of parent.
		classes.forEach(function (item) {
			parentNode.appendChild(window.Elemu.create("div", {classList: [item]}));
		});

		return parentNode;
	}

	// HTML code for flags.
	var germanFlag = createFlagDiv(["germany", "ger-black-top", "ger-red-middle"]);
	var jamaicaFlag = createFlagDiv(["jamaica", "jam-triangle-yellow-right", "jam-triangle-yellow-left", "jam-triangle-black-left", "jam-triangle-black-right"]);
	var swedishFlag = createFlagDiv(["sweden", "swe-yellow-top", "swe-yellow-middle"]);
	var southAfricanFlag = createFlagDiv(["southafrica", "sa-square-red-top", "sa-square-white-middle", "sa-square-green-middle", "sa-triangle-white", "sa-triangle-green", "sa-triangle-yellow", "sa-triangle-black"]);
	var norwegianFlag = createFlagDiv(["norway", "nor-white-top", "nor-white-middle", "nor-blue-top", "nor-blue-middle"]);
	var finnishFlag = createFlagDiv(["finnish", "fin-blue-top", "fin-blue-middle"]);
	var denmarkFlag = createFlagDiv(["denmark", "den-white-top", "den-white-middle"]);
	var austriaFlag = createFlagDiv(["austria", "aus-red-top", "aus-red-bottom"]);
	var armeniaFlag = createFlagDiv(["armenia", "arm-red-top", "arm-blue-middle"]);

	// Create 2 arrays with flags.
	var flags = [
		germanFlag,
		jamaicaFlag,
		swedishFlag,
		southAfricanFlag,
		norwegianFlag,
		finnishFlag,
		denmarkFlag,
		austriaFlag,
		armeniaFlag
	];

	var Memory = {
		// Create an array using the two flag arrays to get duplicates of each flag..
		"myFlags": flags,

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
			shuffle(this.myFlags);

			var that = this;
			window.Elemu.select(parentNode, function (elem) {
				that.myFlags.forEach(function (flag, index) {
					// Add the flag to the DOM.
					elem.appendChild(flag);

					var block = window.Elemu.create("div", {
						id: "block" + index,
						classList: ["block"],
						text: "?"
					});

					// Get the top and left position of the flag.
					// Set the blocks position equal to the flag it's blocking.
					block.style.top = flag.offsetTop + "px";
					block.style.left = flag.offsetLeft + "px";


					// Set event listener on block.
					// that.blockListener(flag, block);
					// elem.appendChild(block);
				});
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

			// Draw the memory game to parent node.
			this.drawMemory(parentNode);

			// Place all flags and blocks in the correct positions.
			window.onresize = function () {
				window.Elemu.select(parentNode, function () {
					parentNode.innerHTML = "";
					this.drawMemory(parentNode);
				});
			};
		},

		"reset": function () {
			// Reset the test.
		},
	}

	return Memory;
})();
