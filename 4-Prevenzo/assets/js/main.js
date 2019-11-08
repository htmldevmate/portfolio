jQuery(function () {
    
    /*===============================================
		menu 
	==================================================*/
    jQuery('.menu-icon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".menu").slideToggle();
    });

    if (jQuery.fn.onePageNav) {
        jQuery('.menu ul').onePageNav({
            currentClass: 'active',
            scrollThreshold: 0.2,
            scrollOffset: 0
        });
    }

    $(window).scroll(function(){	
		var sticky = jQuery('.header-outer'),
		scroll = jQuery(window).scrollTop();
		if (scroll >= 5) {
			sticky.addClass('sticky');
		} else {
			sticky.removeClass('sticky');
		}
	});


    /*============================================
       Tab
    ============================================ */

    if (jQuery.fn.easyResponsiveTabs) {
        jQuery('.tab-block').easyResponsiveTabs({
            type: 'vertical', 
            width: 'auto', 
            fit: true, 
            closed: 'accordion', 
            tabidentify: 'hor_1', 
            activate: function(event) { 
                var $tab = $(this);
                var $info = $('#nested-tabInfo2');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    /*============================================
        validation
    ============================================ */

    if (jQuery.fn.validate) {
        jQuery("#contactus").submit(function(e) {
            e.preventDefault();
        }).validate({
            rules: {
                'name': {
                    required: true 
                },
                'email': {
                    required: true,
                    email: true
                }
            },
            submitHandler: function(form) { 
                form.submit();
            }
        });
    }
    
    

    //ImageBg
    imageBg();

    //debouncedresize
    jQuery(window).bind("debouncedresize", function () {

        //ImageBg
        imageBg();

    });


});

//ImageBg
function imageBg() {
    if (jQuery.fn.imgLiquid) {
        jQuery(".banner-image").imgLiquid({
            fill: true
        });
    }
}