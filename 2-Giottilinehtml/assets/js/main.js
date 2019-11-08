jQuery(function() {
          
    //slick slider
	if (jQuery.fn.slick) {
		jQuery(".banner").slick({
			dots: true,
			autoplay: true,
			infinite: true,
			draggable: true,
            arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	 }
    
    //Image Bg
    imageBg();

    //Image equalHeight
    equalHeight();

    //debouncedresize
    jQuery(window).bind("debouncedresize", function () {

        //Image Bg
        imageBg();

        //Image equalHeight
        equalHeight();

    });
    
    	 
});

//Image Bg
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image,.image-blk,.split-img").imgLiquid({
            fill: true
        });
    }
}

//Image equalHeight
function equalHeight() {
    if (jQuery.fn.matchHeight) {
        jQuery('.eq-height').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    }
}