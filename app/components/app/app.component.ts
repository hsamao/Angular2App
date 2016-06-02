import {Component, Inject, provide, Pipe, PipeTransform} from '@angular/core';

import {MyComponent} from "../my-component/my-component.component.ts";
import {TodosComponent} from "../todos/todos.component";
import {Body} from "../../services/car/body.service";
import {Car} from "../../services/car/car.service";
import {Tires} from "../../services/car/tires.service";
import {Engine} from "../../services/car/engine.service";


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
  `,
  providers: [Car, Body, Tires, Engine]
})
export class AppComponent {
  color: string;
  name: string;
  today: Date;
  birthday: Date;
  number: number;
  promise;

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
