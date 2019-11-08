jQuery(function() {
    
     //Slider
    if (jQuery.fn.slick) {
        jQuery('.banner-outer').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: false,
            draggable: true
        });
    }
    
     //Custom Height
     customHeight();
     
     
    
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
        
        //Custom Height
     	customHeight();
		if (jQuery(".mobile-only").is(":visible")) {
		   jQuery(".submenu > a").click(function(){
				jQuery(".submenu").toggleClass("active");
			});
			jQuery(".back").click(function(){
				jQuery(".submenu").removeClass("active");
			});
		}
		else{
			jQuery(".menu").removeAttr("style")
		}

    });
	/*===============================================
		menu icon
	==================================================*/
    jQuery('.menu-icon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".menu").slideToggle();
    });
	if (jQuery(".mobile-only").is(":visible")) {
       jQuery(".submenu > a").click(function(){
			jQuery(".submenu").toggleClass("active");
		});
		jQuery(".back").click(function(){
			jQuery(".submenu").removeClass("active");
		});
	}
	else{
		jQuery(".menu").removeAttr("style")
	}
	
	/*===============================================
		menu icon
	==================================================*/
	jQuery('.search-icon').click(function () {
		jQuery(".search-box").addClass("active");
	});
	jQuery('.search-close').click(function () {
		jQuery(".search-box").removeClass("active");
	});
	/*============================================
	   Selectbox
	============================================ */    	
	if (jQuery.fn.selectbox) {
		jQuery(".select").selectbox();
	}
    
	 
});


//Image Bg
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image,.title-img,.equipment-img,.webcam,.grid-image").imgLiquid({
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
//customHeight
function customHeight() {
	$section_height = jQuery(".webcam-section").parent().height();
	$section_header = jQuery(".webcam-head").height();
	$section_webcam = $section_height-$section_header;
	jQuery(".webcam").height($section_webcam);
}