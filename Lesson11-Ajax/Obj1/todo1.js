
//define array to hold the todo records we fetch from json data
var todos = new Array();


var data;

window.onload = init;
//when ready, call function that gets the todo data from the json file
function init() {
    getMyToDoData();
}

function getMyToDoData () {
    $.get("todo.json", function(getTodoData) {
        console.log("Data loaded successfully");
        data = getTodoData;
        console.log(data);
    }, "json");    
}


function parseTodoItems(todoJSON) {
    if (todoJSON == null || todoJSON.trim() == "") {
        return;
    }
    var todoArray = JSON.parse(todoJSON);
    if (todoArray.length == 0) {
        console.log("Error: the to-do list array is empty!");
        return;
    }
    for (var i = 0; i < todoArray.length; i++) {
        var todoItem = todoArray[i];
        todos.push(todoItem);
    }
    console.log("To-do array: ");
    console.log(todos);
}

function addTodosToPage() {
    var ul = document.getElementById("todoList");
    for (var i = 0; i < todos.length; i++) {
        var todoItem = todos[i];
        var li = document.createElement("li");
        li.innerHTML =
            todoItem.who + " needs to " + todoItem.task + " by " + todoItem.dueDate;
        ul.appendChild(li);
    }
}    
