
$(document).ready(function ()  {

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

//select caption div
 var $myCaptionDiv = $("div#caption");
 console.log($myCaptionDiv);
    ($myCaptionDiv).text("hello");
//$("div#hello").html("Hello, world!!");


}); 