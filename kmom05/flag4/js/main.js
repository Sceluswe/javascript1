(function(){
    'use strict';

    // HTML code for flags.
    var germanFlagContent = "<div class=\"ger-black-top\"></div><div class=\"ger-red-middle\"></div>";

    var jamaicaFlagContent = "<div class=\"jam-triangle-yellow-right\"></div><div class=\"jam-triangle-yellow-left\"></div><div class=\"jam-triangle-black-left\"></div><div class=\"jam-triangle-black-right\"></div>";

    var swedishFlagContent = "<div class=\"swe-yellow-top\"></div><div class=\"swe-yellow-middle\"></div>";

    var southAfricanFlagContent = "<div class=\"sa-square-red-top\"></div><div class=\"sa-square-white-middle\"></div><div class=\"sa-square-green-middle\"></div><div class=\"sa-triangle-white\"></div><div class=\"sa-triangle-green\"></div><div class=\"sa-triangle-yellow\"></div><div class=\"sa-triangle-black\"></div>";

    var norwegianFlagContent = "<div class=\"nor-white-top\"></div><div class=\"nor-white-middle\"></div><div class=\"nor-blue-top\"></div><div class=\"nor-blue-middle\"></div>";

    // Block object.
    var Element = {
        tagName: "",
        classes: [],
        id: "",
        content: "",
        parent: "",

        init: function (tagName, classlist, id, content, parent) {
            this.tagName = tagName;
            this.classes = classlist;
            this.id = id;
            this.content = content;
            this.parent = parent;
        },

        getElement: function () {
            return document.getElementById(this.id);
        },

        /*
        * Function that draws the element.
        */
        draw: function () {
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

                if (this.parent !== "") {
                    var elemParent = document.querySelector(this.parent);
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
    // (tagName, classlist=[], id, content="", parent="")
    var gerFlag = Object.create(Element);
    gerFlag.init("div", ["flag", "germany"], "germany", germanFlagContent, "#content");
    var gerFlag1 = Object.create(Element);
    gerFlag1.init("div", ["flag", "germany"], "germany1", germanFlagContent, "#content");

    var jamFlag = Object.create(Element);
    jamFlag.init("div", ["flag", "jamaica"], "jamaica", jamaicaFlagContent, "#content");
    var jamFlag1 = Object.create(Element);
    jamFlag1.init("div", ["flag", "jamaica"], "jamaica1", jamaicaFlagContent, "#content");

    var sweFlag = Object.create(Element);
    sweFlag.init("div", ["flag", "sweden"], "sweden", swedishFlagContent, "#content");
    var sweFlag1 = Object.create(Element);
    sweFlag1.init("div", ["flag", "sweden"], "sweden1", swedishFlagContent, "#content");

    var saFlag = Object.create(Element);
    saFlag.init("div", ["flag", "southafrica"], "southafrica", southAfricanFlagContent, "#content");
    var saFlag1 = Object.create(Element);
    saFlag1.init("div", ["flag", "southafrica"], "southafrica1", southAfricanFlagContent, "#content");

    var norFlag = Object.create(Element);
    norFlag.init("div", ["flag", "norway"], "norway", norwegianFlagContent, "#content");
    var norFlag1 = Object.create(Element);
    norFlag1.init("div", ["flag", "norway"], "norway1", norwegianFlagContent, "#content");

    // Create the array with the flag objects.
    var myFlags = [gerFlag, jamFlag, sweFlag, saFlag, norFlag, gerFlag1, jamFlag1, sweFlag1, saFlag1, norFlag1];

    //var myFlags = [gerFlag, gerFlag1];

    // Shuffle the array.
    shuffle(myFlags);

    // List of selected elements.
    var selected = [];

    /* Add an event listener to the blocks.
    * @param flag, the flag the block is blocking.
    * @param block, the block to receive a listener.
    */
    function blockListener(flag, block) {
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
            }
        });
    }

    // Draw flags and blocks for the memory game.
    function drawMemory() {
        myFlags.forEach(function (flag, index) {
            // Draw the flag and use the returned element.
            flag.draw();

            // Create a block for the flag.
            var block = Object.create(Element);
            block.init("div", ["flag", "block"], ("block" + index), "?", "#content");

            // Draw the block for the flag.
            block.draw();

            // Get the block and flag elements.
            var blockElem = block.getElement();
            var flagElem = flag.getElement();

            // Set the blocks position equal to the flag it's blocking.
            blockElem.style.top = flagElem.offsetTop + "px";
            blockElem.style.left = flagElem.offsetLeft + "px";

            // Set event listener on block.
            blockListener(flag, blockElem);
        });
    }

    drawMemory();



    // Place all flags and blocks in the correct positions.
    window.onresize = function () {
        document.getElementById("content").innerHTML = "";

        drawMemory();
    };

    console.log('Sandbox is ready!');
})();
