/**
 * app.js
 *
 * This file compiles to /public/assets/js/app.min.js
 * You should use it build your js rainbows.
 */

<<<<<<< HEAD
function doSomething() {
    "use strict";

<<<<<<< HEAD
    var results = [];
    for(var i = 0; i < 12; i++) {
       results[i] = getRandomNumber(1, 13) * (i + 1);
    }
=======
    $('#dateDiv').html(getDate());
>>>>>>> added gulp lint task
}

function getRandomNumber(max, min) {
    "use strict";

    var randomNumber = Math.random();
    return randomNumber * (max - min) + min;
}
=======
$(function() {
    "use strict";

    function quotes() {
        $('.carousel').carousel({
            interval: 5000,
            wrap: true
        });
    }

    function init() {
        quotes();
    }

    init();

});
>>>>>>> added carousel quotes
