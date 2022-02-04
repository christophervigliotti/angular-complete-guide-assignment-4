import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
TODO: move to readme.MD when the assignment is complete

in app.module.ts we make AppComponent aware of GameControlComponent, OddComponent and EvenComponent 
we do this by importing it ...
```
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
// FYI this code is generated for us automatically when creating the component using command 'ng generate component'
```
...and declaring it in NgModule *...
```
declarations: [
  AppComponent,
  GameControlComponent,
  OddComponent,
  EvenComponent
],
// FYI this code is generated for us automatically when creating the component using command 'ng generate component'
```
*/