var $ = global.jQuery;

var jQueryBridget = require('jquery-bridget');
var Packery = require('packery');
var imagesLoaded = require('imagesloaded');

module.exports = ImageSort;

function ImageSort() {
  if (!(this instanceof ImageSort)) {
      return new ImageSort();
  }

  console.log('ImageSort initialized.');

/* Initial random resize ----------------------------------------------------------------- */

  var $images = $('.project__image');
  var imageCount = $images.length;
  var firstThird = Math.round(imageCount / 2);
  var secondThird = Math.round(imageCount / 5);

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

  $images.each(function() {
    var images = $(this);
    for(var i = 0; i < images.length; i++) {
      $(images[i]).remove();
    }
    $(shuffle($images));
    for(var j = 0; j < images.length; j++) {
      $(images[j]).appendTo($('.project__gallery'));
    }
  });


/* Packery sort ----------------------------------------------------------------- */

  var $imageContainer = $('.project__gallery');
  var $imageItems = $('.project__image img');

  // setup imagesLoaded & packery as jquery plugins
  imagesLoaded.makeJQueryPlugin( $ );
  jQueryBridget( 'packery', Packery, $ );

  imagesLoaded($imageItems).on('progress', function(imagesLoadedInstance, image) {
    $(image.img).parents('.project__image').addClass('show');
  });

  // now use .imagesLoaded() jQuery plugin
  $imageContainer.imagesLoaded( function() {

    // now you can use $().packery()
    var $grid = $imageContainer.packery({
      itemSelector: '.project__image',
      columnWidth: '.project__image--sizer',
      gutter: 0,
      // gutter: '.resource__spacer',
      transitionDuration: '0.2s',
      percentPosition: true
    });

/*  // expand images to large size on click and rearrange the grid
    $grid.on( 'click', '.resource__image', function( event ) {
      var $item = $( event.currentTarget );
      // change size of item by toggling large class
      $item.toggleClass('resource__image--magnified').siblings().removeClass('resource__image--magnified');
      // fit current item
      $grid.packery( 'fit', event.currentTarget );
    });
*/
  });

}
