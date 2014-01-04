
$(document).ready(function()	{
	//The first thing we have to do is bind event handlers to our first level menu items (our first level li nodes)
	//This line of code defines when the mouse is moved over a li in the top menu, the function openSubMenu is called.
	$("ul.menu > li").bind('mouseover',openSubMenu);
	//This line of code define when the mouse is moved out of an li in the top menu, the function closeSubMenu is called.
	$("ul.menu > li").bind('mouseout', closeSubMenu);
	//bind event to click on submenu list item
	$("ul.submenu > li").on('click', addColorShape);
	
	//when the mouse rolls over the list item, the function looks for an unordered list within it. If one is found, it sets the style 
	//property visibility to visible.
	function openSubMenu() {
		$(this).find('ul').css('visibility', 'visible');
	};
	
	//This closeSubMenu function just does the opposite of the openSubMenu function, it sets the visibility style element of the 
	//sub level list items to hidden.
	function closeSubMenu() {
		$(this).find('ul').css('visibility', 'hidden');	
	};
	
	function addColorShape(evt)	{
		console.log(evt.target);
		var $this = $( this );
		console.log($this);
		console.log($this.text());
		console.log($this.parentElement());
	};

});