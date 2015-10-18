//Controllers

var myApp = angular.module('musicApp', []);

  myApp.controller('toggleTitle', function($scope) {

  	$scope.showsToggle = false;
  	$scope.musicToggle = false;
  	$scope.membersToggle = false;
    
    
    $scope.toggleShows = function () {
       	$scope.showsToggle = !$scope.showsToggle;
       	$scope.musicToggle = false;
       	$scope.membersToggle = false;
       	$scope.blur();
    };

    $scope.toggleMusic = function () {
  		$scope.musicToggle = !$scope.musicToggle;
  		$scope.showsToggle = false;
      $scope.membersToggle = false;
      $scope.playerToggle = !$scope.playerToggle;
    };

	$scope.toggleMembers = function () {
  		$scope.membersToggle  = !$scope.membersToggle;
  		$scope.musicToggle = false;
      $scope.showsToggle = false;
    };


  

  });


