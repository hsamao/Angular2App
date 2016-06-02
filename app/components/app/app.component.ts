import {Component, Inject, provide, Pipe, PipeTransform} from '@angular/core';
import {NgForm} from '@angular/common';

import {MyComponent} from "../my-component/my-component.component.ts";
import {TodosComponent} from "../todos/todos.component";
import {Body} from "../../services/car/body.service";
import {Car} from "../../services/car/car.service";
import {Tires} from "../../services/car/tires.service";
import {Engine} from "../../services/car/engine.service";
import {Post} from "../../Post";



@Component({
  selector: 'my-app',
  template: `
 <h1>Color: {{color}}</h1>
  <h2>{{name | uppercase}}</h2>
  <h2>{{name | lowercase}}</h2>
  <h2>{{name | replace: 'Doe': 'Smith'}}</h2>

  <h2>Today is {{today | date: 'longDate'}} and it is {{today | date: 'shortTime'}}</h2>
  <h2>{{name}}'s birthday is {{birthday | date:'longDate'}}</h2>
  <h2>{{number | currency:'USD': 'true'}}</h2>

  <h2>{{promise | async}}</h2>

  <h1>Add Post</h1>
  <form>
  <div class="form-group">
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" [(ngModel)]='model.title' ngControl="title" #title="ngForm" required>
    </div>

    <div [hidden]="title.valid || title.pristine"  class="alert alert-danger">Title is required</div>

    <div class="form-group">
      <label>Category</label>
      <select class="form-control" [(ngModel)]='model.category' ngControl="category" required>
        <option *ngFor="#category of categories">{{category}}</option>
      </select>
    </div>
    <div class="form-group">
      <label>Body</label>
      <textarea class="form-control" [(ngModel)]='model.body' ngControl="body"></textarea>
    </div>
    <div class="form-group">
      <label>Author</label>
      <input type="text" class="form-control" [(ngModel)]='model.author' ngControl="author">
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
    </div>
  </form>
  `,
  styles: [`
  .ng-valid[required] {
  border: 1px solid #42A948; /* green */
  }
  .ng-invalid{
  border: 1px solid #a94442; /* red */
  }
  `]
  ,
  providers: [Car, Body, Tires, Engine]
})
export class AppComponent {
  color: string;
  name: string;
  today: Date;
  birthday: Date;
  number: number;
  promise;

  categories = ['Technology', 'Business', 'Entertainment'];

  model = new Post(1, 'Post One', this.categories[0], 'This is the body', 'Brad Traversy');

  submitted = false;

  constructor(@Inject(Car) car) {
    this.color = car.body.color;
    this.name = 'John Doe';
    this.today = new Date();
    this.birthday = new Date(1981, 09, 10);
    this.number = 5;

    this.promise = new Promise(function(resolve, reject){
      setTimeout(function(){
        resolve('Hey, I am a promise');
      }, 2000);
    });
  }
}
