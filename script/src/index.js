global.jQuery = require('jquery');
global.$ = global.jQuery;

var projectFilter = require('./projectFilter.js')($);
var imageSort = require('./imageSort.js')($);
var projectLightbox = require('./lightbox.js')({
  decorate: '.project__image'
});
// var exampleModule = require('./exampleModule.js')();

imageSort.shuffleImages('.featured-projects__item', '.featured-projects__list');
imageSort.packImages('.featured-projects__item', '.featured-projects__list');
// imageSort.shuffleImages('.projects__item', '.projects__list');
imageSort.packImages('.projects__item', '.projects__list');

$('.projects__type').click(function() {
  console.log("clicked");
  projectFilter.filter(this);
  imageSort.packImages('.projects__item', '.projects__list');
});
