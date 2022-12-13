import { GameOverState } from './GameOverState.js'

// The Play State



export class PlayState{
  constructor(stateMachine){
    this.stateMachine = stateMachine
    this.rounds = 0;
    this.player = [];
    this.computer = [];
    this.winCondition = [
    ['1','2','3'] , ['4','5','6'] , ['7','8','9'], 
    ['1','4','7'] , ['2','5','8'] , ['3','6','9'],
    ['1','5','9'] , ['3','5','7']]
  }
  // Here you can the setup implementing logic functions
  // It works great!

  // Todo Make the logic part of the PlayState
  setup(){
    console.log(this.player)
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      box.addEventListener('click', this.handleClick.bind(this), {once:true}); //{once:true}=> to be able o click only once
    });
  }
  render(){
    document.querySelector('#playScreen').classList.remove('none')
  }
  
  computerTurn(){
    let choice = Math.floor(Math.random() * 9 + 1 )

    while(this.player.includes(String(choice)) || this.computer.includes(String(choice)) ){
        choice = Math.floor(Math.random() * 9 + 1 )
    }
    this.rounds++
    this.computer.push(String(choice))
    document.querySelector(`#box${choice}`).setAttribute('style', 'background-color: red;');
    document.querySelector(`#box${choice}`).classList.add('noClick')

  }
  winConditions(){
    // checks if first player meets first wincondition
    
    this.winCondition.forEach(condition => {
        let playerArr = condition.every(element => {
            return this.player.includes(element);
        })
        let computerArr = condition.every(element => {
            return this.computer.includes(element)
        })
        if(playerArr){
            alert('Player wins')
            this.cleanUp()
            this.stateMachine.switchState(new GameOverState(this.stateMachine));
        } else if(computerArr){
            alert('computer wins')
            this.cleanUp()
            this.stateMachine.switchState(new GameOverState(this.stateMachine));
        } else if (this.rounds === 9){
            alert('Draw')
            this.cleanUp()
            this.stateMachine.switchState(new GameOverState(this.stateMachine))
        }
      })
  }
  cleanUp(){
    for(let i = 1; i <= 9; i++){
      document.querySelector(`#box${i}`).setAttribute('style', 'background-color: white;')
      document.querySelector(`#box${i}`).classList.remove('noClick')
    }
  }
    
  handleClick(event){
    console.log(this.player.includes(event.target.getAttribute('data-value')))
    if(this.player.includes(event.target.getAttribute('data-value')) || this.computer.includes(event.target.getAttribute('data-value'))){
        alert('Cant click on already clicked on box')
        return
    }else{
        this.rounds++;
        event.target.setAttribute('style', 'background-color: yellow;');
        event.target.classList.add('noClick')
        this.player.splice(0,0,event.target.getAttribute('data-value'))
        this.winConditions()
        this.computerTurn()
        this.winConditions()
    }
  }
}





