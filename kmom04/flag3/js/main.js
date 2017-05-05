(function(){
    'use strict';

    var germanFlag = "<div class=\"germany\"><div class=\"ger-black-top\"></div><div class=\"ger-red-middle\"></div></div>";

    var jamaicaFlag = "<div class=\"jamaica\"><div class=\"jam-triangle-yellow-right\"></div><div class=\"jam-triangle-yellow-left\"></div><div class=\"jam-triangle-black-left\"></div><div class=\"jam-triangle-black-right\"></div></div>";

    var swedishFlag = "<div class=\"sweden\"><div class=\"swe-yellow-top\"></div><div class=\"swe-yellow-middle\"></div></div>";

    var southAfricanFlag = "<div class=\"southafrica\"><div class=\"sa-square-red-top\"></div><div class=\"sa-square-white-middle\"></div><div class=\"sa-square-green-middle\"></div><div class=\"sa-triangle-white\"></div><div class=\"sa-triangle-green\"></div><div class=\"sa-triangle-yellow\"></div><div class=\"sa-triangle-black\"></div></div>";



    var flag = {
        flagHTML: "",
        targetTagIdName: "",
        targetEventLink: "",

        init: function (flagHTML, targetTagIdName, targetEventLink) {
            this.flagHTML = flagHTML;
            this.targetTagIdName = targetTagIdName;
            this.targetEventLink = targetEventLink;
        },

        /* Function that draws a flag to the id.
        * @tagIdName, the name of the tag id.
        * @flagHTML, the HTML code for the flag.
        */
        addHTML: function () {
            var tag = document.getElementById(this.targetTagIdName);
            tag.innerHTML = this.flagHTML;
        },

        /* Function that sets a drawEventHandler on provided tag id.
        * @tagIdName, the name of the tag id.
        * @flagHTML, the HTML code for the flag.
        */
        setDrawEventListener: function () {
            var link = document.getElementById(this.targetEventLink);

            var that = this;
            link.addEventListener("click", function (event) {
                that.addHTML("flag", that.flagHTML);
                // Prevent the link tag from following a url.
                event.preventDefault();
            });
        }
    };

    var gerFlag = Object.create(flag);
    gerFlag.init(germanFlag, "flag", "germany-link");

    var jamFlag = Object.create(flag);
    jamFlag.init(jamaicaFlag, "flag", "jamaica-link");

    var sweFlag = Object.create(flag);
    sweFlag.init(swedishFlag, "flag", "sweden-link");

    var saFlag = Object.create(flag);
    saFlag.init(southAfricanFlag, "flag", "southafrica-link");

    var myFlags = [gerFlag, jamFlag, sweFlag, saFlag];

    // Link the drawing of flags to an element.
    for (var j = 0; j < myFlags.length; j++) {
        myFlags[j].setDrawEventListener();
    }

    console.log('Sandbox is ready!');
})();
