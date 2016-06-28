(function() {
    'use strict';
    angular.module('locationApp')
        .controller('locationCtrl', locationCtrl);
    locationCtrl.$inject = ["$scope", "$translate"];

    function locationCtrl($scope, $translate) {
        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };
    };
})();
