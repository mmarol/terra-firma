var $ = global.jQuery;

module.exports = function($) {

  console.log("ShowOnScroll initialized");

  function showOnScrollPast(itemToScrollPast, itemToShow, onAllWindowSizes) {
    var $itemToScrollPast = $(itemToScrollPast);
    var $itemToShow = $(itemToShow);

    if ($itemToScrollPast.length === 0 || $itemToShow.length === 0) {
      return;
    }

    if (onAllWindowSizes === false && window.innerWidth <= 1023) {
      return;
    }

    var itemScrollDepth = $(itemToScrollPast).offset().top + $(itemToScrollPast).height();

    if ($(window).scrollTop() > itemScrollDepth) {
      $(itemToShow).removeClass('hidden');
    } else {
      $(itemToShow).addClass('hidden');
    }

  }

	return {
    showOnScrollPast: showOnScrollPast
	};

};
