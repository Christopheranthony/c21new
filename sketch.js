var fixedRect, movingRect;
var box1,box2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  box1 = createSprite(200,400,50,56);
  box2 = createSprite(800,400,56,55);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1.shapeColor = "blue";
  box2.shapeColor = "red";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  box1.velocityX = +6
  box2.velocityX = -6
}

function draw() {
  background(0,0,0);  
bOff(box1,box2)
  bOff(movingRect,fixedRect);
  
  drawSprites();
}


