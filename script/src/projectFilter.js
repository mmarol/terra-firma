var $ = global.jQuery;

module.exports = function($) {

  console.log("ProjectFilter initialized");

  function filter(query) {
    var projectQuery;
    var projectTargets;
    var projects = $('.projects__item');

      // style the buttons
      $(query).addClass('active').siblings().removeClass('active');

      // filter projects
      projectQuery = $(query).data('project-type-query');
      if (projectQuery === 'all') {
        projectTargets = projects;
      } else {
        projectTargets = $('.'+ projectQuery);
      }
      projects.addClass('hide');
      projectTargets.removeClass('hide');
  }

	return {
    filter: filter
	};

};
