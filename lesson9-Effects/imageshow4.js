$(document).ready(function ()  {

//declare timer variable	
var timer;

//Immediately after declaring the timer variable, how might you:

//Hide all images that do not have the .top class?
    $hiddenImages = $("img:not(.top)");
    $hiddenImages.hide();
    console.log('the images hidden are: ' + $hiddenImages.attr("src"));

//Set the caption text to the text from the alt attribute of the image with the .top class
    //capture current image
    var $currentImage = $("img.top");
    console.log('the active image is: ' + $currentImage.attr("src"));
    //select the alt image tag from the active image
    $captionText = $currentImage.attr("alt");
    console.log('the image caption is: ' + $captionText);

//Capture the input "button", using an if condition inside its anonymous function 
//to determine whether the value is stop or start?  
    //select the button 
    $myButton = $(":button");
    $myButton.click(function() {
         if($myButton.attr('value') == 'start')  {  
              console.log('start');
              //run function to show image
               showImage();
              //set button value to 'stop'
              $myButton.attr('value','stop');
          }
         else {
             console.log('stop');
             //clear the timer
             clearTimeout(timer);
             //set button value to 'start'
             $myButton.attr('value','start');
             }                                
     });
    
});

//if it is start, run the function to show the next image (and set the value of the button to stop)?
//if it is stop, clear the timer(and set the value of the button to start)?

//create a function to show the next image
function showImage() {
   //select all the images
    $theImages = $("img");
    $firstImage = $theImages.first();
    $nextImage =  $theImages.next();
    $lastImage =  $theImages.last();
    console.log($theImages);
    console.log('the first image is: ' + $firstImage.attr("src"));
    console.log('the next image is: '  + $nextImage.attr("src"));
    console.log('the last image is: ' +  $lastImage.attr("src"));
    //inside that function, collect the image with the class .top
    $topImage = $("img.top");
    console.log ('top image is: ' + $topImage.attr("src"));
   //if the top image is the .last() image, then the .next() image should be the .first() image! 
   if ($topImage.attr('src') == $lastImage.attr('src')) {
       $topImage.hide();
       $topImage.removeClass("top");
       $topImage.addClass("hidden");
       $firstImage.show();
       $firstImage.removeClass("hidden");
       $firstImage.addClass("top");
   }
   //Otherwise, it's the .next() image (the one that follows the top image).
    else {
        $topImage.hide();
        $topImage.removeClass("top");
        $topImage.addClass("hidden");
        $nextImage.show();
        $nextImage.removeClass("hidden");
        $nextImage.addClass("top");
    }

//After you've checked which image is top/first/last how might you 
//use methods such as .fadeOut(), .fadeIn(), .show(), and .hide() to control when the caption and the 
//images appear/disappear?
/*
 Since .fadeOut() can take an anonymous function, how might that function be used on the top image to:
- hide the top image
- remove the top class/add the hidden class, so the top image is no longer the top; and it's now hidden
- and for the next image, do the reverse
- be sure the .text() of the caption is equal to the "alt" attribute of the next image

At the very end of showImage(), how might you use .setTimeout() to have showImage() call itself every two seconds?
//
*/
    
}