var $ = global.jQuery;

module.exports = ProjectFilter;

function ProjectFilter(opts) {
  if (!(this instanceof ProjectFilter)) {
    return new ProjectFilter(opts);
  }

  console.log('ProjectFilter initialized.');


  var projectQuery;
  var projectTargets;
  var projects = $('.projects__item');

  filterProjects();

  function filterProjects() {
    $('.projects__type').click(function() {

      // style the buttons
      $(this).addClass('active').siblings().removeClass('active');

      // filter projects
      projectQuery = $(this).data('project-type-query');
      if (projectQuery === 'all') {
        projectTargets = projects;
      } else {
        projectTargets = $('.projects__item[data-project-type-target='+ projectQuery +']');
      }
      projects.addClass('hide');
      projectTargets.removeClass('hide');
    });
  }

}
