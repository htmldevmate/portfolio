/*===============================================
        WindowResize 
==================================================*/
(function($) {

var $event = $.event,
	$special,
	resizeTimeout;

$special = $event.special.debouncedresize = {
	setup: function() {
		$( this ).on( "resize", $special.handler );
	},
	teardown: function() {
		$( this ).off( "resize", $special.handler );
	},
	handler: function( event, execAsap ) {
		// Save the context
		var context = this,
			args = arguments,
			dispatch = function() {
				// set correct event type
				event.type = "debouncedresize";
				$event.dispatch.apply( context, args );
			};

		if ( resizeTimeout ) {
			clearTimeout( resizeTimeout );
		}

		execAsap ?
			dispatch() :
			resizeTimeout = setTimeout( dispatch, $special.threshold );
	},
	threshold: 150
};
})(jQuery);


jQuery(function() {
	
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
    
    /*===============================================
    submenu
    ==================================================*/
    jQuery(".subMenu a").click(function(){
        jQuery(this).siblings("ul").slideToggle();
    });
    
    /*===============================================
    sticky footer
    ==================================================*/
        stickyFooter();


    /*===============================================
        shift content
    ==================================================*/
        shiftContent();


    /*============================================
       slick
    ============================================ */
    if (jQuery.fn.slick) {
        jQuery(".banner-outer").slick({
			dots: false,
            arrows: true,
			autoplay: true,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
        
        jQuery(".video-banner-outer").slick({
			dots: false,
            arrows: true,
			autoplay: false,
			infinite: true,
			draggable: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
    }
    
 
    
 
    
    
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
        
    /*===============================================
        WindowResize
    ==================================================*/ 
        jQuery(window).bind("debouncedresize", function() {

            //sticky footer
            stickyFooter();

            shiftContent();

        });
    
    /*===============================================
        Map
    ==================================================*/ 
    if (jQuery("#map").length) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiY2hub3ZvMTIiLCJhIjoiY2p2bHhuanYzMGZnczQ5bGVzeTk3YTRnZCJ9.AMeSyuXOmCmGChK2_NXa1A';

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [5.6687649, 52.0295432], 
            zoom: 15
        });

        map.on('load', function() {
            map.loadImage('assets/images/marker.png', function(error, image) {
                if (error) throw error;
                map.addImage('marker', image);
                map.scrollZoom.disable();
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
                                    "coordinates": [5.6687649, 52.0295432]
                                }
                            }]
                        }
                    },
                    "layout": {
                        "icon-image": "marker"
                    }
                });
            });
        });
    }
    
    
     /*===============================================
   infiniteScroll
  ==================================================*/   
     
    if (jQuery.fn.infiniteScroll) {
        jQuery('.news-list .row').infiniteScroll({
          path: '.pagination__next',
          append: '.column',
          button: '.loadmore',             
          scrollThreshold: false,
          history: false
        });
    }  
    
	 
});


/*===============================================
	sticky footer
==================================================*/ 
function stickyFooter() {
    jQuery('.footer-push').css({
        'height': (jQuery(".footer-container").outerHeight()) + 'px'
    });
}

/*===============================================
	shift content
==================================================*/
function shiftContent() {
	if (jQuery(".display-mob").is(":visible")) {
        jQuery(".main-outercon").each(function (index) {
			jQuery('.main-menu').insertAfter(".sm-close");			
		});
	} else {
		jQuery(".main-outercon").each(function (index) {
			jQuery('.main-menu').insertAfter(".header-top");
		});
	}
}



