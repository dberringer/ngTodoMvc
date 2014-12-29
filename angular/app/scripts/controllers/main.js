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
		// Static list of todo items
		$scope.todos = [
			{
				text: 'Paint fence',
				done: false
			},
			{
				text: 'Wash car',
				done: false
			},
			{
				text: 'Sand floor',
				done: true
			}
		];

		$scope.deleteTodo = function (index) {
			$scope.todos.splice(index,1);
		}

		$scope.addTodo = function () {
			$scope.todos.push({
				text: $scope.newTodo,
				done: false
			});

			$scope.newTodo = '';
		}

	});
