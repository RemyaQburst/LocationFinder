(function() {
    'use strict';
    angular.module('locationApp')
        .controller('mapCtrl', mapCtrl);
    mapCtrl.$inject = ['$scope', 'NgMap'];

    function mapCtrl($scope, NgMap) {
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });
    };
})();
