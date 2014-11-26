//NOTES FOR CHANGES ON11.25.2014
//NEED TO ADD IN FEATURE TO CHANGE COLOR OF MAP CIRCLES DEPENDING ON SIZE
//AS THE CIRCLES CHANGE SIZE THEY CHANGE COLOR
//reference for requirement of colors here: https://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/Map1.png

//1. default smallest circle color at start is fine as is (light blue small circle, #add2f1
//2. next larger circle is rgb(aeb6ff) (light purple/blue)
//3. next step up is rgb(edb2ff) (light purple)
//4. last largest circle step up is ffc161 (light orange)

///////////////////start of main function /////////////

$(document).ready(function() {
//make a call to the map data in eu.json and store in a variable ('data') //
//define variable to hold json data
var data;
//define multiplier which is used by slider to change size of point on screen
var multiplier = 1;
//define variable to hold the color of the map circle, based on size user selects from slider
//set initial color, for the smallest size circle (multiplier = 1)
var circleColor = "#add2f1";

//get json data
$.getJSON("eu.json")
	.done(function(getData)	{
		console.log("data loaded successfully");
		data = getData;
		//call initiation function to make initial plot of data on map
		plotDataPoints(data,multiplier,circleColor);
		//call the callbackfunction to add slider functionality for user that also 'callsback the plotDataPoints function
		addSlider(data,multiplier,circleColor);
	})
	.fail(function()	{
		alert("!! error - couldn't load graph data!!");
	});
	
});

///////////////////end of main function //////////////

//function to set up slider
//basically after the initial set up by the plotDataPoints() function, this addSlider function
//does the rest of the work, taking values from user's slider choices and using those multiplier values
//to pass into that plotDataPoints() function we called on initiation
function addSlider (data,multiplier,circleColor)   {
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
		//reset any colors of circles already set previously back to default color
		circleColor = '#add2f1';
		//figure out circle color based on multiplier
		if (multiplier ==2)	{
			circleColor = '#aeb6ff'
		}
		if (multiplier == 3)	{
			circleColor = '#edb2ff'
		}
		if (multiplier == 4)	{
			circleColor = '#ffc161'
		}
		if (multiplier == 5)	{
			circleColor = '#ef4c15'
		}
		if (multiplier == 6)	{
			circleColor = '#ef1515'
		}
		if (multiplier >= 7)	{
			circleColor = '#380000'
		}
		//now go ahead and replot the data points again 
		//using the multiplier from the slider
		plotDataPoints(data,multiplier,circleColor);
      }
    });
}

//function to plot each point on map
//this function chains the displayDetails() function that is used provide features on user hover over 
//data points we plot on the map
function plotDataPoints(data,multiplier,circleColor)	{
	
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
			borderRadius: myRate,
			backgroundColor:circleColor
		})
	//end of .each(function(i) loop
	})
}
//function called from the plotDataPoints() function that handles rollever events,
//displaying data in text boxes next to data points, up in the employment rate/slider box
//and also to change hover styling/colors on the map points/circles

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
