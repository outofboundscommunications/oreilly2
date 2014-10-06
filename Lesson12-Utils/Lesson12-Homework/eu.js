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
    //plot the json data on the map
    plotOnMap();
    }, "json");    
}
   

function plotOnMap ()   {
    $(data).each(function(i)    {
        //create div
        //store country and rate in variables to use later
        var myCountry = data[i].country;
        var myRate = data[i].rate;
		//create the div to add to the map as a circle
        $("<div " + "data-country=" + myCountry + " data-rate=" + myRate + "/>" + "</div>")
		//select the map div, add the data point div and add the classes to style that data point
        .appendTo("div#map").addClass("dataPt").addClass("dataPtHover")
		//add the hover event to: (1) display the data point details in the details box at top of page and
		//(2) display the country name just to the side of the data point
        .bind("hover", displayDetails)
		//add the styling to the data point div that positions the data point on the correct location on the map
		.css( {
            position:"absolute",
            left: data[i].x,
            top: data[i].y,
            width: data[i].rate,
            height: data[i].rate,
            borderRadius: data[i].rate
        })
		//add the hover event to display the country name just to the side of the data point
       //.bind("mouseover", displayCountryName);
        
    })
}

function displayDetails()   {
    //this function does two things:
	//(1) display the data point details in the details box at top of page and
	//(2) display the country name just to the side of the data point
	
	//select the detail text box area at top of page left
    //remove any text there already
    $("#detail p").remove();
	//now go ahead and add the currently active/hover country unemployment data in the detail box at top of page
    $("#detail span").append("<p>"+ $(this).attr("data-rate") + "</p>");
	
	//remove any country names already displayed as a paragraph next to a data point
	$(".dataPt p").remove();
	//now go ahead and add the currently active/hover country name as text next to the data point
    $(this).append("<p>"+ $(this).attr("data-country") + "</p>");

}
               