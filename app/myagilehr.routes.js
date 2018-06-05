var app = angular.module('MyAgileHr', ["ngRoute"]);

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/requisitions', {
          templateUrl : 'app/components/requisitions/requisitionsview.html',
          controller  : 'RequisitionsController'
        })
        .when('/scheduler', {
          templateUrl : 'app/components/scheduler/schedulerview.html',
          controller  : 'SchedulerController'
        })
        .otherwise({
          redirectTo: '/',
          templateUrl : 'app/components/candidates/candidatesview.html',
          controller: 'CandidatesController'
        });
}]);
