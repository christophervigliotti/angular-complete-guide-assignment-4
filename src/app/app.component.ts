import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constants TODO: how do I declare constants in typescript
  application_title:string = 'Assignment Four';
  application_subtitle:string = "...it's a game.";

  // properties of child components
  // * = property was commented out because the app was displaying it.  I only want to display subsequent values.  I'm sure there is a better way to handle this.
  evens_property_from_app = [{
    // the_number: 0*
  }];
  odds_property_from_app = [{
    // the_number: 0*
  }];
  counter = 0;

  // properties
  is_game_running_parent_property:boolean = false;
  items = ['item1', 'item2', 'item3', 'item4']; // via https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component

  // methods
  addItem(newItem: string) {
    console.log('app > addItem, newItem ' + newItem);
    this.items.push(newItem);
  }
  onGameStartStopStateChangeEvent(game_is_running){
    console.log('app > onGameStartStopStateChangeEvent(), game_is_running ' + game_is_running);
    if(!game_is_running){
      if(this.counter % 2 === 0){ // if even
        this.evens_property_from_app.push({the_number: this.counter});
      }else{ // else odd
        this.odds_property_from_app.push({the_number: this.counter});
      }
    }
  }
  onIncrementTimerEvent(counter){
    console.log('app > onIncrementTimerEvent(), counter ' + counter);
    this.counter = counter;
  }

  // constructor & lifecycle hook methods
  constructor() {
  }
  ngOnInit(): void {
    console.log('app > ngOnInit');
  }
}