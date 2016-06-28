(function() {
    'use strict';
    var Routes = function($stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'app/partials/header.html'
                    },
                    'content': {
                        templateUrl: 'app/partials/location.html',
                        controller: 'locationCtrl'
                    },
                    'map': {
                        templateUrl: 'app/partials/map.html',
                        controller: 'mapCtrl'
                    },
                    'footer': {
                        templateUrl: 'app/partials/footer.html'
                    }
                }
            })
    }
    angular.module('locationApp')
        .config(Routes);
})();
