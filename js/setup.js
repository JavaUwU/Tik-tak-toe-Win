// Frontend stuff

import { handleClick } from './logic.js'

export function setup(){
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    box.addEventListener('click', handleClick);
  });
}
