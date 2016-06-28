(function () {
    var GetLangService = function ($http) {
    	var service = this;
    	service.getLangMapper = function (path) {
    		return $http.get(path);
    	}
    };
GetLangService.$inject = ['$http'];
angular.module('locationApp')
  	.service('GetLangService', GetLangService);
})();