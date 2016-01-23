//Controllers

var myApp = angular.module('musicApp', ['ngAnimate']);

  myApp.controller('toggleTitle', ['$scope', '$location', '$anchorScroll', 
    function($scope, $location, $anchorScroll) {

  	$scope.showsToggle = false;
  	$scope.musicToggle = false;
    $scope.photosToggle = false;
  	$scopesDLViewable = true;
    
    
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

    $scope.displayDownload = function () {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $scope.isDLViewable = false;
      }
    };


  }]);


