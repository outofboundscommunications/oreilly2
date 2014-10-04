/**
 * 
 * When getEUJsonData() is .done() loading, how might you call a function which sets up the slider using the .slider() 
 * widget? How might this function select the #slider element with a jQuery selector and set up all the properties of that slider, 
 * including the function which runs when it slides?
http://api.jqueryui.com/slider/

When you .hover() over a data point, how might you use one function to change the .text() of the span in #detail, 
and another function to change it back?
http://api.jquery.com/hover/

-John

**/

$(document).ready(function() {

//variable to hold json data
var data;
//get json data
getEUJsonData();
});


//function to fetch JSON data and then display
function getEUJsonData () {
    //fetch json data using jquery
	$.get("eu.json", function(getData) {
    console.log("Data loaded successfully");
	//store json data
    data = getData;
    //do something on data
    plotOnMap();
    }, "json");    
}
   

function plotOnMap ()   {
    $(data).each(function(i)    {
        //create div
        //store country and rate in variables to use later
        var myCountry = data[i].country;
        var myRate = data[i].rate;
        $("<div " + "data-country=" + myCountry + " data-rate=" + myRate + "/>" + "</div>")
        .appendTo("div#map").addClass("dataPt").addClass("dataPtHover")
        .bind("mouseover", displayDetails).css( {
            position:"absolute",
            left: data[i].x,
            top: data[i].y,
            width: data[i].rate,
            height: data[i].rate,
            borderRadius: data[i].rate
        })
        .bind("hover", displayCountryName);
        
    })
}

function displayDetails(evt)   {
    //select the detail text box area at top of page left
    //add remove any text if already there
    console.log($(this));
    $("#detail p").remove();
    $("#detail span").append("<p>"+ $(this).attr("data-rate") + "</p>");
    //var countryName = $(this).attr("data-country");
    //alert(countryName);
}

function displayCountryName(evt)   {
    console.log($(this));
    //remove country names already displayed
    $("p").remove();
    //add text
    $(this).append("<p>"+ $(this).attr("data-country") + "</p>");

}
                 