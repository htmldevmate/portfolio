jQuery(function () {
    /*===============================================
		Menu 
    ==================================================*/
    jQuery('.menuicon').click(function () {
        jQuery(this).toggleClass('open');
        jQuery(".menu").slideToggle();
    });

    /*===============================================
		Gallery 
    ==================================================*/
    if (jQuery.fn.colorbox) {
        jQuery(".gallery").colorbox({
            maxWidth: "95%",
            maxHeight: "95%",
            scalePhotos: true,
            slideshow: true,
            slideshowSpeed: 5000,
            slideshowAuto: true,
            rel: 'gallery'
        });
    }

    /*===============================================
		ContactForm 
    ==================================================*/
    jQuery("#contactForm").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        errorPlacement: function (error, element) {
            jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },

        success: function (success, element) {
            jQuery(element).addClass('error');
            jQuery(element).removeClass('valid')
        },

        debug: false,
        focusInvalid: false,
        errorClass: "error",

        submitHandler: function (form) {
            form.submit();
        }
    });

});