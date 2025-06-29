/* ----------------------------------

Name: custom.js

------------------------------------- */


/*====================================================


	Table of Contents
	
		01. Loading Screen
		
		02. Scroll to Top
*/



jQuery(document).ready(function($) {
	"use strict";

/*======================

	01. Loading Screen

========================*/

	setTimeout(function(){
		$('body').addClass('loaded');
	}, 0);
	
/*======================

	02. Scroll to Top

========================*/

	$(window).scroll(function() {
			50 <= $(this).scrollTop() ? $("#return-to-top, #return-to-top-2").fadeIn(200) : $("#return-to-top, #return-to-top-2").fadeOut(200)
		}), $("#return-to-top, #return-to-top-2").on("click", function() {
			$("body,html").animate({
			scrollTop: 0
		}, 500)
	});
	
	
});