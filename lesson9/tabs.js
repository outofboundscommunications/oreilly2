$(document).ready(function() {
    // add colors to the tabs
    $("ul#tabs li a[href='about']").parent().css("background-color", "#E60000");
    $("ul#tabs li a[href='solutions']").parent().css("background-color", "#008AE6");
    $("ul#tabs li a[href='blog']").parent().css("background-color", "#7ACC29");
    $("ul#tabs li a[href='contact']").parent().css("background-color", "#5C8A8A");

    // hide all the tabs except the home tab
    $("div#content div").hide();
    $("div#content div#home").show();
    $("ul#tabs li.selected").css("top", 20);

    // click handler for all tabs
    $("ul#tabs li a").click(function(e) {
        var $link = $(this);
        // prevent the a link from causing a page load
        e.preventDefault();
        // get the currently selected tab, and associated div
        var selectedTabName = $("ul#tabs li.selected a").attr("href");
        var $selectedDiv = $("div#" + selectedTabName);
        // get the newly selected tab, and associated div
        var tabName = $(this).attr("href");
        var $div = $("div#" + tabName);
		console.log('the tab just clicked is: ' + tabName);
        
        $div.css("z-index", 1);
        $div.slideDown("slow", function() {
            $selectedDiv.hide();
            $div.css("z-index", 0);
        });

       $("ul#tabs li.selected").animate({
            top: 0
        });
        $("ul#tabs li.selected").removeClass("selected");

        $(this).parent().animate({
            top: 20
        });
        $(this).parent().addClass("selected");
    });
});  