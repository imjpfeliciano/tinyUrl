'use strict';
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

	$scope.getURLList = function() {
		$http.get('/list').then(function(result){
			$scope.list = result.data;
		});
	};

	$scope.createShortUrl = function() {
		console.log('Enter to short url function');
		var url = $('#nurl').val();
		$('#nurl').val('');

		$http.post('/list', {url: url}).then(function(result){

		});	

		$scope.getURLList();
	};
});



