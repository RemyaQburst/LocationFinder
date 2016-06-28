(function () {
    var MapService = function ($q,$window) {
    	var service = this;
    	service.getMapCords = function() {
    		var deferred = $q.defer();
	        if (!$window.navigator.geolocation) {
	            deferred.reject('Geolocation not supported.');
	        } else {
	            $window.navigator.geolocation.getCurrentPosition(
	                function (position) {
	                    deferred.resolve(position);
	                },
	                function (err) {
	                    deferred.reject(err);
	                });
	        }
	        return deferred.promise;
		};
	};
 	MapService.$inject = ['$q', '$window'];
  angular.module('locationApp')
  	.service('MapService', MapService);
})();