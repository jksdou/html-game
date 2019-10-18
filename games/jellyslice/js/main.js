if (!window.requestAnimationFrame) {
	window.requestAnimationFrame = (function() {
		"use strict";
		return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
}
$(document).on("pageinit", function() {
	"use strict";
	$(".ui-loader").hide();
	$("body").css("overflow", "hidden");
	$("body > *").css("outline", "none");
	JellySliceGame.initialize();
});
$(window).resize(function() {
	"use strict";
	JellySliceGame.resetDisplay();
});
$(document).on("touchmove", function(e) {
	"use strict";
	e.preventDefault();
});