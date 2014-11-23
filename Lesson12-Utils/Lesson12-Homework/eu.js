
$(document).ready(function() {
//1. make a call to the map data in eu.json and store in a variable ('data') //
//define variable to hold json data
var data;
//define multiplier which is used by slider to change size of point on screen
var multipler = 1;
//1a. get json data
$.getJSON("eu.json")
	.done(function(getData)	{
		console.log("data loaded successfully");
		data = getData;
		plotOnMap();
	})
	.fail(function()	{
		alert("!! error - couldn't load graph data!!");
	});

function plotOnMap ()   {
    $(data).each(function(i)    {
        //create div which is the data point on map for each country
        //store country and rate in variables to use later
        var myCountry = data[i].country;
		//store data.rate (unemployment rate) - it will be used as the width of the div (circle)
		//data.rate*multiplier = size of circle
        var myRate = data[i].rate*multipler;
		//create the circle
        $("<div " + "data-country=" + myCountry + " data-rate=" + myRate + "/>" + "</div>")
		//select the map div, add the data point div and add the classes to style that data point
		.appendTo("div#map").addClass("dataPt")
		//add the hover event to: 
		//(1) display the data point details in the details box at top of page and
		//(2) display the country name just to the side of the data point
        .bind("hover", displayDetails,displayDetails)
		//add the styling to the data point div that positions the data point on the correct location on the map
		.css( {
            position:"absolute",
            left: data[i].x,
            top: data[i].y,
            width: myRate,
            height: myRate,
            borderRadius: myRate
        })
    })

}

function displayDetails(evt)   {
	//this function does two things:
	//(1) display the data point details in the details box at top of page and
	//(2) display the country name just to the side of the data point
	
	//remove all the 'dataPtHover' classes
	$("div.dataPt").removeClass("dataPtHover");
	//remove all the 'dataDetail' classes
	$("p").removeClass("dataDetail");
	//remove any country names already displayed as a paragraph next to a data point
	$(".dataPt p").remove();
	//select the detail text box area at top of page left, remove any text there already
    $("#detail p").remove();
	
	//now for the active div being hovered upon, add that 'dataPtHover'class
	$(this).addClass("dataPtHover");
	//now go ahead and add the currently active/hover country name as text next to the data point
    $(this).append("<p>"+ $(this).attr("data-country") + " (2011)" + "</p>");
	$("div.dataPtHover p").addClass("dataDetail");
	
	//now go ahead and add the currently active/hover country unemployment data in the detail box at top of page
    $("#detail span").append("<p>"+ $(this).attr("data-rate") + "</p>");
}
});
