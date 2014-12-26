'use strict';

/**
 * @ngdoc function
 * @name ngTodoMvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTodoMvcApp
 */
angular.module('ngTodoMvcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
