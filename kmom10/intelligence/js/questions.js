window.Questions = (function () {
    // 1x2 module.

    function createQuestion(question, answers, correctAnswer) {
        Elemu.select(".content", function (elem) {
            //  Create question node.
            var questionNode = Elemu.create("p", {
                classList: ["question"],
                text: question
            });

            elem.appendChild(questionNode);
        });
    }

    return {
        "start": function () {
            createQuestion(
                "Vad händer med ett russin om du lägger det i ett glas med Champagne?",
                ["Det flyter", "Det sjunker", "Det åker upp och ner"],
                2
            );
        },
    };
})();
