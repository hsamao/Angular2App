import {Component} from '@angular/core';

import {MyComponent} from "../my-component/my-component.component.ts";
import {TodosComponent} from "../todos/todos.component";

@Component({
  selector: 'my-app',
  template: `
  <h1>My Todos</h1>
  <todos></todos>
  `,
  directives: [TodosComponent]
})
export class AppComponent {
}
