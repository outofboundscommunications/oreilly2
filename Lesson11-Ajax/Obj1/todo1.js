
//define variable to hold the JSON data
var data;

//start main function ////////
window.onload = init;

function init() {
    //function that gets the todo data from the json file
	getMyToDoData();
	 $(document).ready(function() {
        $("#accordion").accordion({
            collapsible: true,
            header: "> div > h1"
        }).sortable({
            axis: "y",
            handle: "p"
        });
    });
	
}

//end main function ////////

//function to fetch JSON data and then display
function getMyToDoData () {
    //fetch json data using jquery
	$.get("todo.json", function(getTodoData) {
        console.log("Data loaded successfully");
	//store json data in global variable called 'data'
        data = getTodoData;
	//call function to add todos to page
		addTodosToPage(data);
		//$("#todoList li").addClass("ui-widget-content");
    }, "json");    
}

//add todo items to page, inside accordion structure
function addTodosToPage(data) {
    //select the accordion div so we can add all the child divs
	var $myAccordionDiv = $("div#accordion");
	//define Done variable. if todo done field is "true" set this variable to "done" and it will display
	//if the done field is 'false', then we just leave this variable with the text value of null so it won't show in list
	//var Done = "";
	//loop through all the todos in the data object
	for (var i = 0; i <data.length; i++) {
		console.log(data[i].done);
		/*if (data[i].done="true")	{
			Done="(DONE)";
		}
		else	{
			Done=" ";
		}*/
		
		if (data[i].done==true)	{
			Done="(DONE)";
		}
		else	{
			Done=" ";
		}
		$("<div></div>").appendTo("div#accordion").addClass("group").addClass("ui-widget-content").append("<p>" +data[i].who + " needs to " + data[i].task + " by " + data[i].dueDate + " " + Done + "</p>");
	};

};

   
