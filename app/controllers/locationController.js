(function () {
    'use strict';
angular.module('locationApp')
        .controller('locationCtrl', locationCtrl);
locationCtrl.$inject = ["$scope","$rootScope","$translate","NgMap","MapService","GetLangService"];
function locationCtrl($scope,$rootScope,$translate,NgMap,MapService,GetLangService) {
    NgMap.getMap().then(function(map) {
        $scope.map = map;
    });
    $scope.positionObj = {};
    MapService.getMapCords().then(function(positionObj) {
        $scope.positionObj.lat = positionObj.coords.latitude;
        $scope.positionObj.long = positionObj.coords.longitude;
        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(positionObj.coords.latitude, positionObj.coords.longitude);
        geocoder.geocode({ 'latLng': latlng }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results) {
                    $scope.infowinTxt = results[0].formatted_address;
                    for(var i=0;i<results.length;i++) {
                        for(var j=0;j<results[i].types.length;j++) {
                            if(results[i].types[j] == "country") {
                                $scope.country = results[i].formatted_address;
                            }
                        }
                    }
                } else {
                    $scope.infowinTxt = 'Location not found';
                }
            } else {
                $scope.infowinTxt = 'Geocoder failed due to: ' + status;
            }
             GetLangService.getLangMapper('app/json/langMapper.json').then(function (res) {
                    angular.forEach(res.data,function(key,value){
                        if($scope.country == value) {
                            $translate.use(key);
                        }
                    });
              });
        });
    });
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };
};
})();