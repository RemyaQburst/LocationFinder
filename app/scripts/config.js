(function () {
    'use strict';

   var Config = function ($translateProvider,$locationProvider) {
   		$translateProvider.useStaticFilesLoader({
   			prefix: 'app/lang/',
   			suffix: '.json'
   		});
   		$translateProvider.preferredLanguage('en');
   		$translateProvider.fallbackLanguage(['en', 'fr']);
       $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
   };
   angular.module('locationApp')
    .config(Config);
 })();