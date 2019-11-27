jQuery(function () {
    
/*===============================================
	Foundation
==================================================*/	 
    jQuery(document).foundation();    
	
	
/*===============================================
        Sticky Header
==================================================*/
jQuery(window).scroll(function () {
    var sticky = jQuery('body'),
        scroll = jQuery(window).scrollTop();
    if (scroll >= 1) {
        sticky.addClass('is-sticky');
    } else {
        sticky.removeClass('is-sticky');
    }
}); 
jQuery(".menuicon, .js-off-canvas-overlay").click(function(){
    if (scroll >= 1) {} else {
       jQuery('body').toggleClass('menu-open');
    }

});
	
	
/*===============================================
    sticky footer
==================================================*/
    stickyFooter();
    
    
/*===============================================
    debouncedresize
==================================================*/ 
    jQuery(window).bind("debouncedresize", function() {
				   
        //sticky footer
        stickyFooter();
		
	});
    
 /*===============================================
    video
==================================================*/      
    jQuery(document).on('click', '.js-videoPoster', function (e) {
        e.preventDefault();
        var poster = $(this);
        var wrapper = poster.closest('.js-videoWrapper');
        videoPlay(wrapper);
    });
    function videoPlay(wrapper) {
        var iframe = wrapper.find('.js-videoIframe');
        var src = iframe.data('src');
        wrapper.addClass('videoWrapperActive');
        iframe.attr('src', src);
    }
/*============================================
   slick
============================================ */ 
	if (jQuery.fn.slick) {
		jQuery(".product-slider ul").slick({
			dots: false,
            arrows: true,
			autoplay: true,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1
		}); 
	}  
    
    
    jQuery(".upload-wrapper").on("change", ".upload", function () {
        jQuery(this).parent(".file-upload").attr("data-text", 
        jQuery(this).val().replace(/.*(\/|\\)/, ''));
    });
    
    
    
    
}); 
 


/*===============================================
	sticky footer
==================================================*/ 
function stickyFooter() {
    jQuery('.footer-push').css({
        'height': (jQuery(".footer").outerHeight()) + 'px'
    });
}


/*===============================================
	Map
==================================================*/
/*if (jQuery.fn.mapboxgl) {*/
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hub3ZvMTIiLCJhIjoiY2p2bHhuanYzMGZnczQ5bGVzeTk3YTRnZCJ9.AMeSyuXOmCmGChK2_NXa1A';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [5.480358, 52.234689], 
        zoom: 14
    });

    map.on('load', function() {
        map.loadImage('assets/images/marker.png', function(error, image) {
            if (error) throw error;
            map.addImage('cat', image);
            map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [{
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [5.480358, 52.234689]
                            }
                        }]
                    }
                },
                "layout": {
                    "icon-image": "cat"
                }
            });
        });
    });
    map.scrollZoom.disable();
/*}*/