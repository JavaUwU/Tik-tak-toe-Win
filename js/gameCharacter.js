
// selelct a character
function character (){
    let selectedChar = document.querySelectorAll(".character")
    selectedChar.forEach(img=>{
        img.addEventListener("click",e=>{
            let target = e.target.dataset.id;
            removeSelection(selectedChar);
            document.querySelector(`[data-id='${target}']`).classList.add("selected")
            console.log(e.target.dataset.id)
        })
    })

}

character()

function removeSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected")
        console.log(el)
    })
} 

// 