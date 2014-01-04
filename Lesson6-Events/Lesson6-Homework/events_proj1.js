// JavaScript Document
//we have three different event handlers here:


$(document).ready(function() {
	 $("div.box").click(changeColor); 
	 
});

	function changeColor() {
		$(this).toggleClass("highlight");
	}