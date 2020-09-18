//create a variable to hold one ball
let b;
let anotherBall;
let thirdBall;

function setup() {
  createCanvas(800, 400);
  b = new Human(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Human(200,20,"green");
  thirdBall = new Human (50,275,"blue")

}


function draw(){
	background("blue");
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    thirdBall.drawBall();
    thirdBall.moveBall();

}


//ball class from which to create new balls with similar properties.
class Human {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    face(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;
	}
}
  function face1(x,y) {
    ellipse(this.x+7.5,this.y-10,30,30)
    ellipse(this.x,this.y,10,10)
    ellipse(this.x+10,this.y+5,10,10)

}
  function face(x,y) {
    face1(x+2.5,y+2.5);
}
