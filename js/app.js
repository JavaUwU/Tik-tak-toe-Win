let player = [];
let computer = [];
let winCondition = [
    ['1','2','3'] , ['4','5','6'] , ['7','8','9'], 
    ['1','4','7'] , ['2','5','8'] , ['3','6','9'],
    ['1','5','9'] , ['3','5','7']]

console.log(winCondition) 
console.log(player)
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    // See visually when box is clicked
    box.setAttribute('style', 'background-color: yellow;');
    box.classList.add('noClick')
    // on-click -> add data-value to player array
    player.splice(0,0,event.target.getAttribute('data-value'))
    // checks if first player meets first wincondition
    winCondition.forEach(condition => {
        let containsAll = condition.every(element => {
            return player.includes(element);
          })
          if(containsAll){
            alert('you win')
          }
      });
    });
  });




