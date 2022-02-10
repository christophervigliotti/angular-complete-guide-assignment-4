# Assignment 4

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .

## Current Focus

Working on Requirement 6

## Requirements, Notes

### 1. Create three new components: GameControl, Odd and Even

```
ng generate component game-control
ng generate component odd
ng generate component even
```
...or using shorthand...
```
ng g c game-control
ng g c odd
ng g c even
```

### 2. The GameControl Component should have buttons to start and stop the game

game-control.component.html...
```
<button class="btn btn-primary">Start Game</button>
<button class="btn btn-primary">Stop Game</button>
```

app.component.html...
```
<app-game-control></app-game-control>
```

### 3. When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())

game-control.component.ts...
```
counter: number = 0;
interval_in_milliseconds: number = 1000;
doInitTimer(){
  console.log('doInitTimer');
  this.interval_instance = setInterval(() => { 
    this.incrementTimer(); // passing the incrementTimer function in here so I have access to this.timer
    }, this.interval_in_milliseconds);
}
incrementTimer(){
  this.counter++;
  console.log('counter ' + this.counter);
}
onClickGameButton(start_or_stop:string){
  // TODO: replace the start or stop with a method that sees which id of button was pressed
  console.log('onClickGameButton ' + start_or_stop);
  this.game_is_running = start_or_stop == 'start';
  (this.game_is_running)?this.doInitTimer():this.doDestroyTimer();
  this.game_state_text = (this.game_is_running)?this.game_state_text_yes:this.game_state_text_no;
}
```
game-control.component.html...
```
<button 
    class="btn btn-primary mr-5"
    [disabled]="game_is_running" 
    (click)="onClickGameButton('start')" 
    id="start_button"
>Start</button>
<button 
    class="btn btn-primary" 
    [disabled]="!game_is_running"
    (click)="onClickGameButton('stop')"
    id="stop_button"
>Stop</button>
<p>{{game_state_text}}</p>
```

### 4. The event should be listenable from outside the component

This one took a bit of work because it wasn't clicking that the parent's view has to be involved in the flow.  First I got the "child-to-parent" communication working using a separate tutorial (using child component 'child-component', https://angular.io/guide/inputs-outputs#sending-data-to-a-parent-component).  Once I had a handle on how things were connected I turned my attention back to the requirement.  I implemented two eventEmitters...one when the game starts or stops and one when the counter value changes.

#### In The Child Component 
```
// game-control.component.ts...
// declare event emitters
@Output() gameStartStopStateChangeEventEmitter = new EventEmitter<boolean>();
@Output() incrementTimerEventEmitter = new EventEmitter<number>();
// emit the counter event (found in function incrementTimer())
this.incrementTimerEventEmitter.emit(this.counter);
// emit the game start event (found in function incrementTimer())
this.gameStartStopStateChangeEventEmitter.emit(true);
// emit the game stop event (found in function doDestroyTimer())
this.gameStartStopStateChangeEventEmitter.emit(false);

```
#### In the Child Template
```
/*
My events are being emitted via custom functions (and not directly via child template changes)...as such ho changes were made to the child component.  Note that I could trigger an event via event binding...which I did during tinkering 
*/
// item-output.component.html...
<label for="item-input">Add an item:</label>
<input type="text" id="item-input" #newItem>
<button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>
```
#### In the Parent Component 
```
// app.component.ts...
onGameStartStopStateChangeEvent(game_is_running){
  console.log('app > onGameStartStopStateChangeEvent(), game_is_running ' + game_is_running);
}
onIncrementTimerEvent(counter){
  console.log('app > onIncrementTimerEvent(), counter ' + counter);
}
```
#### In The Parent Template

This piece is what stitches the event emitters in the child to the methods in the parent. I wonder if there is a way to do this connection between child and parent without using code in the parent template.
```
// app.component.html...
<app-game-control
  (incrementTimerEventEmitter)="onIncrementTimerEvent($event)" 
  (gameStartStopStateChangeEventEmitter)="onGameStartStopStateChangeEvent($event)" 
></app-game-control>
```

### 5. When stopping the game, no more events should get emitted (clearInterval(ref))

This is handled in the child (because when the game stops no more events are emitted).

### 6. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)

Note: the variable names here are oddly (pun intended) specific.

in app.component.ts
```
odds_property_from_app = [{
  // the_number: 0*
}];
```

in app.component.html
```
<div class="col-xs-6">
  <h2 class="display-2">The Odds</h2>
  <app-odd
    *ngFor="let local_var_odd of odds_property_from_app" 
    [property_from_component_odd]="local_var_odd"
  ></app-odd>      
</div>
```
in odd.component.ts (similar code in even.component.ts)
```
@Input() property_from_component_odd:{
  the_number: 0;
};
```

in odd.component.html
```
<p>{{property_from_component_odd.the_number}}</p>
```

### 7. Simply output Odd - NUMBER or Even - NUMBER in the two components

### 8. Style the element (e.g. paragraph) holding your output text differently in both components

### X. Extra Credit (Requirements that I made up)

* disable start button if game is running - handled via `[disabled]="!game_is_running"`
* disable stop button if game is not running - handled via `[disabled]="game_is_running"`
* display the current game state ala 'the game is running' / 'the game is not running' - `<p>{{game_state_text}}</p>` updates via `this.game_state_text = (this.game_is_running)?this.game_state_text_yes:this.game_state_text_no;` 
* give the player three lives, losing one life every time they hit an odd number `this.number_of_lives = (odd_or_even == 'odd')?(this.number_of_lives -1):this.number_of_lives;`
* every time the player stops on even make the next round of the game more difficult `(odd_or_even == 'even')?(this.interval_in_milliseconds = Math.max((this.interval_in_milliseconds - 150),100)):'do_nothing';`
* end the game when they reach zero lives...

achieved in .ts file with... 
```
doHandleGameIsOver(){
  if(this.number_of_lives == 1){
      console.log('doGameIsOver');
      this.game_over = true;
    }
}
```
...and by changing Property Binding attribute in the start and stop buttons account for the unique game state game_over via `[disabled]="(!game_is_running || game_over)"` and `[disabled]="(game_is_running || game_over)" `

...splash in an ngIf (with an else condition) just to get some more practice with that...

```
<p *ngIf="game_over;else game_not_over">You can no longer do it.  GAME OVER!</p><!-- this is a directive -->
<ng-template #game_not_over><p>You can do it!</p></ng-template>
```

* add padding to the right of the Start button
* add a reset game button
* add a high score
* shoehorn in a random ngClass call since I am reviewing past lesson `[ngClass]="{you_can_do_it: 1 == 1}"` applies class you_can_do_it if 1 is equal to 1 lol

## Up And Running
```
sudo npm i -g npm@6
sudo npm install
ng serve
```
via https://bit.ly/32r25z2