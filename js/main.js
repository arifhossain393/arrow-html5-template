(function ($) {
	
	
	//Preloader
	var preloader = $('.preloader');
	$(window).load(function(){
		preloader.remove();
	});

    jQuery(document).ready(function($){

    $(".header-area").sticky({ topSpacing: 0 });

		
		
		
		// Navigation Scroll
			$(window).scroll(function(event) {
				Scroll();
			});

			$('.navbar-collapse ul li a , a.mouse').on('click', function() {  
				$('html, body').animate({scrollTop: $(this.hash).offset().top - 0}, 1000);
				return false;
			});
			
	// User define function
		function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

		$('#tohash').on('click', function(){
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
			return false;
		});
				
        new WOW().init();
        


    });

	$(".navbar-toggle").click(function(){
		$("body").addClass("small-menu");
		
	});
	$("ul.navbar-nav li a").click(function(){
		$("div.navbar-collapse").removeClass("in");
		
	});


}(jQuery));	