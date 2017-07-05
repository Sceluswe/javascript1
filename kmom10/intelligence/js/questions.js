window.Questions = (function () {
    // 1x2 module.

    function createQuestion(question, answers, correctAnswer) {
        window.Elemu.select(".content", function (elem) {
            //  Create question node.
            var questionNode = window.Elemu.create("p", {
                classList: ["question"],
                text: question
            });

            elem.appendChild(questionNode);

            answers.forEach(function (item, index) {
                var answerNode = window.Elemu.create("p", {
                    classList: [("answer" + index)],
                    text: item
                });

                elem.appendChild(answerNode);
            });

        });
    }

    return {
        "start": function () {
            createQuestion(
                "Vad händer med ett russin om du lägger det i ett glas med Champagne?",
                ["1. Det flyter", "X. Det sjunker", "2. Det åker upp och ner"],
                2
            );
        },
    };
})();
