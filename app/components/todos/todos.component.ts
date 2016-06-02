/**
 * Created by samao on 5/31/16.
 */

import {Component} from '@angular/core';
import {TodoService} from "../../services/todos/todo.service";


@Component({
  selector: 'todos',
  template: `
  <div>
    <div *ngIf="errorMsg">
        <div class="alert alert-danger">{{errorMsg}}</div>
    </div>

    <div *ngIf="successMsg">
        <div class="alert alert-success">{{successMsg}}</div>
    </div>
    <input type="text" class="form-control" [(ngModel)]="newTodo" (keyup.enter)="addTodo()"/><br>
  </div>


  <div *ngIf="todos">
    No Todos found
  </div>
  <div [ngSwitch]="name">
    <div *ngSwitchWhen="'John'">
      John
    </div>
    <div *ngSwitchWhen="'Bob'">
      Bob
    </div>
    <div *ngSwitchDefault>
      Something Else
    </div>
  </div>
 <ul class="list-group">
  <li *ngFor="#todo of todos" class="list-group-item">
    <a href ="#" (dblclick) = "removeTodo(todo)">{{todo}}</a>
  </li>
  </ul>

  <button class="btn btn-default" (click)="resetTodos()">Reset</button>
  `,
  providers: [TodoService]
})

export class TodosComponent {
  todos;
  name;
  newTodo;
  errorMsg;
  successMsg;

  constructor(private todoService:TodoService) {
    this.todos = todoService.todos;
  }

  addTodo() {
    if (!this.newTodo || this.newTodo.length < 3) {
      this.successMsg = '';
      this.errorMsg = 'Todo must be at least 3 characters';
    } else {
      this.todoService.addTodo(this.newTodo.trim());
      this.errorMsg = '';
      this.successMsg = 'Todo Added';
    }
  }

  removeTodo(todo) {
   this.todoService.removeTodo(todo);
  }

  resetTodos() {
    this.todoService.resetTodos();
    this.successMsg = 'Todos Cleared';
    this.newTodo = '';
  }
}
