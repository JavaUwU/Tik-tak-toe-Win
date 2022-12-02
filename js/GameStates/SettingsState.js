import { TitleState } from './TitleState.js'

// The Settings State
export class SettingsState{
  constructor(stateMachine){
    this.stateMachine = stateMachine
  }
  setup(){
    // TODO
    document.querySelector('#musicControl').addEventListener('click', this.handleMusicControl)
    document.querySelector('#sfxControl').addEventListener('click', this.handleSfxControl)
    document.querySelector('#backgroundControl').addEventListener('click', this.handleBackgroundControl)
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
    // TODO
    return
  }
  handleCancelSettingsButton(){
    this.stateMachine.switchState(new TitleState(this.stateMachine));
  }
  handleBlindControl(){
    // TODO
    return
  }
  handleColorBlindControl(){
    // TODO
    return
  }
  handleResolutionControl(){
    // TODO
    return
  }
  handleBackgroundControl(){
    // TODO
    return
  }
  handleSfxControl(){
    // TODO
    return
  }
  handleMusicControl(){
    // TODO
    return
  }

}