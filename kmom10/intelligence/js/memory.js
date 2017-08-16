window.Memory = (function(){
	'use strict';

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

	// Block object. Object that hides the flag.
	var Element = {
		"tagName": "",
		"classes": [],
		"id": "",
		"content": "",

		"init": function (tagName, classlist, id, content) {
			this.classes = classlist;
			this.id = id;
			this.content = content;
		},

		"getElement": function () {
			return document.getElementById(this.id);
		},

		/*
		* Function that draws the element.
		*/
		"draw": function (parentNode) {
			if (this.tagName !== "") {
				var elem = "";
				var check = this.getElement();

				console.log(check);

				if (check === null) {
					elem = document.createElement(this.tagName);
				}
				else {
					elem = document.createElement(this.tagName);
					check.parentElement.replaceChild(elem, check);
				}

				if (this.classes.length > 0) {
					this.classes.forEach(function (currentValue, index, array) {
						elem.classList.add(array[index]);
					});
				}

				if (this.blockId !== "") {
					elem.id = this.id;
				}

				if (this.content !== "") {
					elem.innerHTML = this.content;
				}

				if (parentNode !== "") {
					var elemParent = document.querySelector(parentNode);
					elemParent.appendChild(elem);
				}
			}
			else {
				console.log("ERROR: Can't draw element without tagName.");
			}
		},
	};

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

	// Create all flag objects.
	// (tagName, classlist=[], id, content="")
	var gerFlag = Object.create(Element);
	gerFlag.init("div", ["flag", "germany"], "germany", germanFlagContent);
	var gerFlag1 = Object.create(Element);
	gerFlag1.init("div", ["flag", "germany"], "germany1", germanFlagContent);

	var jamFlag = Object.create(Element);
	jamFlag.init("div", ["flag", "jamaica"], "jamaica", jamaicaFlagContent);
	var jamFlag1 = Object.create(Element);
	jamFlag1.init("div", ["flag", "jamaica"], "jamaica1", jamaicaFlagContent);

	var sweFlag = Object.create(Element);
	sweFlag.init("div", ["flag", "sweden"], "sweden", swedishFlagContent);
	var sweFlag1 = Object.create(Element);
	sweFlag1.init("div", ["flag", "sweden"], "sweden1", swedishFlagContent);

	var saFlag = Object.create(Element);
	saFlag.init("div", ["flag", "southafrica"], "southafrica", southAfricanFlagContent);
	var saFlag1 = Object.create(Element);
	saFlag1.init("div", ["flag", "southafrica"], "southafrica1", southAfricanFlagContent);

	var norFlag = Object.create(Element);
	norFlag.init("div", ["flag", "norway"], "norway", norwegianFlagContent);
	var norFlag1 = Object.create(Element);
	norFlag1.init("div", ["flag", "norway"], "norway1", norwegianFlagContent);

	var Memory = {
		// Create the array with the flag objects.
		"myFlags": [gerFlag, jamFlag, sweFlag, saFlag, norFlag, gerFlag1, jamFlag1, sweFlag1, saFlag1, norFlag1],
		// List of selected elements.
		"selected": [],
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
