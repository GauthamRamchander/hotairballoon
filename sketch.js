var PLAY=1
var END=0
var gameState=PLAY

var back,Background
var spaceimg,spaceship
var pillar,star1_img
var gameoverimg
var star1

var score=0
function preload(){
back=loadImage("sky.jpg")
spaceimg=loadImage("hot air ballon.png")
star1_img=loadAnimation("birds.png")
gameoverimg=loadImage("game over.jpg")
}

function setup(){
createCanvas(700,700)

Background=createSprite(700,400,300,20)
Background.addImage(back)
Background.scale=1.0
Background.velocityY+=3
back.resize(1920,1080)

spaceship=createSprite(260,540,20,50)
spaceship.addImage(spaceimg)
spaceship.scale=0.3

gameover=createSprite(350,350,100,100)
gameover.addImage(gameoverimg)
gameover.visible=false

star_1=new Group()

score=0
}
function draw(){
        background("black")
        drawSprites()
        fill ("red")
        textSize(20)
        text("Score :"+score,600,100)
        if(gameState===PLAY){
          score=score+Math.round((getFrameRate()/60))
          Background.velocityY= +(6+3*score/100)
          if(keyDown("LEFT_ARROW")){
            spaceship.x-=6
          }
          if(keyDown("RIGHT_ARROW")){
            spaceship.x+=6
          }
          if(keyDown("UP_ARROW")){
            spaceship.y-=6
          }
          if(keyDown("DOWN_ARROW")){
            spaceship.y+=6
          }
         
stad1()
if(Background.y>520){
	Background.y=width/2
  }
  if(spaceship.isTouching(star_1)){
    gameState=END
  }
        }
else if(gameState===END){
  Background.velocityY=0
  spaceship.addImage(gameoverimg)
star_1.destroyEach()
  score=0
}



}
function stad1(){
  if(frameCount%150===0){
    star1=createSprite(Math.round(random(40,600)),Math.round(random(20,200)))
    star1.addAnimation("flying",star1_img)
    star1.scale = 0.3
     star1.velocityY = 3
     star1.lifetime = 200
     star_1.add(star1)
  }

}
