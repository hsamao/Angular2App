/**
 * Created by samao on 6/1/16.
 */

export class TodoService {

  private _todos = ['Wash Dishes', 'Go To Dinner'];


  get todos():string[] {
    return this._todos;
  }

  addTodo(newTodo) {
    this.todos.push(newTodo);
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  resetTodos() {
    this.todos.length = 0;
  }
}
