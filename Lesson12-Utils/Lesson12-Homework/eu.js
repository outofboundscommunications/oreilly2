//with this v3 i am trying to get slider to modify style data within each element

$(document).ready(function() {

//define variable to hold json data
var data;
//define variable to hold slider selection, this is the value you are going to multiply the data points
//by to increase/decrease them with the slider movement
var multiplier;

//call function to get json data
getEUJsonData();

//define slider function
$(function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 10,
	  step: 1,
      value: 1,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		//console.log(ui.value);
		var multiplier = ui.value;
		//call function that updates the data point size to the value user selected from slider
		updateDataPoints(multiplier);
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
	
  });

});

function updateDataPoints(multiplier)	{
	console.log(data);
	console.log('update data points to this value:' + multiplier);
	$("div.dataPt").each(function(i)	{
		//console.log('the current data rate is: ' + data[i].rate);
		//console.log('the new data rate is: ' + parseFloat(data[i].rate)*parseFloat(multiplier));
		//replace current with new value
		
		//data[i].rate =parseFloat(data[i].rate)*parseFloat(multiplier);
		console.log('hello');
		var theNewSize = parseFloat(data[i].rate)*parseFloat(multiplier/2);
		$(this).css("borderRadius",theNewSize);
	});
	//now call function to replot these resized data points on map again
	plotOnMap();
	
}

//function to fetch JSON data and then display
function getEUJsonData () {
    //fetch json data using jquery
	$.getJSON("eu.json", function(getData) {
    console.log("Data loaded successfully");
	//store json data
    data = getData;
    //plot the json data on the map
    plotOnMap();
    });    
}

function plotOnMap ()   {
    $(data).each(function(i)    {
        //create div
        //store country and rate in variables to use later
        var myCountry = data[i].country;
		//store data.rate (unemployment rate) - it will be used as the width of the div (circle)
        var myRate = data[i].rate;
		//to create a circle, use the border-radius propery and set equal to width of div/2
		var myBorderRadius = myRate/2;
		//create the div to add to the map as a circle
        $("<div " + "data-country=" + myCountry + " data-rate=" + myRate + "/>" + "</div>")
		//select the map div, add the data point div and add the classes to style that data point
		.appendTo("div#map").addClass("dataPt")
		//add the hover event to: (1) display the data point details in the details box at top of page and
		//(2) display the country name just to the side of the data point
        .bind("hover", displayDetails,displayDetails)
		//add the styling to the data point div that positions the data point on the correct location on the map
		.css( {
            position:"absolute",
            left: data[i].x,
            top: data[i].y,
            width: myRate,
            height: myRate,
            borderRadius: myBorderRadius
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
               