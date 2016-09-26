var speed = 0
var Draw = 1
function setup() {
  createCanvas(windowWidth,windowHeight)
  colorMode(HSB)
  
}

function draw() {
  translate(width/2,height/2)
  scale(1)
  background(51)

  speed = 2
  var ry = 10
  var rex = 10
  //F(-width/2+10,-height/2+10,4,18,20)
 for(var x = 0; x<rex;x++){
 	for(var y = 0; y<ry;y++){
 		translate(x*width/rex,y*height/ry)
 		rotate(frameCount*0.0100)
 		translate(-x*width/rex,-y*height/ry)
 		stroke(map(x+y,0,rex+ry,0,255),255,255)
 		X(x*(width/rex),y*(height/ry),3,width/rex,height/ry)
 		X(y*(height/ry),x*(width/rex),3,width/rex,height/ry)
 		//H(0,0,3,30,30)
 		//X(0,0,3,30,30)
 		//A(x*(width/rex),y*(height/ry),3,width/rex,height/ry)
 		translate(x*width/rex,y*height/ry)
 		rotate(-frameCount*(0.0100+(speed*0.0001)))
 		translate(-x*width/rex,-y*height/ry)
 	}
 }
}
function H(x,y,s,w,h){
	strokeWeight(s)
	line(x,y,x,y+h)
	line(x+w,y,x+w,y+h)
	line(x,y+(h/2),x+w,y+(h/2))
	
}

function X(x,y,s,w,h){
	strokeWeight(s)
	line(x,y,x+w,y+h)
	line(x+w,y,x,y+h)
	
}

function N(x,y,s,w,h){
	strokeWeight(s)
	line(x,y,x,y+h)
	line(x+w,y,x+w,y+h)
	line(x,y,x+w,y+h)
	
}

function A(x,y,s,w,h){
	strokeWeight(s)
	line(x+(w/2),y,x,y+h)
	line(x+(w/2),y,x+w,y+h)
	line(x+(w/4),y+(h/2),x+(3*w/4),y+(h/2))
	
}

function F(x,y,s,w,h){
	strokeWeight(s)
	line(x,y,x,y+h)
	line(x,y+(h/2),x+(w/2),y+(h/2))
	line(x,y,x+w,y)
	
}

function R(x,y,s,w,h){
	strokeWeight(s)
	line(x,y,x,y+h)
	noFill();
	arc(x,y+(h/4),w*2,h/2,-PI/2,PI/2)
	line(x,y+(h/2),x+w,y+h)
	
}

function K(x,y,s,w,h){
	strokeWeight(s)
	line(x,y,x,y+h)
	line(x,y+(h/2),x+w,y+h)
	line(x,y+(h/2),x+w,y)
	
}
