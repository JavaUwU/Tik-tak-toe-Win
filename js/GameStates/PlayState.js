import { handleClick } from '../logic.js'

// The Play State

export class PlayState{
  constructor(stateMachine){
    this.stateMachine = stateMachine
  }
  // Here you can the setup implementing logic functions
  // It works great!

  // Todo Make the logic part of the PlayState
  setup(){
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      box.addEventListener('click', handleClick);
    });
  }
  render(){
    document.querySelector('#playScreen').classList.remove('none')
  }
}


