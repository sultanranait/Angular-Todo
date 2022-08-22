'use strict';

describe('angularSampleTodo.todoList module', function() {

  beforeEach(module('angularSampleTodo.todoList'));

  describe('todoList controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var TodoListCtrl = $controller('TodoListCtrl');
      expect(TodoListCtrl).toBeDefined();
    }));

  });
});