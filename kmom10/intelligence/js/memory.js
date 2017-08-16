window.Memory = (function(){
	'use strict';

	// All useful functions.
	/*
	In 1964, Richard Durstenfeld came up with the modern method as a computer algorithm. It has a run time complexity of O(n).
	This function is Durstenfelds version of the fisher-yates algorithm.
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

	function createFlagDiv(classes) {
		var parentNode = window.Elemu.create("div", {classList: [className[0]]});
		// Remove the first class index since that's the parent.
		classes.shift();

		// Apply all other classes children of parent.
		forEach(function (item) {
			parentNode.appendChild(window.Elemu.create("div", {classList: [item]}));
		});
	}

	// HTML code for flags.
	var germanFlag = createFlagDiv(["german", "ger-black-top", "ger-red-middle"]);
	var jamaicaFlag = createFlagDiv(["jamaica", "jam-triangle-yellow-right", "jam-triangle-yellow-left", "jam-triangle-black-left", "jam-triangle-black-right"]);
	var swedishFlag = createFlagDiv(["sweden", "swe-yellow-top", "swe-yellow-middle"]);
	var southAfricanFlag = createFlagDiv(["sa-square-red-top", "sa-square-white-middle", "sa-square-green-middle", "sa-triangle-white", "sa-triangle-green", "sa-triangle-yellow", "sa-triangle-black"]);
	var norwegianFlag = createFlagDiv(["nor-white-top", "nor-white-middle", "nor-blue-top", "nor-blue-middle"]);

	var flags = [germanFlag, jamaicaFlag, swedishFlag, southAfricanFlag, norwegianFlag];
	var flagDuplicates = arr1;

	var Memory = {
		// Create the array with the flag objects.
		"myFlags": flags.concat(flagDuplicates);

		// List of selected elements.
		"selected": [],

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
				console.log("click");

				if (selected.length < 2) {
					// Hide clicked item.
					block.classList.add("hidden");

					// Save selected.
					selected.push({ flag: flag.classes[1], block: block });

					// Log selected.
					console.log("selected items: " + selected);

					// If we have matching flags, keep them visible.
					if (selected.length === 2 && selected[0].flag === selected[1].flag) {
						selected = [];
					}
					// If we don't have matching flags, hide them after a few seconds.
					else if (selected.length === 2 && selected[0].flag !== selected[1].flag) {
						window.setTimeout(function () {
							selected[0].block.classList.remove("hidden");
							selected[1].block.classList.remove("hidden");

							selected = [];
						}, 1000);
					}

					// If all the flags have been discovered, call callback.
					if (that.selected.length === that.myFlags.length) {
						that.myCallback;
					}
				}
			});
		},

		/**
		* Draw flags and blocks for the memory game.
		*/
		"drawMemory": function (parentNode) {
			myFlags.forEach(function (flag, index) {
				// Draw the flag and use the returned element.
				flag.draw(parentNode);

				// Create a block for the flag.
				var block = Object.create(Element);
				block.init("div", ["flag", "block"], ("block" + index), "?");

				// Draw the block for the flag.
				block.draw(parentNode);

				// Get the block and flag elements.
				var blockElem = block.getElement();
				var flagElem = flag.getElement();

				// Set the blocks position equal to the flag it's blocking.
				blockElem.style.top = flagElem.offsetTop + "px";
				blockElem.style.left = flagElem.offsetLeft + "px";

				// Set event listener on block.
				blockListener(flag, blockElem);
			});
		},

		"start": function (parentNode, callbackParam) {
			// Set callback.
			this.callback = callbackParam;
			//
			// Draw the memory game to parent node.
			drawMemory(parentNode);

			// Place all flags and blocks in the correct positions.
			window.onresize = function () {
				document.getElementById("content").innerHTML = "";

				drawMemory();
			};
		}

		"reset": function () {
			// Reset the test.
		},
	}

	return Memory;
})();
