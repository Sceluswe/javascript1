window.Elemu = (function () {
	'use strict';
	// This module contains useful functions for the entire project.

	/*
	* In 1964, Richard Durstenfeld came up with the modern method as a computer algorithm. It has a run time complexity of O(n).
	* This function is Durstenfelds version of the fisher-yates algorithm.
	* @returns void.
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

	// Production steps of ECMA-262, Edition 5, 15.4.4.14
	// Reference: http://es5.github.io/#x15.4.4.14
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(searchElement, fromIndex) {
			var k;

			// 1. Let o be the result of calling ToObject passing
			//    the this value as the argument.
			if (this === null) {
				throw new TypeError('"this" is null or not defined');
			}

			var o = Object(this);

			// 2. Let lenValue be the result of calling the Get
			//    internal method of o with the argument "length".
			// 3. Let len be ToUint32(lenValue).
			var len = o.length >>> 0;

			// 4. If len is 0, return -1.
			if (len === 0) {
				return -1;
			}

			// 5. If argument fromIndex was passed let n be
			//    ToInteger(fromIndex); else let n be 0.
			var n = fromIndex | 0;

			// 6. If n >= len, return -1.
			if (n >= len) {
				return -1;
			}

			// 7. If n >= 0, then Let k be n.
			// 8. Else, n<0, Let k be len - abs(n).
			//    If k is less than 0, then let k be 0.
			k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

			// 9. Repeat, while k < len
			while (k < len) {
				// a. Let Pk be ToString(k).
				//   This is implicit for LHS operands of the in operator
				// b. Let kPresent be the result of calling the
				//    HasProperty internal method of o with argument Pk.
				//   This step can be combined with c
				// c. If kPresent is true, then
				//    i.  Let elementK be the result of calling the Get
				//        internal method of o with the argument ToString(k).
				//   ii.  Let same be the result of applying the
				//        Strict Equality Comparison Algorithm to
				//        searchElement and elementK.
				//  iii.  If same is true, return k.
				if (k in o && o[k] === searchElement) {
					return k;
				}
				k++;
			}

			return -1;
		};
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
