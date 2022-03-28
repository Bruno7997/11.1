var seaload, shipload, b = 0, s, sea, ship, sea2;
function preload(){
seaload = loadImage("sea.png");
shipload = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,100,20,20);
sea.addImage("ground",seaload);
sea.x = sea.width /2;
sea.velocityX = -4;
sea.depth = -2
sea2 = createSprite(200,100,20,20);
sea2.addImage("ground",seaload);
sea2.x = sea2.width /2;
sea2.depth = -3
  ship = createSprite (200, 250, 10, 10);
  ship.addAnimation ("shipp", shipload);
  ship.scale = 0.25
  ship.depth = 0
  s = createSprite (500, 300, 10, 10);
  s.addAnimation ("shipp", shipload);
  s.scale = 0.20
  s.mirrorX (s.mirrorX() * -1)
  s.depth = 1
}

function draw() {
  b = b + 1
  background("seaload");
  
  drawSprites();
if (b == 120){
  s.depth = s.depth * -1
  s.y = s.y - (s.depth * -100)
s.velocityX = -10
b = 0
}
console.log(sea.x)
if (s.x == -20){
  s.velocityX = 0
  s.x = 500
}
if (sea.x < -1900){
  sea.x = 2080
}
 
}
