$(document).ready(function() {
    createLinks();
});

//using each() w/anonymous function
/*var createLinks = function() {
    $("a").each(function(i) {
		addLink(i,this);
    });
};*/

//using each() w/named function
var createLinks = function() {
   $("a").each(addLink);
};

var addLink = function(i,el) {
    console.log(el);
	$("section#links ul").append("<li>Link " + (i+1) + ": <a href=\"" +
        $(el).attr("href") + "\">" + $(el).text() +
            "</a></li>");
};