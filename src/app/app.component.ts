import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  application_title:string = 'Assignment Four';
  application_subtitle:string = "...it's a game.";
  is_game_running_parent_property:boolean = false;

  // via https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem: string) {
    console.log('app > addItem, newItem ' + newItem);
    this.items.push(newItem);
  }
  onGameStartStopStateChangeEvent(game_is_running){
    console.log('app > onGameStartStopStateChangeEvent(), game_is_running ' + game_is_running);
  }
  onIncrementTimerEvent(counter){
    console.log('app > onIncrementTimerEvent(), counter ' + counter);
  }
}
