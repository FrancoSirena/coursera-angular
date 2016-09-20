(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "Please enter data first";
  $scope.items = "";
  $scope.checkIfTooMuch = function () {
    if ($scope.items == "")
      return;
    if ($scope.items.split(",").length <= 3) {
       $scope.message = "Enjoy!";
    } else {
       $scope.message = "Too Much!";
    }
  };

}


})();
