import { PlayState } from './PlayState.js'
import { SettingsState } from './SettingsState.js'

// The Title State

export class TitleState{
  constructor(stateMachine){
    this.stateMachine = stateMachine // It needs the stateMachine for switcing to other states
  }

  // The setup handles the event Listeners and logic
  // Took me a while to figure out how to take an object through an callback function but finally found this handy trick .bind(this)
  setup(){
    document.querySelector('#startButton').addEventListener('click', this.handleStartButton.bind(this)) // .BIND(THIS)!!!!
    document.querySelector('#settingsButton').addEventListener('click', this.handleSettingsButton.bind(this))
  }
  // Rendering the screen. just removing the .none class
  render(){
    document.querySelector('#titleScreen').classList.remove('none')
  }

  // When clicking the startbutton it does something and then switches the state
  handleStartButton(){

    let playerName = document.querySelector('#playerName').value // TODO make a player class and set this as its name
    // checking for empty name
    if(playerName === ''){

      alert('Error: Name not found, Please enter your name')

    }else if (playerName.toLowerCase().startsWith('sad')){

      alert('01001000 01100001 01110000 01110000 01111001 00100000 01000010 01101001 01110010 01110100 01101000 01100100 01100001 01111001 00100000 01010011 01100001 01100100 01101001 01101011 01100001 00100001 00100001 00100001')

    }else {

      this.stateMachine.switchState(new PlayState(this.stateMachine)); // Switches to PlayState when all requirments are met

    }
  };

  // When clicking on the Settings button
  handleSettingsButton(){
    this.stateMachine.switchState(new SettingsState(this.stateMachine)); // IMPORTANT!!!! every State needs the StateMachine!!! IMPORTANT!!!!
  };
}







