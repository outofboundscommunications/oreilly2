$(document).ready(function() {
    var $popover = $("div#popover");
    $popover.hide();
	$("div").not("#popover").not("#four").each(function() {
        $(this).append("<ul></ul>");
        $("ul", this).append("<li>Width: " + $(this).width() + "</li>");
        $("ul", this).append("<li>Height: " + $(this).height() + "</li>");
        $("ul", this).append("<li>Position: " + $(this).position().left + ", " + $(this).position().top + "</li>");
        $("ul", this).append("<li>Offset: " + $(this).offset().left + ", " + $(this).offset().top + "</li>");
    });

    $("div#four").hover(function(evt) {
        $popover.empty();
        $popover.append("<ul></ul>");
        $("ul", $popover).append("<li>Width: " + $(this).width() + "</li>");
        $("ul", $popover).append("<li>Height: " + $(this).height() + "</li>");
        $("ul", $popover).append("<li>Position: " + $(this).position().left + ", " + $(this).position().top + "</li>");
        $("ul", $popover).append("<li>Offset: " + $(this).offset().left + ", " + $(this).offset().top + "</li>");

        $popover.css({ top: evt.pageY - 10, left: evt.pageX + 10 }).toggle();
    });
});