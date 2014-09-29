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
        $("<div " + "data-country=" + myCountry + "/>" + "</div>").appendTo("div#map").addClass("dataPt").addClass("dataPtHover")
        .bind("mouseover", displayDetails).css( {
            position:"absolute",
            left: data[i].x,
            top: data[i].y,
            width: data[i].rate,
            height: data[i].rate,
            borderRadius: data[i].rate
        })
        
    })
}

function displayDetails()   {
    //alert("hello");
    var countryName = $(this).attr("data-country");
    alert(countryName);
}
                 