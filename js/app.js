import { StateMachine } from './StateMachine.js'
import { TitleState } from './GameStates/TitleState.js'



function app (){
    // Initializing the stateMachine
    const stateMachine = new StateMachine()
    stateMachine.go()

}



app()
