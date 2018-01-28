global.jQuery = require('jquery');
global.$ = global.jQuery;

var projectFilter = require('./projectFilter.js')($);
var imageSort = require('./imageSort.js')($);
// var projectLightbox = require('./lightbox.js')({
//   decorate: '.project__image'
// });

// Featured projects
imageSort.shuffleImages('.featured-projects__list', '.featured-projects__item');
imageSort.packImages('.featured-projects__list', '.featured-projects__item', '.featured-projects__item');

// Project list
imageSort.packImages('.projects__list', '.projects__item', '.projects__item');

// Individual projects
imageSort.packImages('.project__gallery', '.project__image', '.packery__sizer');

$('.projects__type').click(function() {
  projectFilter.filter(this);
  imageSort.packImages('.projects__list', '.projects__item', '.projects__item');
});
