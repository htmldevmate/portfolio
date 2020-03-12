
// Background image
jQuery('.imgLiquid').each(function() {
    jQuery(this).find('img').hide();
    var imgURL = jQuery(this).find('img').attr('src');
    jQuery(this).css('background-image', 'url(' + imgURL + ')');
});
// Banner slider
jQuery('.banner-slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});