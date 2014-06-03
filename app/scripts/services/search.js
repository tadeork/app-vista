'use strict';
angular.module('resource.Search', []);
angular.module('resource.Search').service('Search', ['$resource',
	function($resource) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		return $resource('http://localhost:8080/precios-justos/rest/search', {
			callback: "JSON_CALLBACK"
		}, {
			get: {
				method: 'JSONP'
			}
		});
	}
]);