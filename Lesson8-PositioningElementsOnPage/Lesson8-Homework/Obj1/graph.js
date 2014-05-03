$(document).ready(function() {

    var data = [
        [0,1,9735380],
        [0,2,9310714],
        [5,1,10552146],
        [5,2,10069564],
        [10,1,10563233],
        [10,2,10022524],
        [15,1,10237419],
        [15,2,9692669],
        [20,1,9731315],
        [20,2,9324244],
        [25,1,9659493],
        [25,2,9518507],
        [30,1,10205879],
        [30,2,10119296],
        [35,1,11475182],
        [35,2,11635647],
        [40,1,11320252],
        [40,2,11488578],    
        [45,1,9925006],
        [45,2,10261253],
        [50,1,8507934],
        [50,2,8911133],
        [55,1,6459082],
        [55,2,6921268],
        [60,1,5123399],
        [60,2,5668961],
        [65,1,4453623],
        [65,2,4804784],
        [70,1,3792145],
        [70,2,5184855],
        [75,1,2912655],
        [75,2,4355644],
        [80,1,1902638],
        [80,2,3221898],
        [85,1,970357],
        [85,2,1981156],
        [90,1,336303],
        [90,2,1064581]
    ];

    $("body").append("<h1>Population Distribution by Age</h1>");
    $("body").append("<div class=\"container\"></div>");
    $("<div>2000</div>").appendTo("div.container").addClass("year").css({
        position: "relative",
        top: 10,
        left: 10
    });
    $("<div></div>").appendTo("div.container").addClass("dataContainer").css({
        position: "absolute",
        top: 40,
        left: 40,
        width: $("div.container").width() - 80,
        height: $("div.container").height() - 80
    });
	
	console.log('the length of the data array is: ' + data.length);
	// function to create x and y axes
	addAxes();
	// function to add the data
	addData();
    
	// function to add legend to the graph
	addLegend();
	
	function addLegend()	{
		// select the div with class 'year' and store it's left position in variable
		var divClassYearLeft = $("div.year").position().left;
		console.log('div class year left is: ' + divClassYearLeft);
		// select the div with class 'year' and store it's width in variable
		var divClassYearWidth = $("div.year").width();
		console.log('the width of the div.year is: ' +  divClassYearWidth);
		$("<div>x axis: age, \<br\/\>y axis: population</div>").appendTo("div.year").addClass("legend").css({
                position: "absolute",
                top: 10,
				// add the width of an "X" <span> element to the left position here;
                left: divClassYearLeft + 0.65* divClassYearWidth
            });
	}
	
    function addAxes() {
        // create the x axis labels
		// compute width of the labels for x axis
		var numPoints = data.length / 2;
        var ptWidth = $("div.dataContainer").width() / numPoints/2;
		// get the left position of the "dataContainer" <div> and store it in a variable
		// position the labels for the x axis based on the left position of this <div>
        var dataContainerLeft = $("div.dataContainer").position().left;
        //loop over all the data points, we increase i by two each time, to create just one label per age group (for both males and females)
		for (var i = 0; i < data.length; i += 2) {
            var dataPt = data[i];
			// compute the left position for the label
            var left = dataContainerLeft + (ptWidth * i);
			// create a new span element to contain the label
            $("<span>" + dataPt[0] + "</span>").appendTo("div.container").addClass("X").css({
                position: "absolute",
                bottom: 20,
				// add the width of an "X" <span> element to the left position here;
                left: left + $("span.X").width()
            });
        }
		// create the y axis labels
		// find the maximum population for all the age groups (just over 11 million), and then get the magnitude of this number (11) 
		// using the findMax() and findMag() helper functions
        var max = findMax();
		console.log('the maximum population value is: ' + max);
        var magMax = findMag(max);
		console.log('the magnitude of the population is: ' + max);
		//  compute how tall each label should be
        var ptHeight = $("div.dataContainer").height() / (magMax+1);
        var dataContainerTop = $("div.dataContainer").position().top;
        var left = $("div.dataContainer").width() + 50;
        for (var i = 0; i <= magMax; i++) {
            var top = dataContainerTop + (ptHeight * i);
            $("<span>" + (magMax-i) + "M</span>").appendTo("div.container").addClass("Y").css({
                position: "absolute",
                top: top + $("span.Y").height(),
                left: left
            });
        }
    }
    // function to add data points to plot
	  function addData() {
        // compute the width of each bar
		var numPoints = data.length / 2;
        var ptWidth = $("div.dataContainer").width() / numPoints / 2;
		// find the maximum population value
        var max = findMax();
        var dataContainerLeft = $("div.dataContainer").position().left - 40;
        // loop thru all the data points
		for (var i = 0; i < data.length; i++) {
            var dataPt = data[i];
            var sexClass;
            var pos;
            if (dataPt[1] == 1) {
                sexClass = "M";
                pos = i;
            } else {
                sexClass = "F";
                pos = i-1;
            }
            var left = dataContainerLeft + (ptWidth * pos);
            var barHeight = (dataPt[2] * $("div.dataContainer").height()) / max;
            $("<div></div>").appendTo("div.dataContainer").addClass("dataPoint").addClass(sexClass).css({
                position: "absolute",
                width: ptWidth,
                height: barHeight,
                bottom: 0,
                left: left
            });
        }
    }
	
    function findMax() {
        var max = 0;
        for (var i = 0; i < data.length; i++) {
            var dataPt = data[i];
            if (dataPt[2] > max) {
                max = dataPt[2];
            }
        }
        return max;
    }
    
    function findMag(num) {
        while (num > 1) {
            num = num / 10;
        }
        num = num * 100;
        num = Math.floor(num);
        return num;
    }

});