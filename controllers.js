//controllers
weatherApp.controller('HomeCtrl', ['$scope', '$location', 'CityService',
    function ($scope, $location, CityService) {
        $scope.city = CityService.city;

        $scope.$watch('city', function () {
            CityService.city = $scope.city;
        });

        $scope.submit = function(){
            $location.path("/forecast");
        };

}]);

weatherApp.controller('ForescastCtrl', ['$scope', '$routeParams', 'CityService', 'weatherService',
    function ($scope, $routeParams, CityService, weatherService) {
        $scope.city = CityService.city;
        $scope.days = $routeParams.days || '2';

        $scope.weatherResult = weatherService.GetWeather( $scope.city, $scope.days);

        $scope.covertToFah = function (deg) {
            return Math.round( 1.8 * (deg - 273) + 32);
        }

        $scope.converToDate = function (dt) {
            return new Date(dt * 1000);
        }

}]);
