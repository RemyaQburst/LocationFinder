angular.module('locationApp')
    .directive('reverseGeocode',['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                console.log("atttadd",attrs);
               var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(attrs.lat, attrs.long);
                console.log("asdasd",latlng);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    console.log(results+"ressss");
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            element.text(results[1].formatted_address);
                        } else {
                            element.text('Location not found');
                        }
                    } else {
                        element.text('Geocoder failed due to: ' + status);
                    }
                });
                
            }
        }
}]);