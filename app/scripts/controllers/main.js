'use strict';

var appTwitt = angular.module('appVistaApp'); //módulo

appVistaApp.controller('MainCtrl', //controlador del módulo
        function($scope) {
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
            };
        });
console.log('soy el controlador del módulo');
