var $ = global.jQuery;
var baguetteBox = require('baguettebox.js');

module.exports = function($) {

  console.log("Lightbox initialized");

  baguetteBox.run('.project__gallery', {
    filter: /.*/i
  });

	return {
    // initializeLightbox: initializeLightbox
	};

};
