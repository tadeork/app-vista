'use strict';

var appTwitt = angular.module('appVistaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
});

appTwitt.controller('SearchTwittsController', 
    function($scope, $resource){
        $scope.twits = [
            {'id':1,'contendio':'Carne a buen precio', 'precio':30.50},
            {'id':2,'contendio':'Carne a buen precio', 'precio':30.50},
            {'id':3,'contendio':'Carne a buen precio', 'precio':30.50},
            {'id':4,'contendio':'Carne a buen precio', 'precio':30.50}
        ];
});