/**
 * Created by samao on 5/30/16.
 */


import {Component} from '@angular/core';

@Component({
  selector: 'my-component',
  template: `

  <h1>Hello {{name}}</h1><br>

  <h4>Property Data Binding</h4>
  <img [src] = "imageUrl"/><br>

  <h4>Property Data Binding using Interpolation</h4>
  <img src="{{imageUrl}}"/><br><br>

  <h4>Property Data Binding using building attributes</h4>
  <img bind-src = "imageUrl"/><br>

  <h4>Class Binding</h4>
  <button [class.isActive] = "isActive">Button1</button><br>

  <h4>Data Binding on class</h4>
  <button [style.background-color] = "isActive ? 'red' : 'green'">Button2</button>

  <button (click) = "changeMessage()">Message</button>
  <h1>{{clickMessage}}</h1><br>
<h4>Two Way Data Binding</h4><br>
  <input [(ngModel)] = "name"/><br>

  <input [(ngModel)]="name" (ngModelChange)="setUpperCase($event)"/>
  `
})

export class MyComponent {
  name: string;
  imageUrl: string;
  isActive: boolean;
  clickMessage: string;

  constructor() {
    this.name = 'John Doe';
    this.imageUrl = 'http://lorempixel.com/100/100';
    this.isActive = true;
  }

  changeMessage() {
    this.clickMessage = 'Hello World';
  }

  setUpperCase(e){
    this.name = e.toUpperCase();
  }
}
