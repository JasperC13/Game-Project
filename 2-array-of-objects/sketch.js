let balls = []

function setup(){
  createCanvas(400,400);
  background("orange");
}

function draw(){
  for (let i = 0; i < balls.length; i++){
    balls[i].drawball();
    bakks[i].moveball();
  }
}

class Ball{

  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  drawBall(){
    stroke(4);
    ball(this.x,this.y,20,20);
  }

  moveBall(){
    this.x=this.x+2
    this.y=this.y+2
  }
}

function ball(){
  ellipse(x,y,20,20);
}

function ball1(){
  ball(x+2.5,y+2.5)
}

function keypressed(){
  let b = new Ball(100,100);
  balls.push(b);
  print(balls);
}
