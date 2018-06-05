angular.module('MyAgileHr').controller('CandidatesController', function($scope) {
  $scope.message = 'Hello from CandidatesController';
  $scope.candidatesList = ["Milet", "Jay", "Betty"];
  $scope.addItem = function () {
      $scope.errortext = "";
      if (!$scope.newCandidate) { return; }
      if ($scope.candidatesList.indexOf($scope.newCandidate) == -1) {
          $scope.candidatesList.push($scope.newCandidate);
      } else {
          $scope.errortext = "The item is already in our candidate list.";
      }
  }
  $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.candidatesList.splice(x, 1);
  }
});
