// JavaScript Document

$(document).ready(function() {
    init();
}); 

var init = function() {
    $("div").css("border-width", "2%");
    $("div").css("border-style", "solid");
    $("div").css("border-color", "black");
	$("div").mouseover(function() {
        var borderWidth = $("div").css("border-width");
		var borderWidthValue = parseInt(borderWidth);
		alert('the value of the width is: ' + borderWidth);
        borderWidthValue = borderWidthValue + 2;
        $("div").css("border-width", borderWidthValue); 
        borderWidth = $("div").css("border-width");  // or "border-top-width"
        $("div").html("My border width is: " + borderWidth);
    });
}; 