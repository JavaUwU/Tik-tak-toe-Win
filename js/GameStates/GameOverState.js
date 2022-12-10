import { TitleState } from './TitleState.js'

// The GameOverState

export class GameOverState{
  constructor(stateMachine){
    this.stateMachine = stateMachine
  }

  setup(){
    document.querySelector('#goBackButton').addEventListener('click', this.handleGoBack.bind(this))
  }
  render(){
    document.querySelector('#gameOverScreen').classList.remove('none')
  }
  handleGoBack(){
    this.stateMachine.switchState(new TitleState(this.stateMachine))
  }
}


