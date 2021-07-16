var astronaut
function preload(){
  bg=loadImage("iss.png");
 brush = loadAnimation("brush.png");
  gym   = loadAnimation("gym1.png","gym11.png","gym12.png");
  eat   = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move.png","move1.png");
  sleep = loadAnimation("sleep.png");

}


function setup() {
  createCanvas(800,400);
 astronaut =  createSprite(300,230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1
 Edges=createEdgeSprites();
 
}

function draw() {
  background(bg);
  astronaut.bounceOff(Edges);
  if(keyDown("up")){
astronaut.addAnimation("brushing",brush);
astronaut.changeAnimation("brushing");
astronaut.y=350;
astronaut.velocityX=0;
astronaut.velocityY=0;

  }
  if(keyDown("down")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    
      }
      if(keyDown("left")){
        astronaut.addAnimation("eating",eat);
        astronaut.changeAnimation("eating");
        astronaut.y=350;
        astronaut.x=150;
        astronaut.velocityX=0.5;
        astronaut.velocityY=0.5;
        
          }
          if(keyDown("right")){
            astronaut.addAnimation("bathing",bath);
            astronaut.changeAnimation("bathing");
            astronaut.x=300;
            astronaut.velocityX=0;
            astronaut.velocityY=0;
            
              }
              if(keyDown("m")){
                astronaut.addAnimation("moving",move);
                astronaut.changeAnimation("moving");
                astronaut.velocityX=1;
                astronaut.velocityY=1;
                
                  }
       
  drawSprites();
}
