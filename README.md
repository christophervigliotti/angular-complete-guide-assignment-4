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

in game-control.component.html...
```
<button class="btn btn-primary">Start Game</button>
<button class="btn btn-primary">Stop Game</button>
```

in app.component.html...
```
<app-game-control></app-game-control>
```

### 3. When starting the game, an event (holding a incrementing number) should get emitted each second (ref = setInterval())

This step isn't complete but I'm happy with how I have organized my methods into "do", "handle" and "on" methods (see notes in code below).

```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // constants
  counter = 0;
  interval_in_milliseconds = 1000;
  interval_instance; // TODO: declare an empty var of type instance here?

  // properties
  timer_enabled = false;

  /* 
  methods 
    prefix  what it does
    ------  ------------
    do      do a thing
    handle  do multiple things
    on      when a thing happens
  */
  doButtonState(button_id: string, enable_or_disable:string){
    $('#' + button_id).(enable_or_disable);    
  }
  // 
  doDestroyTimer(){
    clearInterval(this.interval_instance);
  }
  doInitTimer(){
    this.timer_enabled = true;
    this.interval_instance = setInterval(function()
      { 
        this.counter++;
        console.log(this.counter);
      }, 
      this.interval_in_milliseconds);
  }
  handleGameState(game_state_id:string){
    // if there were more than two states the conditional logic here should be a case statement
    if(game_state_id == 'start'){
      this.doInitTimer();
      this.doButtonState('start_button','disable');
      this.doButtonState('stop_button','enable');

    }else if(game_state_id == 'stop'){
      this.doDestroyTimer();
      this.doButtonState('start_button','enable');
      this.doButtonState('stop_button','disable');
    }
  }
  onClickStartGame(){
    this.handleGameState('start');
  }
  onClickStopGame(){
    this.handleGameState('stop');
  }

  // constructur, lifecycle hooks
  constructor() {
    // this.initTimer();
  }
  ngOnInit(): void {
  }
}
```

### 4. The event should be listenable from outside the component

### 5. When stopping the game, no more events should get emitted (clearInterval(ref))

### 6. A new Odd component should get created for every odd number emitted, the same should happen for the Even Component (on even numbers)

### 7. Simply output Odd - NUMBER or Even - NUMBER in the two components

### 8. Style the element (e.g. paragraph) holding your output text differently in both components

## Up And Running
```
sudo npm i -g npm@6
sudo npm install
ng serve
```
via https://bit.ly/32r25z2