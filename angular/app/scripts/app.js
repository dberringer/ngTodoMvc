'use strict';

/**
 * @ngdoc overview
 * @name ngTodoMvcApp
 * @description
 * # ngTodoMvcApp
 *
 * Main module of the application.
 */
angular
  .module('ngTodoMvcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
