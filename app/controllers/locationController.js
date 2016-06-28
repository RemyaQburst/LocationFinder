(function() {
    'use strict';
    angular.module('locationApp')
        .controller('locationCtrl', locationCtrl);
locationCtrl.$inject = ["$scope","$translate","NgMap","MapService"];
function locationCtrl($scope,$translate,NgMap,MapService) {
	NgMap.getMap().then(function(map) {
		console.log(map);
		$scope.map = map;
	});
	$scope.positionObj = {};
	MapService.getMapCords().then(function(positionObj) {
		$scope.positionObj.lat = positionObj.coords.latitude;
		$scope.positionObj.long = positionObj.coords.longitude;
  		console.log($scope.positionObj);
	});
	console.log($scope.positionObj);
	$scope.changeLanguage = function (langKey) {
    	$translate.use(langKey);
  	};
};
})();

