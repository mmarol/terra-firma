global.jQuery = require('jquery');
global.$ = global.jQuery;

var projectFilter = require('./projectFilter.js')();
var imageSort = require('./imageSort.js')();
var projectLightbox = require('./lightbox.js')({
  decorate: '.project__image'
});
// var exampleModule = require('./exampleModule.js')();
