angular.module('MyAgileHr').controller('SchedulerController', function($scope) {
  $scope.pageHeader = 'Scheduler';
  $scope.pageHeaderDetails = 'This is where the HR can track when candidates are scheduled for interview. It also has a task list for candidates who need to be followed up. Maintenance for the levels of interview are also found here. By default, yellow tags are for technical interview and light orange are for behavioral interview. Green tags are for job offer schedules. If after 1 day, a candidate does not advance to any of these levels, a task to follow up will appear on the task list.';
});
