/*

Objective 1:
For this project, you'll going to create an image matching game. To play this game, you turn over two cards at a time and if they match, you win 2 points; if they don't match, you lose a point. If the images match, those cards stay turned over; if they don't match, the cards are placed face down again so you can't see what's on them. The trick is to remember where each card is so you can match!

At the completion of the game, every image in the board will be visible, and you will display the points in an alert for the user.

*/

/*

Your program needs to:

#################DONE 
1. Add each image to a random location, twice! You'll need to generate random locations for each image and then add the images to the correct <div> corresponding to that location in the page. You can think of the game board as a 4 x 3 grid. Each empty <div> in a "row" gets one image.
2. After adding the images to random locations so they fill up the game board grid, make sure the images are all "hidden" so you can't see them. This is like the cards being face down.
3. When you click on a card (a <div> element in a "row"), you'll make that image "visible" ("turn the card over"). 
4. If there are two images showing you'll compare the images (you can compare them by comparing their src attribute values). If the images are the same, then they match and those two images are then "done," and stay visible for the rest of the game.

5. If the images don't match, you need to make them both "hidden" again ("turn them back over," so they are face down). In order that this doesn't happen so quickly that you don't get to see the second card, you can do this after the user clicks on another card again.

################# TO DO
6. For each matching pair, you get two points. If you make an attempt to match and the images don't match, you lose a point.
7. Once all the cards are "done" (i.e., every image is visible, none are hidden), the game is over, and you can display an alert indicating that, along with the total number of points.
8. Once a game is done, you can play again by clicking on the "Play again" button. Clicking this button should remove all the existing images from the game board, and then re-place them on the game board in new random locations.

Hint: You can use the class "visible" to track which cards are turned over (the images are visible), "hidden" to track which cards are not turned over (the images are hidden), and "done" to track which cards have been matched successfully.

*/

$("document").ready(function(){
	//define array to hold images
	var images =["http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/cheese.gif","http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/eggs.gif","http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_blender.gif","http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/tea.gif","http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_collander.gif","http://courses.oreillyschool.com/jquery/QuizzesAndProjects/images/kitchen_teapot.gif"];
	//define array to hold images that we use in the grid
	var imagesused = [];
	//select all the divs that do not have class 'row'
	$('.container div:not(.row)').each(function() {
		//for each, generate a random number from 0 to length of image array
		var rand = Math.floor(Math.random() * images.length);
		//go ahead and add that [images] element to the page
		$(this).append('<img src="' + images[rand] + '"/>');
		//check to see if we have used the image already
		//if we have already used the image once, this time makes twice
		//so we have to remove the image from the images array so we can't use it again
		if (imagesused.indexOf(images[rand]) != -1) {
			//we used the image already so remove it from the images array
			images.splice(rand, 1);
			}
		else {
			//we hadn't used the image before so add that image to the [imagesused] array
			imagesused.push(images[rand]);
			}
		//select all the images and hide them
		var $myImages = $("img");
		$myImages.addClass('hidden');
	});
	
	//define variable to store points of user during game
	var points =0;
	
	//define click event function when user clicks on cell to 'turn over/flip' a 'card'
	//when user clicks on a cell (div), (that does not have class 'row') show the image
	$('.container div:not(.row)').click(showImage);
	
	function showImage() {
		//1. STORE THE IMAGE CLICKED ON
		var $myImage = $(this).find('img')
		console.log($myImage);
		
		//2. CHECK TO SEE IF TWO CARDS ARE UP AND IF SO, PROCESS
		//create a selector to select all images that are visible but not 'done' (up but not matched)
		var $cardsUp = $("img.visible");
		console.log($cardsUp.length);
		//count how many elements are in the selector, if two, then we have two cards up that we need to check for a match
		if ($cardsUp.length == 2)	{
			var $firstCard = $cardsUp.eq(0);
			var $firstImage = $firstCard.attr("src");
			console.log($firstImage);
			var $secondCard = $cardsUp.eq(1);
			var $secondImage = $secondCard.attr("src");
			console.log($secondImage);
			//check and see if the two cards are the same (check filenames)
			if ($firstImage === $secondImage)	{
				console.log('cards are the same');
				//change their class to 'done' (they stay visible)
				$firstCard.removeClass("visible");
				$firstCard.addClass("done");
				$secondCard.removeClass("visible");
				$secondCard.addClass("done");
				//add points to the user's account
				console.log("need to add 2 points to user acct");
				points = points+2;
				alert('good job. you now have: ' + points + ' points');
				}
			else	{
				//they didnt match so change their class to 'invisible' (they are invisible again)
				$firstCard.removeClass("visible");
				$firstCard.addClass("hidden");
				$secondCard.removeClass("visible");
				$secondCard.addClass("hidden");
				//remove points from the user's account
				if (points >=2)	{
					points = points-2;
				}
				alert('sorry. you now have: ' + points + ' points');
			}
		}
		else if ($cardsUp.length ==12)	{
			alert('game over... nice job. you got: ' + points + ' points');
		}
		//3. FLIP THE IMAGE CLICKED ON
		if ($myImage.hasClass("hidden"))	{	
			$myImage.removeClass("hidden");
			$myImage.addClass("visible");
		}

}
});


