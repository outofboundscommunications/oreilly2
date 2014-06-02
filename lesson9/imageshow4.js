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
    $firstImage = $theImages.first().attr("src");
    $nextImage =  $theImages.next().attr("src");
    $lastImage =  $theImages.last().attr("src");
    console.log($theImages);
    console.log('the first image is: ' + $firstImage);
    console.log('the next image is: '  + $nextImage);
    console.log('the last image is: ' +  $lastImage);
    //inside that function, collect the image with the class .top
    $topImage = $("img.top").attr('src');
    console.log ('top image is: ' + $topImage);
   //if the top image is the .last() image, then the .next() image should be the .first() image! 
   if ($topImage == $lastImage) {
       $topImage = $firstImage;
       console.log('the new top image is: ' + $topImage);
       
   }
   //Otherwise, it's the .next() image (the one that follows the top image).
    else {
        $topImage = $nextImage;
        console.log('the new top image is: ' + $topImage);
    }
    
//fade, or hide the caption?
//.show() the image which your condition determined to be next?
//fade or hide the top image, swapping the top and hidden classes on it and the next one?
//changing the caption text and showing it

//And how might that function call itself every 2 seconds or more (1 second is very brief)?
}