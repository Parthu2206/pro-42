
var hasDocked=false;

function preload(){
  bg=loadImage("Docking-undocking/Docking-undocking/spacebg.jpg");
  issimg=loadImage("Docking-undocking/Docking-undocking/iss.png");
  scimg=loadImage("Docking-undocking/Docking-undocking/spacecraft1.png");
  scimg1=loadImage("Docking-undocking/Docking-undocking/spacecraft2.png");
  scimg2=loadImage("Docking-undocking/Docking-undocking/spacecraft3.png");
  scimg3=loadImage("Docking-undocking/Docking-undocking/spacecraft4.png");

}


function setup() {
  createCanvas(600,350);
  spacecraft= createSprite(285,240);
  spacecraft.addImage(scimg)
  spacecraft.scale=0.15

  iss=createSprite(330,130);
  iss.addImage(issimg);
  iss.scale=0.8;
}

function draw() {
  background(bg);  

  spacecraft.addImage(scimg);
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1);
  
  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2;
  }
  if(keyDown("DOWN_ARROW")){
    spacecraft.y=spacecraft.y+2;
    spacecraft.addImage(scimg1);
  }
  if(keyDown("LEFT_ARROW")){
    spacecraft.x=spacecraft.x-2;
    spacecraft.addImage(scimg3);
  }
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x=spacecraft.x+2;
    spacecraft.addImage(scimg2);
  }
  }

  if(spacecraft.y <=(iss.y+70) && spacecraft.x<=(iss.x-10)){
    hasDocked=true;
    textSize(33);
    fill("white")
    text("Docking successfull",200,300)
    
  }
  drawSprites();
}