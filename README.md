# Assignment 4

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .

## Current Focus

Working on Requirement 3...

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

TODO: current focus

### 5. When stopping the game, no more events should get emitted (clearInterval(ref))

### 6. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)

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