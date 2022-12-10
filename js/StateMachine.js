import { TitleState } from './GameStates/TitleState.js'
import { SFX } from './sfx.js'
// TODO 
// this gamestate file should handle information sent beetween states. saving game etc

// This File handles the switching of the states
// every State needs access to this file
export class StateMachine{
  constructor(){
    this.currentState = new TitleState(this) // State machine needs to initilize on a state
    this.sfx = new SFX() // Sound Effects Manager
  }

  // SwitchState handles the switching of states.. duh 
  // it takes an argument that sets the new state
  // then it renders the new State and sets up the event listeners and etc
  switchState(state){
    this.currentState = null
    this.currentState = state;

    this.resetScreens() // Needs to reset the screens
    this.currentState.render(); // Each state has a render function that simply removes the display: none css
    this.currentState.setup(); // Each State has a setup function that adds all the event listeners
    }
  // this is basicly the initialization of the state machine. it renders and setups the titleScreen check the app.js
  go(){
    this.currentState.render()
    this.currentState.setup()
  }
 
// resetting screens
  resetScreens(){
      document.querySelector('#settingsScreen').classList.add('none')
      document.querySelector('#titleScreen').classList.add('none')
      document.querySelector('#playScreen').classList.add('none')
      document.querySelector('#gameOverScreen').classList.add('none')
  }
}

