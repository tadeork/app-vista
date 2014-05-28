'use strict';

var appTwitt = angular.module('appVistaApp'); //módulo

appTwitt.controller('MainCtrl', ['$scope', 'Search', //controlador del módulo
    function($scope, Search) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.querySearch = null;
        $scope.walkLess = null;
        $scope.spendLess = null;

        $scope.search = function() {
            console.log($scope.querySearch);
            console.log($scope.walkLess);
            console.log($scope.spendLess);
            var strategy = 0; // convertir walkLess y spendLess en 0,1,2
            console.log(Search.search($scope.querySearch,lat,longitud,strategy));
        };
    }
]);