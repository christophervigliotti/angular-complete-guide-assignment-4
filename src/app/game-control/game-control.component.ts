import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // constantsFunction
  counter: number = 0;
  interval_in_milliseconds: number = 1000;

  // properties
  game_is_running: boolean = false;
  interval_instance: any; // TODO: need a better (more specific) way of declaring the type here
  timer_enabled: boolean = false;
  game_state_text: string = 'the game is not running';

  /* 
  the method to my method naming madness... 
    prefix  what it does
    ------  ------------
    do      do a thing
    handle  do multiple things
    on      when a thing happens
  */
  doButtonState(){
    // this is not the Angular way to do it (and we don't have access to jQuery here...TODO: resolve this $('#' + button_id).(enable_or_disable);    
  }
  doGameStateText(){

  }
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
  // TODO: use event binding
  handleGameState(game_state_id:string){
    // if there were more than two states the conditional logic here should be a case statement
    if(game_state_id == 'start'){
      this.doInitTimer();

    }else if(game_state_id == 'stop'){
      this.doDestroyTimer();
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
  }
  ngOnInit(): void {
  }
}