$(document).ready(function () {

    var timer;
    
    var $rotator = $("#images");
    
    var $button = $("input")
    
    Rotate();
    
    $button.attr("value","stop");

    function Rotate() {
        $button.click(function() {
            console.log('hello');
            clearTimeout(timer);
            $button.attr("value","start");
        });
        
        var $current = $rotator.find("img.top");
        var $next = $current.next();
        if ($next.length == 0) {
            $next = $rotator.find("img:eq(0)");
        }
        $current.removeClass("top");
        $next.removeClass("hidden").addClass("top"); 
        timer = setTimeout(function() { Rotate(); }, 3000);
        
    }
    
    
    
});