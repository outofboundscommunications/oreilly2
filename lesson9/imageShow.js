$(document).ready(function() {
 
    // create click handler for link so we can manually click thru
    // each image
    $("input").click(function() {
        //select the image with the 'top' class
        $myTopImage = $("div #images img.top");
        console.log ($myTopImage);
        $myTopImage.removeClass("top").addClass("hidden");
        $myNextImage = $myTopImage.next();
        if ($myNextImage.length == 0) {
            $myNextImage = $rotator.find("img:eq(0)");
        }
        console.log ($myNextImage);
        $myNextImage.removeClass("hidden").addClass("top");
     });
    
});