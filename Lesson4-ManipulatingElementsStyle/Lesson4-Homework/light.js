// javascript for styling

$(document).ready(function() {
    init();
}); 

var init = function() {
    $("div").css("border-width", "5px");
    $("div").css("border-style", "solid");
    $("div").css("border-color", "white");
	$("div").css("margin-top", "20px");
	$("div").css("box-shadow", "2px 2px 9px grey");
	
	//click event to toggle lightswitch class on or off
	//select the lightswitch div when it is clicked
	$("div#lightswitch").click(function() {
		//toggle the class on or off
		$(this).toggleClass("on");
		//if the class is on
		if ($(this).hasClass("on"))	{
			//remove the flipped class (flips the light switch to look on
			$(this).removeClass("flipped");
			//show the image/art
			$("div#art").show();
			//make the body of the page white (its bright, light switch is on)
			$("body").css("background-color","white");
			}
		//if the class is off (light switch off)
		else	{
			//add the flipped class (flips the light switch to look off)
			$(this).addClass("flipped");
			//hide the image/art
			$("div#art").hide();
			//make the body of the page black (its dark, light switch off)
			$("body").css("background-color","black");
		}
			
	});

}; 







