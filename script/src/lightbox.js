var $ = global.jQuery;
var baguetteBox = require('lightbox');

module.exports = function($) {

  console.log("Lightbox initialized");

  baguetteBox.run('.project__gallery', {
    filter: /.*/i
  });

	return {
    // initializeLightbox: initializeLightbox
	};

};
