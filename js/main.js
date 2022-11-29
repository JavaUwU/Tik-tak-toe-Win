
// checks if the box is set to x or to o
// player starts at x
// TODO - player can choose if he wants to be x or o
let playerTurn = true;

// Setting up the event Listeners
document.querySelector('#box1').addEventListener('click', setBox);
document.querySelector('#box3').addEventListener('click', setBox);
document.querySelector('#box4').addEventListener('click', setBox);
document.querySelector('#box2').addEventListener('click', setBox);
document.querySelector('#box5').addEventListener('click', setBox);
document.querySelector('#box6').addEventListener('click', setBox);
document.querySelector('#box7').addEventListener('click', setBox);
document.querySelector('#box8').addEventListener('click', setBox);
document.querySelector('#box9').addEventListener('click', setBox);

// sets the box to x or to o depending on the turn
function setBox(event){
    const box = event.target
    checkTurn() ? setX(box) : setO(box)
}

// checks the global playerTurn and set it to !boolean to alternate turns
function checkTurn(){
    let thisTurn = playerTurn
    playerTurn = !playerTurn
    return thisTurn
}

// sets the box innerHTML with an image tag
function setX(box){
    box.innerHTML = '<img src="./static/x.png">'
}
function setO(box){
    box.innerHTML = '<img src="./static/o.png">'
}