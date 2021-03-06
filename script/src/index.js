global.jQuery = require('jquery');
global.$ = global.jQuery;

var projectFilter = require('./projectFilter.js')($);
var imageSort = require('./imageSort.js')($);
// var map = require('./map.js')($);
var showOnScroll = require('./showOnScroll.js')($);
var lightbox = require('./lightbox.js')($);
var sidebarSizing = require('./sidebarSizing.js')($);

// Featured projects
imageSort.shuffleImages('.featured-projects__list', '.featured-projects__item');
imageSort.packImages('.featured-projects__list', '.featured-projects__item', '.featured-projects__item');

// Project list
imageSort.packImages('.projects__list', '.projects__item', '.projects__item');

// Individual projects
imageSort.packImages('.project__gallery', '.project__image', '.packery__sizer');

// People
// imageSort.packImages('.people', '.people__item', '.people__grid-sizer');

// Initialize show on scroll
showOnScroll.showOnScrollPast('.project__title', '.project__info-name');
showOnScroll.showOnScrollPast('.home__hero-logo', '.nav__logo');

// Sidebar sizing
sidebarSizing.setSidebarSize();

// Scroll past project name
$(window).scroll(function () {
  showOnScroll.showOnScrollPast('.home__hero-logo', '.nav__logo');
  showOnScroll.showOnScrollPast('.project__title', '.project__info-name', false);
});

$(window).resize(function () {
  sidebarSizing.setSidebarSize();
});


$('.projects__type').click(function() {
  projectFilter.filter(this);
  imageSort.packImages('.projects__list', '.projects__item', '.projects__item');
});
