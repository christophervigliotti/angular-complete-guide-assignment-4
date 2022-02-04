import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  // constants 
  counter: number = 0;
  interval_in_milliseconds: number = 1000;
  game_state_text_yes = 'the game is running';
  game_state_text_no = 'the game is not running';

  // properties
  game_is_running: boolean = false;
  interval_instance: any; // TODO: need a better (more specific) way of declaring the type here
  game_state_text: string = 'the game is not running';

  doDestroyTimer(){
    console.log('doDestroyTimer');
    clearInterval(this.interval_instance);
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
  onClickGameButton(start_or_stop:string){
    console.log('onClickGameButton ' + start_or_stop);
    this.game_is_running = start_or_stop == 'start';
    (this.game_is_running)?this.doInitTimer():this.doDestroyTimer();
    this.game_state_text = (this.game_is_running)?this.game_state_text_yes:this.game_state_text_no;
  }

  // constructur, lifecycle hooks
  constructor() {
  }
  ngOnInit(): void {
  }
}

/*


*/