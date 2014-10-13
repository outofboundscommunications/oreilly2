//with this v3 i am trying to get slider to modify style data within each element

$(document).ready(function() {

//variable to hold json data
var data;
//variable to hold slider selection
var selection;

//get json data
getEUJsonData();
   
$(function() {
    $( "#slider-range-max" ).slider({
      range: "max",
      min: 1,
      max: 10,
      value: 1,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
		//console.log(ui.value);
		var selection = ui.value;
		//update the data point size to the value user selected from slider
		updateDataPoints(selection);
      }
    });
    $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
	
  });

});

function updateDataPoints(selection)	{
	console.log(data);
	console.log('update data points to this value:' + selection);
	$(data).each(function(i)	{
		console.log('the current data rate is: ' + data[i].rate);
		console.log('the new data rate is: ' + parseFloat(data[i].rate)*parseFloat(selection));
		//replace current with new value
		data[i].rate =parseFloat(data[i].rate)*parseFloat(selection);
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
        var myRate = data[i].rate;
		//create the div to add to the map as a circle
        $("<div " + "data-country=" + myCountry + " data-rate=" + myRate + "/>" + "</div>")
		//select the map div, add the data point div and add the classes to style that data point
        //.appendTo("div#map").addClass("dataPt").addClass("dataPtHover")
		.appendTo("div#map").addClass("dataPt")
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
            borderRadius: 50
        })
		//add the hover event to display the country name just to the side of the data point
       //.bind("mouseover", displayCountryName);
        
    })
}

function displayDetails(evt)   {
	//this function does two things:
	//(1) display the data point details in the details box at top of page and
	//(2) display the country name just to the side of the data point
	$("div.dataPt").removeClass("dataPtHover");
	$(this).addClass("dataPtHover");
	//$("div.dataPt").addClass("dataPtHover");
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
               