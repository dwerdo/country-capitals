angular.module('CountryController', ['cb.x2js'])
	.controller('CountryCtrl', function($scope, $http, x2js) {
		var username = 'dwerdo';
		$http.get('http://api.geonames.org/countryInfo?username=' + username)
			.then(function(response) {
				var data = x2js.xml_str2json(response.data);
				$scope.countries = data.geonames.country;
				console.log($scope.countries);

			}, function(response) {

			});
	}
);