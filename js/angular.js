//Controllers

var myApp = angular.module('musicApp', []);

  myApp.controller('toggleTitle', function($scope) {

  	$scope.showsToggle = false;
  	$scope.musicToggle = false;
  	$scope.photosToggle = false;
    
    
    $scope.toggleShows = function () {
       	$scope.showsToggle = !$scope.showsToggle;
       	$scope.musicToggle = false;
       	$scope.photosToggle = false;
       	$scope.blur();
    };

    $scope.toggleMusic = function () {
  		$scope.musicToggle = !$scope.musicToggle;
  		$scope.showsToggle = false;
      $scope.photosToggle = false;
      $scope.playerToggle = !$scope.playerToggle;
    };

	$scope.togglePhotos = function () {
  		$scope.photosToggle  = !$scope.photosToggle;
  		$scope.musicToggle = false;
      $scope.showsToggle = false;
    };


  

  });


