///////////////////////////////////////////////////////////////////////////////
// file main.js
// Copyright (c) 2012 Frédéric J. Rézeau. All rights reserved.
///////////////////////////////////////////////////////////////////////////////

// Provides requestAnimationFrame in a cross browser way. @author paulirish / http://paulirish.com/
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function () {
        "use strict";
        return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();
}

// Retrieve the game language.
function getLanguage() {
    "use strict";
    return AquaThiefGame.language;
}

function startGame() {
    "use strict";

    // Retrieve the language.
    //  "en" (english)
    //  "es" (spanish)
    //  "fr" (french)
    //  "it" (italian)
    //  "pt" (portuguese)
    //  "tr" (turkish)
    //  "ru" (russian)
    //  "de" (german)   
    AquaThiefGame.language = SG.lang; //SG_Hooks.getLanguage(['en', 'es', 'fr', 'it', 'pt', 'tr', 'ru', 'de', 'th']);

    // Resizing events.
    SG_Hooks.setOrientationHandler(resetDisplay);  // Provide a function f, that handles orientation changes for your game.
    SG_Hooks.setResizeHandler(resetDisplay); // Provide the function f, that handles screen resizing for your game.

    // Initialize the game.
    AquaThiefGame.initialize();
}

// Document has loaded.
$(document).on("pageinit", function () {
    "use strict";

    $(".ui-loader").hide();
    // Disable scrollbars.
    $("body").css("overflow", "hidden");
    // Remove outlines.
    $("body > *").css("outline", "none");
});

// Window is resized.
$(window).resize(function () {
    "use strict";

    resetDisplay();
});

function resetDisplay() {
    "use strict";

    // Reset the display.
    AquaThiefGame.resetDisplay();
};

// Prevent scrolling when moving.
$(document).on("touchmove", function (e) {
    "use strict";
    e.preventDefault();
});
