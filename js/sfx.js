export class SFX{
    constructor(){
        this.music = new Audio('../SFX/tic-tac-toe-music.wav')
        this.select = new Audio('../SFX/select.wav')
        
    }
    playMusic(){
        
        this.music.play()
        this.music.loop = true;
        this.music.volume = 0.7
    }
}