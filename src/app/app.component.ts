import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  application_title:string = 'Assignment Four';
  application_subtitle:string = "...it's a game.";

  // 4.A.1 Pass data from Parent Component to Child Component
  currentMsgToChild1 = '';
  ngAfterViewInit(){

  }
}
