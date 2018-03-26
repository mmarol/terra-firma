var $ = global.jQuery;

module.exports = function($) {

  console.log("Lightbox initialized");

  function initializeLightbox(images) {
    var $images = $(images);
    var $lightboxContainer = $('.lightbox');
    var $lightboxImage = $('.lightbox__image');
    var $lightboxToggle = $('.lightbox__toggle, .lightbox__background');

    if ($images.length === 0) {
      return;
    }

    $images.click(function () {
      var $this = $(this);
      var lightboxUrl = $this.data('lightbox-image');
      $lightboxContainer.removeClass('hidden');
      $lightboxImage.attr('src', lightboxUrl);
    });

    $lightboxToggle.click(function () {
      console.log("toggle clicked");
      $lightboxContainer.addClass('hidden');
    })

  }

	return {
    initializeLightbox: initializeLightbox
	};

};
