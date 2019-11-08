// JavaScript Document


// Checking for Retina Devices
function isRetina() {
	var query = '(-webkit-min-device-pixel-ratio: 1.5),\
				(min--moz-device-pixel-ratio: 1.5),\
				(-o-min-device-pixel-ratio: 3/2),\
				(min-device-pixel-ratio: 1.5),\
				(min-resolution: 144dpi),\
				(min-resolution: 1.5dppx)';

	if (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia(query).matches)) {
		return true;
	}

	return false;
}

// Replace images with @2x

$(document).ready(function() {
	if (window.isRetina()) {
		// var images = document.getElementsByTagName('img');
		var images = document.getElementsByClassName('retina-img');
		for (var i = 0, j = images.length; i < j; i++) {
			var image = images[i],
				src = image.src,
				lastSlash = src.lastIndexOf('/'),
				path = src.substring(0, lastSlash),
				file = src.substring(lastSlash + 1),
				retinaSrc = 'assets/images/@2x/' + file;

			image.src = retinaSrc;
		}
	}
});
