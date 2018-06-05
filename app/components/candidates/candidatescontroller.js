angular.module('MyAgileHr').controller('CandidatesController', function($scope) {
  $scope.pageHeader = 'Candidates';
  $scope.pageHeaderDetails = 'This is where you can manage all the applicants. You can add an new applicant data, including their exam date, time, scores and attach their resumes. You can also tag the profiles to open requisitions where they seem to fit. These line manages will be notified via email, together with the exam scores and resume so they can check themselves if HR can proceed to schedule the candidates for interview.';
  $scope.candidatesList = [{name: "Milet", age:15}, {name: "Jay", age:27}, {name: "Betty", age:40}];
  $scope.addItem = function () {
      $scope.errortext = "";
      if (!$scope.newCandidateName) { return; }
      var searchResults = $scope.candidatesList.filter(function(searchableCandidate){ return searchableCandidate.name === $scope.newCandidateName });
      if(searchResults.length > 0) {
          $scope.errortext = "The item is already in our candidate list.";
      } else {
        $scope.candidatesList.push({name: $scope.newCandidateName, age: $scope.newCandidateAge});
      }
  }
  $scope.removeItem = function (x) {
      $scope.errortext = "";
      $scope.candidatesList.splice(x, 1);
  }
});
