
var movingRect,fixedRect;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(600, 400, 50, 80);
  fixedRect=createSprite(400, 400, 80, 30);
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 )
  {

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }

  drawSprites();
}