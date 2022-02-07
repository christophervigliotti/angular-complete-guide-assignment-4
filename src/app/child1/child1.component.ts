// CHILD COMPONENT
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  // directives
  @Input() msgFromParent1: any[]; // 4.A.1 Pass data from Parent Component to Child Component

  // properties
  // Create two variables, one that holds the data via double-binding and one that is an array, 4.A.2 Pass data from Child Component to Parent Component
  currentMsgToParent = ''; 
  msgFromChild1 = [];

  // methods

  // the function that pushes the value of the variable into the array, 4.A.2
  msgToParent() {  
    console.log('child1 msgToParent, this.currentMsgToParent is ' + this.currentMsgToParent);
    this.msgFromChild1.push(this.currentMsgToParent); 
  }

  // methods, constructor
  constructor() { }

  // methods, lifecycle hooks

  ngOnInit(): void {
  }

}
