'use strict';
angular.module('resource.Search', []);
angular.module('resource.Search').service('Search', ['$http',
  function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var Search = {};

    Search.search = function (query, lat, long, strategy) {
      return {};
    };
    

    return Search;
  }
]);