var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var ground;
var survivaltime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  monkey = createSprite(35,325,10,10);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,380,400,10);
  
  survivaltime = 0;
}


function draw() {
  background(255);
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(gameState = PLAY){
  Banana();
  Obstacles();
  }
  survivaltime = survivaltime + Math.round(frameCount/1);
  survivaltime = Math.round(survivaltime/10);
  text("Survival Time = " + survivaltime,270,10);
  
  if(keyDown("space")&&monkey.y>200){
    monkey.velocityY = -10;
  }
 

  drawSprites();
}

function Banana (){
  if(frameCount%60===0){
    banana = createSprite(380,200,10,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(140,210));
    banana.velocityX = -5;
    banana.scale = 0.1;
    
  }
  
  
}



function Obstacles() {
  if(frameCount %100 === 0) {
    obstacle = createSprite(300,345,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
  }
  
}
