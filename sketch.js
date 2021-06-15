var girlImg,girl;
var butterflyImg;
var edges;
function preload(){
  girlImg = loadImage("GirlCatchingButterfly.png");
  butterflyImg = loadImage("Butterfly1.png");
}

function setup() {
  createCanvas(1000,800);
   girl = createSprite(800, 550, 50, 50);
   girl.addImage(girlImg);
   girl.scale=0.8;
   
   edges = createEdgeSprites()

}

function draw() {
  background("lightblue");  
  spawnButterFlies();
  if(keyDown("space")){
    girl.velocityY=-15;
  }
  girl.velocityY=girl.velocityY+0.8;
  girl.collide(edges);
  drawSprites();
}
function spawnButterFlies(){
  if(frameCount%100 ===0){
    butterfly = createSprite(50,100,20,20);
    butterfly.y=Math.round(random(10,300));
    butterfly.addImage(butterflyImg);
    butterfly.velocityX=5;
    butterfly.scale = 0.1;
  }
}