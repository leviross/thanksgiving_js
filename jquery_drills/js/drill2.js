$(function(){
	$(document).on('keyup',function(event){
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
        
        if (event.keyCode == '39'){
        	$('.shape').animate({left:"+=200"}, 2000).appendTo('.stage');
        }
        else if (event.keyCode == '37'){
        	$('.shape').animate({left:"-=200"}, 2000).appendTo('.stage');
        }
        else if (event.keyCode == '40'){
        	$('.shape').animate({top:"+=200"}, 2000).appendTo('.stage');
        }
        else if (event.keyCode == '38'){
        	$('.shape').animate({top:"-=200"}, 2000).postion();
        }
        else if (event.keyCode == '83'){
        	animateThis($('.shape'), 100);
        	function animateThis(element, speed) {
        		$('.shape').animate({left:"+=10"}, 
        		{
        			duration: speed, 
        			complete: function ()
        			{
        				$('.shape').animate({left:"-=10"},
        				{
        					duration: speed,
        					complete: function ()
        					{
        						animateThis(element, speed);
        					}	

        				});
        			}
        		});
        	}
        }


    })
});

