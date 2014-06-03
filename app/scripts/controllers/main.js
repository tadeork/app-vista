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
          $scope.map.myPosition = marker;
          //scope apply required because this event handler is outside of the angular domain
          $scope.$apply();
        }
      },
      myPosition: {},
      markersResults: []
    };
    $scope.results = [];
    $scope.querySearch = null;
    $scope.walkLess = null;
    $scope.spendLess = null;

    $scope.search = function() {
      Search.get({
        'productName': $scope.querySearch,
        'latitude': $scope.map.myPosition.latitude,
        'longitude': $scope.map.myPosition.longitude,
        'strategy': 0
      }, function(data) {
        $scope.map.markersResults = [];
        $scope.results = [];
        data.forEach(function(result) {
          console.log(result);
          $scope.results.push(result);
          $scope.map.markersResults.push({
            "id": result.id,
            "latitude": result.position.latitude,
            "longitude": result.position.longitude
          });
        });

      });



      //console.log(Search.search($scope.querySearch, lat, longitud, strategy));
      // $scope.map.markersResults.push({
      //   "id": 1,
      //   "latitude": -32,
      //   "longitude": -68
      // });
    };
  }
]);