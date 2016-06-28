(function () {
    'use strict';

   var Config = function ($translateProvider) {
   		$translateProvider.useStaticFilesLoader({
   			prefix: 'app/lang/',
   			suffix: '.json'
   		});
   		$translateProvider.preferredLanguage('en');
   		$translateProvider.fallbackLanguage(['en', 'fr']);
   };
   angular.module('locationApp')
    .config(Config);
 })();