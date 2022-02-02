# Assignment 4

This is one of several repos that I created for the course "Angular - The Complete Guide (2022 Edition)". For a complete list of repos created for this course: https://gist.github.com/christophervigliotti/92e5b3b93cbe9d630d8e9d81b7eb6636 .

## Requirements, Notes

### 1. Create three new components: GameControl, Odd and Even

```
ng generate component game-control
ng generate component odd
ng generate component even
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