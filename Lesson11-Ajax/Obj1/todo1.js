
//define variable to hold the JSON data
var data;

//start main function ////////
window.onload = init;

function init() {
    //function that gets the todo data from the json file
	getMyToDoData();
	 $("#accordion").accordion({
            collapsible: true,
            header: "> div > ul#todoList > li"
        }).sortable({
            axis: "y",
            handle: "h1"
        });
	
}

//end main function ////////

//fetch JSON data
function getMyToDoData () {
    $.get("todo.json", function(getTodoData) {
        console.log("Data loaded successfully");
        data = getTodoData;
        console.log(data);
		//add todos to page
		addTodosToPage(data);
		$("#todoList li").addClass("ui-widget-content");
    }, "json");    
}

//add todo items to page
function addTodosToPage(data) {
    for (var i = 0; i <data.length; i++) {
	//select the ul element we want to add <li>'s to
	$("ul#todoList").each(function()	{
		console.log($(this));
		$(this).append("<li>" +data[i].who + " needs to " + data[i].task + " by " + data[i].dueDate);
	});
};
	
};

   
