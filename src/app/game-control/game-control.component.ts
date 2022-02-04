import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // constants 
  game_state_text_yes = 'the game is running';
  game_state_text_no = 'the game is not running';

  // properties
  counter: number = 0;
  game_state_text: string = 'the game is not running';
  game_is_running: boolean = false;
  interval_instance: any; // TODO: need a better (more specific) way of declaring the type here
  interval_in_milliseconds: number = 1000;
  number_of_lives: number = 3;
  game_over: boolean = false;

  // methods
  doDestroyTimer(){
    var odd_or_even:string = (this.counter % 2 === 0)?'even':'odd';
    console.log('doDestroyTimer, odd_or_even ' + odd_or_even);
    this.number_of_lives = (odd_or_even == 'odd')?(this.number_of_lives -1):this.number_of_lives;
    clearInterval(this.interval_instance);
    this.counter = 0;
    (odd_or_even == 'even')?(this.interval_in_milliseconds = Math.max((this.interval_in_milliseconds - 150),100)):'do_nothing';
    this.doHandleGameIsOver();
  }
  doHandleGameIsOver(){
    if(!this.number_of_lives){
        console.log('doHandleGameIsOver');
        this.game_over = true;
      }
  }
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
  onClickGameButton(event: any){
    var start_or_stop:string = (event.target.id == 'start_button')?'start':'stop';
    console.log('onClickGameButton, start_or_stop ' + start_or_stop + ', interval_in_milliseconds ' + this.interval_in_milliseconds);
    this.game_is_running = start_or_stop == 'start';
    (this.game_is_running)?this.doInitTimer():this.doDestroyTimer();
    this.game_state_text = ((this.game_is_running)?this.game_state_text_yes:this.game_state_text_no) + ', number of lives: ' + this.number_of_lives;
  }

  // constructur & lifecycle hook methods
  constructor() {
  }
  ngOnInit(): void {
  }
}