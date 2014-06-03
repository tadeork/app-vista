'use strict';

var appTwitt = angular.module('appVistaApp'); //módulo

appTwitt.controller('MainCtrl', ['$scope', 'Search', //controlador del módulo
  function($scope, Search) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    //aca se guardan las respuestas
    $scope.responses = [];
   
    $scope.map = {
      center: {
        latitude: -32.89011,
        longitude: -68.8442
      },
      zoom: 15,
      events: {
        click: function(mapModel, eventName, originalEventArgs) {
          // 'this' is the directive's scope
          //console.log("user defined event: " + eventName, mapModel, originalEventArgs);
          var e = originalEventArgs[0];
          console.log('latitude: ' + e.latLng.lat() + ' longitude: ' + e.latLng.lng());

          var marker = {
            title: 'Tu direccion',
            latitude: e.latLng.lat(),
            longitude: e.latLng.lng(),
          };
          $scope.map.clickedMarker = marker;
          //scope apply required because this event handler is outside of the angular domain
          $scope.$apply();
        }
      },
      clickedMarker: {},
      markersResults: []
    };
    $scope.myLocation = {
      latitude: -33,
      longitude: -68
    };

    $scope.querySearch = null;
    $scope.walkLess = null;
    $scope.spendLess = null;

    $scope.search = function() {
      console.log($scope.querySearch);
      console.log($scope.walkLess);
      console.log($scope.spendLess);
      var strategy = 0; // convertir walkLess y spendLess en 0,1,2
      //console.log(Search.search($scope.querySearch, lat, longitud, strategy));
      $scope.map.markersResults.push({
        "id": 1,
        "latitude": -32,
        "longitude": -68
      });
    };
  }
]);