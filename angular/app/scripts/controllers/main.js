'use strict';
/* global Firebase */

/**
 * @ngdoc function
 * @name ngTodoMvcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTodoMvcApp
 */
angular.module('ngTodoMvcApp')
	.controller('MainCtrl', function ($scope, $firebase) {
		// Static list of todo items
		var ref = new Firebase('https://ngtodomvc.firebaseio.com/todos');
		var sync = $firebase(ref);

		$scope.todos = sync.$asArray();

		$scope.addTodo = function () {
			$scope.todos.$add({
				text: $scope.newTodo,
				done: false
			});

			$scope.newTodo = '';
		};

	});
