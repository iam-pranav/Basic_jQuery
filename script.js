

$(document).ready(function(){

//=========ACCORDION FUNCTION START=================================

	$('.accordion-head a').click(function(){

		for (var i = 0; i < 3; i++) {
			$(this).parent().parent().siblings().eq(i).children().eq(1).slideUp(1000);
		}
		
		$(this).parent().siblings().toggle(2000);

	})
//=========ACCORDION FUNCTION END=================================

//=========MODAL FUNCTION STARTS=================================

	$('.modal-btn').click( function(argument) {
		
		$('div.popup-content').fadeIn(500);	
	})

	$('.close-btn').click( function() {
		
		$('div.popup-content').fadeUp();
		
	});

	let modal = $('.popup-content').html();

	$('div.popup-content').click( function() {	
		$(this).hide();	
	})
//=========MODAL FUNCTION END=================================

	$('#drop').click(()=> {
		$('.ddl').toggle();		
	})

	$('.btn-toggle').click(function(){
		$('.nav-toggle').slideToggle(1000);
	})

})




