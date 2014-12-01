$(function(){
	$('.ball').hover(
		function() {
			$(this).removeClass('ball');
			.css("background-color", "red");
		}, function() {
			$(this).addClass('ball');
			.css('background-color', 'blue');
		}
		);
});



