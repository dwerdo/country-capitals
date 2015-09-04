angular.module('router', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: './components/home/HomeView.html',
			controller: 'HomeCtrl'
		}).when('/city', {
			templateUrl: './components/city/CityView.html',
			controller: 'CityCtrl'
		}).when('/country', {
			templateUrl: './components/country/CountryView.html',
			controller: 'CountryCtrl'
		});
	});