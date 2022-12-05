import { TitleState } from './TitleState.js'

// The Settings State
export class SettingsState{
  constructor(stateMachine){
    this.stateMachine = stateMachine
  }
  setup(){
    // TODO
  
    
    document.querySelector('#resolutionControl').addEventListener('click', this.handleResolutionControl)
    document.querySelector('#colorBlindControl').addEventListener('click', this.handleColorBlindControl)
    document.querySelector('#blindControl').addEventListener('click', this.handleBlindControl)

    document.querySelector('#acceptSettingsButton').addEventListener('click', this.handleAcceptSettingsButton.bind(this))
    document.querySelector('#cancelSettingsButton').addEventListener('click', this.handleCancelSettingsButton.bind(this))
  }
  render(){
    document.querySelector('#settingsScreen').classList.remove('none')
  }
  handleAcceptSettingsButton(){
    
    this.handleSfxControl()
    this.handleMusicControl()
    this.handleBackgroundControl()
    this.handleBlindControl()
    this.stateMachine.switchState(new TitleState(this.stateMachine));
  }
  handleCancelSettingsButton(){
    this.stateMachine.sfx.select.play()
    this.stateMachine.switchState(new TitleState(this.stateMachine));
  }
  //Handles blind mode
  handleBlindControl(){
    
    if(document.querySelector('#blindControl').value === 'on'){
      console.log('blind')
      document.querySelector('body').style.backgroundColor = '#000000'
      document.querySelector('#settingsScreen').classList.add('none')
    }
    
  }
  handleColorBlindControl(){
    
    return
  }
  handleResolutionControl(){
    // TODO
    return
  }
  // handles background color of the settingsScreen and the titleScreen
  // TODO make background change while you fidget with the color palette
  handleBackgroundControl(){
    let color = document.querySelector('#backgroundControl').value
    console.log(color)
    document.querySelector('#settingsScreen').style.backgroundColor = color
    document.querySelector('#titleScreen').style.backgroundColor = color
  }
  // handles the volume of the sound effects
  // TODO Make volume change while you fidget with the slider
  handleSfxControl(){
    this.stateMachine.sfx.select.volume = Number(document.querySelector('#sfxControl').value) / 100
  }
  // Handles the volume bar and sets the SFX music volume
  handleMusicControl(){
    this.stateMachine.sfx.music.volume = Number(document.querySelector('#musicControl').value) / 100
  }

}