window.Elemu = (function () {
	'use strict';
	// This module contains useful functions for the entire project.

	/*
	* In 1964, Richard Durstenfeld came up with the modern method as a computer algorithm. It has a run time complexity of O(n).
	* This function is Durstenfelds version of the fisher-yates algorithm.
	* @returns void.
	*/
	function shuffle(array) {
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

	/*
	* High-order function executing callable on HTMLelements with target class/id.
	* @param target, the targeted HTMLelement preceeded by a . or # respectively.
	* @param callable, callable to be used on each of the targeted element.
	* @param ...params, rest arguments used as arguments for callable.
	* @returns void.
	*/
	function selectElem(target, callable) {
		// Get all targeted HTML elements using target.
		var selected = document.querySelectorAll(target);

		// Make sure we have at least one element.
		if (selected.length > 0) {
			for (var i = 0; i < selected.length; i++) {
				// Remove callable from args, keep target as formal parameter.
				var args = Array.prototype.slice.call(arguments, 2);
				// Add target element obj as first formal parameter.
				args.unshift(selected[i]);
				// Execute the callable, using spread syntax.
				callable.apply(null, args);
			}

			// console.log("Nr of Elements selected: " + selected.length);
		}
		else {
			console.log("No elements with the class: " + target);
		}
	}

	/*
	* Creates an HTML element and returns it.
	* @param element, the name of the element tag.
	* @param attrObj, object with attributes: id, classList (array), text, attrs (obj)
	* attrs is an object and the property names are used as HTMLnode attributes
	* the contents of the properties becomes the value of the attribute.
	* @returns void.
	*/
	function createElem(element, attrObj) {
		// Create HTML node.
		var newElem = document.createElement(element);

		if (typeof attrObj !== "undefined") {
			if (typeof attrObj.id !== "undefined") {
				newElem.setAttribute("id", attrObj.id);
			}

			if (typeof attrObj.classList !== "undefined") {
				// Apply classes.
				attrObj.classList.forEach(function (item) {
					newElem.classList.add(item);
				});
			}

			if (typeof attrObj.text !== "undefined") {
				newElem.innerHTML = attrObj.text;
			}

			if (typeof attrObj.attrs !== "undefined") {
				// Get the objects attributes/properties.
				var properties = Object.keys(attrObj.attrs);

				properties.forEach(function (property) {
					newElem.setAttribute(property, attrObj.attrs[property]);
				});
			}
		}

		return newElem;
	}

	/**
	* Delete an HTML DOM element.
	* @elem HTMLnode, the HTMLnode to be deleted from the DOM.
	* @returns void.
	*/
	function deleteElem(elem) {
		if (typeof elem !== "undefined") {
			// Use the old remove syntax to support IE.
			if (elem.parentNode) {
				elem.parentNode.removeChild(elem);
			}
		}
		else {
			console.log("ERROR! parameter is undefined!");
		}
	}

	/**
	* Replace a character inside a string with another substring.
	*
	* @target, the string to replace.
	* @index, the index of the character to replace.
	* @replacement, the substring to replace the character in target.
	*
	* @returns, string, the resulting string.
	*/
	function replaceChar(target, index, replacement) {
		return target.substring(0, index) + replacement + target.substring(index+1, target.length);
	}

	return {
		select: selectElem,
		create: createElem,
		remove: deleteElem,
		replaceChar: replaceChar,
		shuffle: shuffle
	};
})();
