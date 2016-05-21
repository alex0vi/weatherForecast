//directives
weatherApp.directive('weatherTemp', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'directives/temp.html',
        scope: {
            weatherDay: "=",
            converToStandard: "&",
            converToDate: "&",
            dateFormat: "@"
        }
    }
});
