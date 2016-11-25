'use strict';
//creamos el modulo ferreteria
var tinyurl = angular.module('tinyurl', ['ngRoute']);

tinyurl.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl : 'views/home.html',
		controller : 'homeCtrl'
	})
	.when('/list', {
		templateUrl : 'views/list.html',
		controller : 'listCtrl',
	})
	.otherwise({
		templateUrl : 'views/home.html',
	});
});

tinyurl.controller('tabsCtrl', function($scope, $location) {
	$scope.isActive = function(viewLocation){
		return viewLocation === $location.path();
	}
});


tinyurl.controller('homeCtrl', function ($scope, $route) {
	$scope.title = 'Home';
});


tinyurl.controller('listCtrl', function ($scope, $http) {
	$scope.title = 'Lista de URLs';

	$http.get('/list').then(function(res){
		$scope.list = res.data;
	});
});


