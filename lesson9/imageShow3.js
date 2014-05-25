$(document).ready(function ()  {

//declare timer variable	
var timer;

//select div containing images
var $rotator = $(#images);

//select button for stopping animation
var $button = $(“input:button”);
var $stopButton = $button.attr( "value", “stop” );

//select button for restarting animation
var $startButton = $button.attr( "value", “start” );

//call function to start animation
Rotate();

//////  define rotate function  ////////

function Rotate() {
    //select the image that is currently active (class == ‘top’) that we want to hide
    var $current = $rotator.find("img.top");
    //select the next sibling which we want to display
    var $next = $current.next();
    //insert logic, in case at end of images, to set rotator back to first image
    if ($next.length == 0) {
        $next = $rotator.find("img:eq(0)");
        }
    //hide current image and display next image
    $current.removeClass("top");
    $next.removeClass("hidden").addClass("top"); 

    //call timer and callback
    timer = setTimeout(function() { 
    Rotate(); }, 3000);
    
    $button.click(function() {
        console.log('hello');
        clearTimeout(timer);
        $button.attr("value","start");
    });
}