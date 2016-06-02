/**
 * Created by samao on 5/31/16.
 */

import {Component} from '@angular/core';

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
  `
})

export class TodosComponent {
  todos;
  name;
  newTodo;
  errorMsg;
  successMsg;

  constructor() {
    this.todos = []
    this.todos = ['Wash Dishes', 'Pickup Kids', "Eat Dinner"];
    this.name = 'Harry';
  }

  addTodo() {
    if (!this.newTodo || this.newTodo.length < 3) {
      this.successMsg = '';
      this.errorMsg = 'Todo must be at least 3 characters';
    } else {
      this.todos.push(this.newTodo);
      this.errorMsg = '';
      this.successMsg = 'Todo Added';
    }
  }

  removeTodo(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  resetTodos() {
    this.todos.length = 0;
    this.successMsg = 'Todos Cleared';
    this.newTodo = '';
  }
}
