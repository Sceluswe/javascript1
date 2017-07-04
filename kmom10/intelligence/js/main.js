(function(){
    'use strict';

    // var myContent = document.getElementById('content');
    Elemu.select(".startbutton", function (elem) {
        elem.addEventListener("click", function () {
            // Start the test. 
            console.log("starting test!");
        });
    });

    console.log('Sandbox is ready!');
})();
