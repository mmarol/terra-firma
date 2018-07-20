var $ = global.jQuery;

module.exports = function($) {

  console.log("SidebarSizing initialized");

  function setSidebarSize() {
    var $projectContainer = $('.projects')
    var $sidebar = $('.project__info-group');
    var sidebarHeight;

    sidebarHeight = $(window).height() - 150; // 150 is approximately the space above

    $sidebar.css('max-height', sidebarHeight);

  }

	return {
    setSidebarSize: setSidebarSize
	};

};
