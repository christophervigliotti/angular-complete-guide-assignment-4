import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core'; // 4.A.2.b
import { EventEmitter } from 'stream'; // 4.A.2.b

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component 
  implements 
    OnInit, 
    Output, // 4.A.2.b
    EventEmitter // 4.A.2.b
{

  // directives
  @Output() callParent = new EventEmitter(); // Declare a variable that is assigned to the @Ouput decorator which is set to a new EventEmitter(), 4.A.2.b

  // properties
  currentMsgToParent = 'child2.component.ts says "cry, cry…"'; // 4.A.2.b

  // methods
  msgToParent(){ // Create a function that calls emit on the event with the data that we want to send, 4.A.2.b
    this.callParent.emit(this.currentMsgToParent);
  }

  // method, constructor
  constructor() { }

  // methods, lifecycle hooks
  ngOnInit(): void {
  }
}