//Routes
weatherApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'HomeCtrl'
    })

    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'ForescastCtrl'
    })

    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'ForescastCtrl'
    });
});
