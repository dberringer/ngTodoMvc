'use strict';

/**
 * @ngdoc function
 * @name ngTodoMvcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngTodoMvcApp
 */
angular.module('ngTodoMvcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
