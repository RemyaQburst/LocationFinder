(function() {
    'use strict';
    var Routes = function($stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        'content': {
                            templateUrl: 'app/partials/location.html',
                            controller : 'locationCtrl'
                        }
                    }
                })
    }
angular.module('locationApp')
            .config(Routes);
})();
