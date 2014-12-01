// 1-find the ball by selecting all the classes and save it to a var 
// 2- make the ball fadeOut 
// 3-Move it to a new random location
// 4-fade it back in
// 5-new location must be within the .stage div


$(function(){
	var ball = $('.wrapper .stage .ball');
	ball.on("click", function() {
		ball.fadeOut(2000, function(){
		// var dir = Math.random() > 0.49 ? '+' : '-';
		ball.appendTo('div .stage').animate({
			'left': (Math.random() * 600),
			'top': (Math.random() * 600),

		}).fadeIn(2000);

	})
	})    
});

