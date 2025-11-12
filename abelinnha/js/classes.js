class Object {

    frame = 1;
    timer = 0;
    constructor(name, x, y, w, h, srcimg) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.srcImg = srcimg;
        this.speed = 2;
        // this.color = color;

        // console.log(`${name} criado(a)`);
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    draw() {
        // ctx.fillStyle = this.color;
        // ctx.fillRect(this.x,this.y,this.w,this.h);
        this.img = new Image();
        this.img.src = this.srcImg;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    animation(name) {
        this.timer += 1;

        if (this.timer > 10) {
            this.timer = 0;
            this.frame++;
        }
        if (this.frame > 4) {
            this.frame = 1;
        }

        this.srcImg = "img/" + name + this.frame + ".png";
    }
}
class Bg extends Object {

    move(limit, pos) {
        this.y += this.speed;
        if (this.y > limit) {
            this.y = pos;
        }
    }
}
class Abelha extends Object {
    dir = 0;
    life = 3;

    setDir(ndir) {
        this.dir = ndir * this.speed;
    }
    move() {
        this.x += this.dir * this.speed;
    }

    collide(obj) {
        if (this.x < obj.x + obj.w &&
            this.x + this.w > obj.x &&
            this.y < obj.y + obj.h &&
            this.y + this.h > obj.y) {
           return true;
        } else {
            return false;
        }
    }
}
class Aranha extends Object {
    move() {
        this.y += this.speed;

        if (this.y > 900) {
           this.mudarPosition();
        }
    }
    mudarPosition(){
        this.y = -50;
            this.x = Math.random() * (600 - 0)
    }
}

class Flor extends Aranha {

}

class Text {
    constructor(){
        this.size = 20;

    }

    draw(text, x, y) {
        ctx.font = this.size+"px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(text, x, y);
    }
}
class Temporizador {
    
    constructor(ntimer){
        this.text = new Text();
        this.textTimer = new Text();
        this.textTimer.size = 50;
        this.text.size = 20;



        this.timer = ntimer * 1000;
        this.timerSec = ntimer;
        this.satrTimer = ntimer;
        this.increment = 0;
        setInterval(() => {
            this.passTimeSec();
        }, 1000);

    }
    passTimeSec(){
        this.timerSec-= this.increment;
    }
    startTimer(){
        // this.timer-=1000/10;
        this.increment = 1;
    }
    stopTimer(){
        this.increment = 0;
    }
    resStart(){
        this.timerSec = this.satrTimer;
    }
    draw(){
        this.text.draw("Tempo restante",450 - (7*(this.text.size/2)),20);
        this.textTimer.draw(this.timerSec+ "s",450 - (2 * (this.textTimer.size/2)),70);
    }

}

class Som {
    constructor(srcSom) {
        this.srcSom =srcSom;
    }
    Play(){
        let audio = new Audio(this.srcSom);
        audio.play();
    }
}