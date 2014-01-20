
$(document).ready(function()	{
	//TOP MENU FUNCTIONS //
	
	//The first thing we have to do is bind event handlers to our first level menu items (our first level li nodes)
	//capture a mouseover event over a li in the top menu, the function openSubMenu is called.
	$("ul.menu > li").bind('mouseover',openSubMenu);
	//capture a mouseout event over an li in the top menu, the function closeSubMenu is called.
	$("ul.menu > li").bind('mouseout', closeSubMenu);
	
	//SUBMENU FUNCTIONS //
	//capture a click on any li in an undordered list with the class "submenu"
	$("ul.submenu > li").on('click', addColorShape);
	
	//when the mouse rolls over the list item, the function looks for an unordered list within it. If one is found, it sets the style 
	//property visibility to visible.
	function openSubMenu(evt) {
		$(this).find('ul').css('visibility', 'visible');
		//var $this = $(this);
		//console.log("this is: " + $this.text());
	};
	
	//This closeSubMenu function just does the opposite of the openSubMenu function, it sets the visibility style element of the 
	//sub level list items to hidden.
	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');	
	};
	
	function addColorShape(evt)	{
		var $this = $( this );
		console.log($this);
		var $parentId = $this.parent().attr("id");
		console.log('the id of the parent <ul> item is: ' + $parentId);
		//check and see if the (parent) top menu item is color or shape
		//if the parent item is color, then color the div with item they clicked on
		if ($parentId=="color")	{
			var $colorText = $this.text();
			console.log ('the text value of the submenu <li> you clicked on is: ' + $colorText);
			var $div = $("div");
			$div.css("background-color",$colorText);
		}
		//if the parent item is shape, the change the shape of the div
		if ($parentId=="shape")	{
			var $shapeText = $this.text();
			console.log ('the text value of the submenu <li> you clicked on is: ' + $shapeText);
			var $div = $("div");
			//if they clicked on the circle menu item, use css to make the div look like a circle
			if ($shapeText == "Circle")	{
				$div.css("border-radius","50%");
			}
			if ($shapeText == "Square")	{
				$div.css("border-radius","0%");
			}
		}
	};

});