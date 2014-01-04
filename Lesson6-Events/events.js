$(document).ready(function() { 
    $("div.box").hover(changeColor, changeColor); 
    $("div.box").click(showPosition);
	$("body").bind("keydown", move);
}); 
function changeColor() {
    $(this).toggleClass("highlight");
} 

function showPosition(e) {
    $("span", this).text(e.pageX + ", " + e.pageY);
}
function move(e) {
    console.log(e.which);
	var margin = $("div.container").css("margin-top"); // returns NUMpx
    margin = parseInt(margin);
    if (e.which == 40) { // move down
        margin = margin+20;
        $("div.container").css("margin-top", margin);
    } else if (e.which == 38) { // move up
        if (margin > 10) {
            margin = margin-20;
            if (margin < 10) {
                margin = 10;
            }
            $("div.container").css("margin-top", margin);
        }
    }
}