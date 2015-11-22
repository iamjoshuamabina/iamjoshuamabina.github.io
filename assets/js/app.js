/**
 * app.js
 *
 * This file compiles to /public/assets/js/app.min.js
 * You should use it build your js rainbows.
 */

function doSomething() {
    "use strict";

    var results = [];
    for(var i = 0; i < 12; i++) {
       results[i] = getRandomNumber(1, 13) * (i + 1);
    }
}

function getRandomNumber(max, min) {
    "use strict";

    var randomNumber = Math.random();
    return randomNumber * (max - min) + min;
}