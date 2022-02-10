import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  @Input() property_from_component_odd:{
    the_number: 0;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
