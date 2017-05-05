(function(){
    'use strict';

    var germanFlag = "<div class=\"germany\"><div class=\"ger-black-top\"></div><div class=\"ger-red-middle\"></div></div>";

    var jamaicaFlag = "<div class=\"jamaica\"><div class=\"jam-triangle-yellow-right\"></div><div class=\"jam-triangle-yellow-left\"></div><div class=\"jam-triangle-black-left\"></div><div class=\"jam-triangle-black-right\"></div></div>";

    var swedishFlag = "<div class=\"sweden\"><div class=\"swe-yellow-top\"></div><div class=\"swe-yellow-middle\"></div></div>";

    var southAfricanFlag = "<div class=\"southafrica\"><div class=\"sa-square-red-top\"></div><div class=\"sa-square-white-middle\"></div><div class=\"sa-square-green-middle\"></div><div class=\"sa-triangle-white\"></div><div class=\"sa-triangle-green\"></div><div class=\"sa-triangle-yellow\"></div><div class=\"sa-triangle-black\"></div></div>";

    /* Function that draws a flag to the id.
    * @tagIdName, the name of the tag id.
    * @flagHTML, the HTML code for the flag.
    */
    function addHTML(tagId, htmlCode) {
        var tag = document.getElementById(tagId);
        tag.innerHTML = htmlCode;
    }

    /* Function that sets a drawEventHandler on provided tag id.
    * @tagIdName, the name of the tag id.
    * @flagHTML, the HTML code for the flag.
    */
    function setDrawEventListener(tagIdName, flagHTML) {
        var link = document.getElementById(tagIdName);

        link.addEventListener("click", function (event) {
            addHTML("flag", flagHTML);
            // Prevent the link tag from following a url.
            event.preventDefault();
        });
    }

    // Get link tags.
    setDrawEventListener("germany-link", germanFlag);
    setDrawEventListener("jamaica-link", jamaicaFlag);
    setDrawEventListener("sweden-link", swedishFlag);
    setDrawEventListener("southafrica-link", southAfricanFlag);

    console.log('Sandbox is ready!');
})();
