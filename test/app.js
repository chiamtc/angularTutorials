'use strict';
angular.module("mySub", []);
angular.module("myApp", ['mySub', 'ngRoute'])

.config(['$routeProvider' , function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'dank/main.html'
        })
		
		.when('/pages',{
			controller: 'myCtrl',
			templateUrl:'dank/pages.html'
		});
		
}])