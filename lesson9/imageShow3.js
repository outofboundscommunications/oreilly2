
$(document).ready(function ()  {

//declare timer variable	
var timer;
//select parent div containing images
var $rotator = $("#images");

//select button 
var $button = $("input:button");

//select button for stopping animation
var $stopButton = $("input:button[value='stop']");

//select button for restarting animation
//var $startButton = $button.attr( "value", "start" );
var $startButton = $("input:button[value='start']");

//define click function on clicking start button
$startButton.click(function()	{
	Rotate();
});
//define click function on clicking stop button
$stopButton.click(function()	{
	console.log('hello i am in the stopButton click function');
	//stop the animation timer
	clearTimeout(timer);
	//relabel the button as 'start'
	$button.attr("value","start");
});


//////  define rotate function  ////////
function Rotate() {
  //change label on button to 'stop' 
  $button.attr("value","stop");
  //select the image that is currently active (class == ‘top’) that we want to hide
  var $current = $rotator.find("img.top");
  //select the next sibling which we want to display
  var $next = $current.next();
  //insert logic, in case at end of images, to set rotator back to first image
  if ($next.length == 0) {
	  $next = $rotator.find("img:eq(0)");
	  }
  //hide current image and display next image
  $current.removeClass("top").addClass("hidden");
  $next.removeClass("hidden").addClass("top"); 

  //call timer and callback
  timer = setTimeout(function() { Rotate(); }, 1000);

}

});