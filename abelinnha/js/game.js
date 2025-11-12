let ctx = document.querySelector("#canvas").getContext("2d");

let abelha = new Abelha("bee",440,350,100,100,"img/bee1.png");
let aranha = new Aranha("spider",440,100,100,100,"img/spider1.png");
let flor = new Flor("flower",0,0,50,50,"img/flower1.png")

let bg = new Bg("bg",0,0,900,720,"img/bg.png")
let bg2 = new Bg("bg",0,-720,900,720,"img/bg.png");
let bgMenu = new Bg("bgMenu",0,0,900,720,"img/start.png");
let bgWindGame = new Bg("bgWindGame",0,0,900,720,"img/youwin.png");
let bgGameOver = new Bg("bgGameOver",0,0,900,720,"img/gameover.png");


let placarPontos = new Text();
let placarVida = new Text();
let perdeu = new Text();
let temporizador = new Temporizador(50);
temporizador.stopTimer();


let coleta = new Som("som/coleta.wav");
let colision = new Som("som/colision.ogg");
let gameover = new Som("som/gameover.wav");

let ponto=0;
let play = false;
let stateGame = "Menu";

aranha.mudarPosition();

function Draw(){
    ;

    if(play){

        bg.draw();
        bg2.draw()
        flor.draw();
        abelha.draw();
        aranha.draw();  
    
        placarPontos.draw("🌸"+ponto,20,100);
        placarVida.draw("💗"+abelha.life,20,50);
        temporizador.draw();
    }else{
        if(stateGame == "Menu"){
            bgMenu.draw();
        }else if(stateGame == "Wingame"){
            // perdeu.draw("Voce ganhou",350,450);
            bgWindGame.draw();

        }else{
            // perdeu.draw("GameOver",350,450);
            bgGameOver.draw();
        }
        
    }
}
function Update(){

    if(play){

        bg.move(720,0);
        bg2.move(0,-720);
    
        abelha.move();
        aranha.move();
        flor.move();
    
        abelha.animation("bee");
        aranha.animation("spider");
        // temporizador.passTimeSec();
    
        colides();
        gameOver();
        WinGame();
    }
}
function WinGame(){
    if(ponto == 10){
        play = false;
        stateGame = "Wingame";
        temporizador.stopTimer();
    }
}
function gameOver(){
    if(abelha.life==0 || temporizador.timerSec<=0){
        play = false;
        gameover.Play();
        stateGame = "GameOver",
        temporizador.stopTimer();
    }
    
}
function colides(){
    if(abelha.collide(aranha)){
        aranha.mudarPosition();
        abelha.life --;
        colision.Play();
        // console.log("oie");
    }
    if(abelha.collide(flor)){
        flor.mudarPosition();
        ponto++;
        coleta.Play();
        // console.log("oie");
    }
}

function Main(){
    ctx.clearRect(0,0,900,720);

    Update();
    Draw();
}
// console.log("Oi")

setInterval(Main,10);

document.addEventListener("keydown",(event)=>{
    if(event.key == "d")
    {
        abelha.setDir(1);
    }
    if(event.key == "a")
    {
        abelha.setDir(-1);
    }
    // console.log("Key down, in game?",stateGame != "Game");
    if(stateGame != "Game"){
        temporizador.resStart();
        temporizador.startTimer();
        ponto = 0;
        abelha.life = 3;
        play = true;
        stateGame = "Game";
    }

})
document.addEventListener("keyup",(event)=>{
    if(event.key == "d" || event.key == "a")
    {
        abelha.setDir(0);
    }

})