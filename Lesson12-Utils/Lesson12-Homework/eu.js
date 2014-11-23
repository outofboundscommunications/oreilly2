
//start of main function /////////////

$(document).ready(function() {
//make a call to the map data in eu.json and store in a variable ('data') //
//define variable to hold json data
var data;
//define multiplier which is used by slider to change size of point on screen
var multiplier = 1;
//get json data
$.getJSON("eu.json")
	.done(function(getData)	{
		console.log("data loaded successfully");
		data = getData;
		//call function to make initial plot of data on map
		plotDataPoints(data,multiplier);
		//call function to add slider functionality
		addSlider(data,multiplier);
	})
	.fail(function()	{
		alert("!! error - couldn't load graph data!!");
	});
	
});

//end of main function //////////////

//function to make initial plot of data on map
//and also sets up slider
function addSlider (data,multiplier)   {
     $( "#slider" ).slider({
      range: "max",
      min: 1,
      max: 10,
	  step: 1,
      value: 1,
      slide: function( event, ui ) {
        //$( "#amount" ).val( ui.value );
		//console.log(ui.value);
		var multiplier = ui.value;
		console.log('the value of the multiplier is: ' + multiplier);
		//remove all the data points already plotted
		$(".dataPt").remove();
		//now go ahead and replot the data points again 
		//using the multiplier from the slider
		plotDataPoints(data,multiplier);
      }
    });
}

//function to plot each point on map
function plotDataPoints(data,multiplier)	{
	$(data).each(function(i)    {
		//create div which is the data point on map for each country
		//store country and rate in variables to use later
		var myCountry = data[i].country;
		//store data.rate (unemployment rate) - it will be used as the width of the div (circle)
		//data.rate*multiplier = size of circle
		var myRate = data[i].rate*multiplier;
		//$(".dataPt").remove();
		//create the circle
		$("<div " + "data-country=" + myCountry + " data-rate=" + data[i].rate + "/>" + "</div>")
		//$("<div " + "data-country=" + myCountry + "/>" + "</div>")
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
	//end of .each(function(i) loop
	})
}
function displayDetails(evt,data)   {
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
	$("#detail span span").remove();
	
	//now for the active div being hovered upon, add that 'dataPtHover'class
	$(this).addClass("dataPtHover");
	//now go ahead and add the currently active/hover country name as text next to the data point
	$(this).append("<p>"+ $(this).attr("data-country") + " (2011)" + "</p>");
	$("div.dataPtHover p").addClass("dataDetail");
	
	//now go ahead and add the currently active/hover country unemployment data in the detail box at top of page
	var myUnempRate = $(this).attr("data-rate");
	console.log('the unemplRate is: ' + myUnempRate);
	$("#detail span").append("<span>" + "&nbsp;" + myUnempRate + "</span>");
	
	//end displayDetails(evt)
}
