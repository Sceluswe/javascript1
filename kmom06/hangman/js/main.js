(function () {
    "use strict";

    Elemu.select(".content", function (elem) {
        var textElem = Elemu.create("p", {
            id: "gameText",
            text: Letters.showPressed()
        });

        console.log(Letters.showPressed());

        elem.appendChild(textElem);


        var textElem = Elemu.create("p", {
            id: "gameText",
            text: Letters.showPressedCounter()
        });

        console.log(Letters.showPressedCounter());

    });
})();
