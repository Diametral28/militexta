/*
	Theme Custom Scripts
*/

(function($){ "use strict";

/*=========================================================================
        Preloader
=========================================================================*/
$(window).on('load', function() {
    $('body').addClass('loaded');
});

/*=========================================================================
    Sticky Header
=========================================================================*/ 
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 50 ) {
            $('.header_area').addClass('scrollActive');
        } else {
            $('.header_area').removeClass('scrollActive');
        }
        
    });
             
/*=========================================================================
    Typed js Active
=========================================================================*/
    $(".typed").typed({
        strings: ["Michel.", "Designer.", "Creative."],
        loop: true,
        typeSpeed: 150
    });
             
/*=========================================================================
    Initialize smoothscroll plugin
=========================================================================*/
    smoothScroll.init({
		offset: 60
	});
             
/*=========================================================================
	Isotope Active
=========================================================================*/
	$('.portfolio_items').imagesLoaded( function() {

		 // Add isotope click function
		$('.portfolio_filter li').on( 'click', function(){
	        $(".portfolio_filter li").removeClass("active");
	        $(this).addClass("active");
	 
	        var selector = $(this).attr('data-filter');
	        $(".portfolio_items").isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });

	    $(".portfolio_items").isotope({
	        itemSelector: '.single_item',
	        layoutMode: 'fitRows',
	    });
	});

/*=========================================================================
	Testimonial Carousel
=========================================================================*/ 
  var testiCarousel = $('#testi_carousel');
  testiCarousel.owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 800,
        margin: 20,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            520 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 3
            }
        }
    });
             
/*=========================================================================
    Active venobox
=========================================================================*/
	$('.img_popup').venobox();
             
/*=========================================================================
    Skills Counter
=========================================================================*/
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

/*=========================================================================
	Scroll To Top
=========================================================================*/ 
    $(window).on( 'scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });	
             
/*=========================================================================
    wow Settings
=========================================================================*/
    var wow = new WOW( {
        mobile: false,
        offset: 0
    });
    wow.init();

})(jQuery);
