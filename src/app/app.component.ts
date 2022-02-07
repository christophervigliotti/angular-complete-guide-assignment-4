// PARENT COMPONENT

import { Component } from '@angular/core';
import { ViewChild, AfterViewInit, OnChanges } from '@angular/core'; // 4.A.2.a Pass data from Child Component to Parent Component
import { Child1Component } from './child1/child1.component'; // import the child component, 4.A.2.a Pass data from Child Component to Parent Component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
  implements 
    AfterViewInit, // 4.A.2.a Pass data from Child Component to Parent Component
    OnChanges // added this to bark whenever changes in the parent happen
{

  // directives
  /* ViewChild() is a property decorator that updates the property if a DOM view change occurs. 
  It gives the parent access to all the attributes and functions of the child component. */
  @ViewChild(Child1Component, {static: false}) child1: Child1Component; // Use the @ViewChild() directive, 4.A.2.a Pass data from Child Component to Parent Component
  
  // properties
  application_title:string = 'Assignment Four';
  application_subtitle:string = "...it's a game.";
  currentMsgToChild1 = ''; // 4.A.1 Pass data from Parent Component to Child Component
  msg: string; // Create a variable to hold the data 4.A.2.b
  msgFromChild1: any; // Declare a variable that holds the data, 4.A.2.b Pass data from Child Component to Parent Component

  // methods
  // Create a function to receive the data, use $event as a parameter, and set it equal to the data variable 4.A.2.b
  getMsgFromBaby($event) {
    this.msg = $event;
  }

  // methods, lifecycle hooks 
  ngAfterViewInit(){
    this.msgFromChild1 = this.child1.msgFromChild1; // call the variable that holds the data, 4.A.2.a Pass data from Child Component to Parent Component
    console.log('app ngAfterViewInit, this.msgFromChild1 is ' + this.msgFromChild1);
  }
  ngOnChanges(){ // added this to bark whenever changes in the parent happen
    console.log('app ngOnChanges() BARK!');
  }
}