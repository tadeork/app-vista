'use strict';

angular
  .module('appVistaApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'resource.Search',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
