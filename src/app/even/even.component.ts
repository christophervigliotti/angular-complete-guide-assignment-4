import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() property_from_component_even:{
    the_number: 0;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
