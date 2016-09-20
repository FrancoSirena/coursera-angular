(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message = "Please enter data first";
  $scope.items = "";
  $scope.rgb = "#FF0000";
  $scope.checkIfTooMuch = function () {
    if ($scope.items == ""){
      $scope.rgb = "#FF0000";
      $scope.message = "Please enter data first";
      return;
    }


    $scope.rgb = "#00FF00";
    if ($scope.items.split(",").length <= 3) {
       $scope.message = "Enjoy!";
    } else {
       $scope.message = "Too Much!";
    }
  };

}


})();
