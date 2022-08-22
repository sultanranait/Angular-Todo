'use strict';

// Declare app level module which depends on views, and components
angular.module('angularSampleTodo', [
    'ngRoute',
    'ui.bootstrap',
    'angularSampleTodo.todoList'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/todo-list'});
}]);
