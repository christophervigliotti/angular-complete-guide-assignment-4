import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
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
TODO: Move these notes when complete to Requirement 3 section of readme.MD

in app.module.ts we make AppComponent aware of GameControlComponent, OddComponent and EvenComponent 
we do this by importing it ...
```
// this code is generated for us when using command 'ng generate component' when creating the component
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
```
...and declaring it in NgModule *...
```
// this code is generated for us when using command 'ng generate component' when creating the component
declarations: [
  AppComponent,
  GameControlComponent,
  OddComponent,
  EvenComponent
],
```
*/