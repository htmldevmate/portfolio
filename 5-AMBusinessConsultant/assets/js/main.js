jQuery(function() {
    
/*============================================
   slick
============================================ */ 
	if (jQuery.fn.slick) {
		jQuery(".sliderOuter").slick({
			dots: false,
            arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1
		}); 
        jQuery(".testimonialArea").slick({
			dots: false,
            arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
            adaptiveHeight: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	} 
    
     /*===============================================
		menu 
	==================================================*/
    jQuery('.menu-icon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".menu").slideToggle();
    });

    //Image Bg
    imageBg();

    //debouncedresize
    jQuery(window).bind("debouncedresize", function () {

        //Image Bg
        imageBg();

    });
	 
});

//Image Bg
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".sliderImage").imgLiquid({
            fill: true
        });
    }
}

