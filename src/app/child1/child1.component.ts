import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() msgFromParent1: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
