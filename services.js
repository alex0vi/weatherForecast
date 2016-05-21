//services
weatherApp.service('CityService', function () {
    this.city = 'New York, NY';
});

weatherApp.service ('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function (city, days){
        var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ebecb70811c167514cfe65e9e6136881", {
            callback: 'JSON_CALLBACK' }, {
                get: {
                    method: 'JSONP'
                }
            });

        return weatherApi.get({q: city, cnt: days});
    }
}]);
