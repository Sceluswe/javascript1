window.Test = (function () {
    window.Elemu.select(".startButton", function (elem) {
        elem.addEventListener("click", function () {
            // Remove welcome screen.
            window.Elemu.select(".content", function (elem) {
                while (elem.firstChild) {
                    elem.removeChild(elem.firstChild);
                }
            });

            window.Questions.start();
        });
    });

})();
