jQuery(function () {
	
/*== Contact Form ==*/
	
    jQuery("#offers").validate({
        rules: {
            naam: {
                required: true
            },
            bedrijf: {
                required: true
            },                       
            email: {
                required: true,
                email: true
            },
            telefoon: {
                required: true,
                number: true
            },
            file: {
                required: true,
            },
            bericht: {
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
    
     jQuery("#contact-info").validate({
        rules: {
            naam: {
                required: true
            },                       
            email: {
                required: true,
                email: true
            },
            telefoon: {
                required: true,
                number: true
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
    
    
    jQuery("#contact").validate({
        rules: {
            bedrijf: {
                required: true
            },
            naam: {
                required: true
            },                       
            email: {
                required: true,
                email: true
            },
            telefoon: {
                required: true,
                number: true
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