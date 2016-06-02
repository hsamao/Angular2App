import {Component, Inject, provide} from '@angular/core';

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
  `,
  providers: [Car, Body, Tires, Engine]
})
export class AppComponent {
  color: string;

  constructor(@Inject(Car) car) {
    this.color = car.body.color;
  }
}
