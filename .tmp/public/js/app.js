var AddressBookApp = angular.module('AddressBookApp',['ui.bootstrap','sailsResource','ngRoute','ngMessages']);

AddressBookApp.run(function(){
  console.log('Address App ready to take orders!!!')
});

AddressBookApp.config(['$routeProvider', '$locationProvider', 'sailsResourceProvider', function ($routeProvider, $locationProvider, sailsResourceProvider) {

  sailsResourceProvider.configuration = {
    prefix: '/api',
    verbose: true
  };

  $locationProvider.html5Mode(true);

  $routeProvider
  .when('/', {
    templateUrl: '/views/home.html',
    controller: 'HomeCtrl'
  })

  .when('/about', {
    templateUrl: '/views/about.html',
    controller: 'AboutCtrl'
  })

  .when('/person/new', {
    templateUrl:'/views/person/new.html',
    controller:'PersonNewCtrl'
  })

  .when('/person/:id', {
    templateUrl: 'views/person/show.html',
    controller: 'PersonShowCtrl'
  })

  .otherwise({
    templateUrl:'/views/404.html'
  })

}])