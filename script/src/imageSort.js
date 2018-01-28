var $ = global.jQuery;

var jQueryBridget = require('jquery-bridget');
var Packery = require('packery');
var imagesLoaded = require('imagesloaded');

module.exports = function($) {

  console.log("ImageSort initialized");

  // shuffleImages();
  packImages();

  /* Image shuffle -------------------------------- */

  function shuffleImages(imageContainer, images) {

    var $images = $(images);
    var $imageContainer = $(imageContainer);

    var shuffledImages = shuffle($images);
    // remove items from container
    for(var i = 0; i < shuffledImages.length; i++) {
      $(shuffledImages[i]).remove();
    }
    // add shuffled items to container
    for(var j = 0; j < shuffledImages.length; j++) {
      $(shuffledImages[j]).appendTo($($imageContainer));
    }
  }

  function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  /* Packery sort -------------------------------- */

  function packImages(imageContainer, images, imageSizer) {

    var $images = $(images);
    var $imageContainer = $(imageContainer);

    // setup imagesLoaded & packery as jquery plugins
    imagesLoaded.makeJQueryPlugin( $ );
    jQueryBridget( 'packery', Packery, $ );

    imagesLoaded($images).on('progress', function(imagesLoadedInstance, image) {
      $(image.img).parents(images).addClass('show');
    });

    // now use .imagesLoaded() jQuery plugin
    $imageContainer.imagesLoaded( function() {

      // now you can use $().packery()
      var $grid = $imageContainer.packery({
        itemSelector: images,
        columnWidth: imageSizer,
        gutter: '.packery__gutter',
        transitionDuration: '0.2s',
        percentPosition: true
      });

    });
  }

	return {
    packImages: packImages,
    shuffleImages: shuffleImages
	};

};
