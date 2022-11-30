// Frontend stuff

import { handleClick } from './logic.js'

let playerName;
export function setup(){
  
}

function setupPlayScreen() {
  switchScreen('play')
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.addEventListener('click', handleClick);
  });
}

export function setupTitleScreen(){
  document.querySelector('#startButton').addEventListener('click', handleStartGame)
}

function handleStartGame(){
  playerName = document.querySelector('#playerName').value
  if(playerName === ''){
    alert('Error: Name not found, Please enter your name')
  }else if (playerName.toLowerCase().startsWith('sad')){
    alert('01001000 01100001 01110000 01110000 01111001 00100000 01000010 01101001 01110010 01110100 01101000 01100100 01100001 01111001 00100000 01010011 01100001 01100100 01101001 01101011 01100001 00100001 00100001 00100001')
  }else {
    setupPlayScreen()
  }
}

function switchScreen(screen){
  switch (screen){
    case 'title':
      document.querySelector('#titleScreen').classList.remove('none')
      document.querySelector('#playScreen').classList.remove('flex')

      document.querySelector('#playScreen').classList.add('none')
      document.querySelector('#titleScreen').classList.add('block')
      break;
    case 'play':
      document.querySelector('#titleScreen').classList.remove('block')
      document.querySelector('#playScreen').classList.remove('none')
      
      document.querySelector('#titleScreen').classList.add('none')
      document.querySelector('#playScreen').classList.add('flex')
  }
}