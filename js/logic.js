// Backend stuff

let player = [];
let computer = [];
let winCondition = [
    ['1','2','3'] , ['4','5','6'] , ['7','8','9'], 
    ['1','4','7'] , ['2','5','8'] , ['3','6','9'],
    ['1','5','9'] , ['3','5','7']]


console.log(winCondition) 
console.log(player)
export function handleClick(event) {
    // See visually when box is clicked
    checkEmpty(event)

    // on-click -> add data-value to player array
    

    
    

}

function computerTurn(){
    let choice = Math.floor(Math.random() * 9 + 1 )

    while(player.includes(String(choice)) || computer.includes(String(choice)) ){
        choice = Math.floor(Math.random() * 9 + 1 )
    }
    computer.push(String(choice))
    document.querySelector(`#box${choice}`).setAttribute('style', 'background-color: red;');
    document.querySelector(`#box${choice}`).classList.add('noClick')

}

function winConditions(){
    // checks if first player meets first wincondition
    winCondition.forEach(condition => {
        let playerArr = condition.every(element => {
            return player.includes(element);
        })
        let computerArr = condition.every(element => {
            return computer.includes(element)
        })
        if(playerArr){
            alert('Player wins')
        } else if(computerArr){
            alert('computer wins')
        }
      });
}

function checkEmpty(event){
    if(player.includes(event.target.getAttribute('data-value')) || computer.includes(event.target.getAttribute('data-value'))){
        alert('Cant click on already clicked on box')
        return
    }else{
        event.target.setAttribute('style', 'background-color: yellow;');
        event.target.classList.add('noClick')
        player.splice(0,0,event.target.getAttribute('data-value'))
        winConditions()
        setTimeout(computerTurn, 2000)
        winConditions()
    }
}