import { handleClick } from './logic.js'

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', handleClick);
  });