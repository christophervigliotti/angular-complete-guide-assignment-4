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