'use strict';

angular.module('angularSampleTodo.todoList', ['ngRoute', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/todo-list', {
            templateUrl: 'todo-list/todo-list.html',
            controller: 'TodoListCtrl'
        });
    }])

    .controller('TodoListCtrl', ['$scope', function ($scope) {

        $scope.isAllSelected = false;
        $scope.datepicker = {
            opened: false
        };
        $scope.todos = [
            {text: 'learn AngularJS', date: new Date('2018-01-02'), selected: false},
            {text: 'build an AngularJS app', date: new Date('2018-01-22'), selected: false}];

        $scope.addTodo = function () {
            $scope.todos.push({text: $scope.todoText, selected: false, date: $scope.todoDate});
            $scope.todoText = '';
            $scope.todoDate = '';
        };

        $scope.toggleSelectAll = function () {
            $scope.isAllSelected = !$scope.isAllSelected;

            angular.forEach($scope.todos, function (todo) {
                todo.selected = $scope.isAllSelected;
            });
        };

        $scope.delete = function () {
            var selectedCount = 0;
            angular.forEach($scope.todos, function (todo) {
                if (todo.selected) selectedCount++;
            });

            if(selectedCount == 0){
                return alert('Please select before deleting');
            }

            if(!confirm('Are you sure?')) return;

            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.selected) $scope.todos.push(todo);
            });
        };
    }]);