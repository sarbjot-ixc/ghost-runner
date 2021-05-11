var ghost ,ghostimage 
var door,doorimage
var climber,climberimage
var tower,towerimage
var climbergroup,doorgroup
var sound 

function preload(){
  ghostimage=loadImage("ghost-standing.png")
  doorimage=loadImage("door.png")
  climberimage=loadImage("climber.png")
  towerimage=loadImage("tower.png")
  sound =loadSound("spooky.wav")
  
}

function setup(){
  createCanvas (600,600)
  tower=createSprite(300,300,600,600)
  tower.addImage(towerimage)
  tower.velocityY=1
  ghost=createSprite(300,300)
  ghost.addImage(ghostimage)
  ghost.scale=0.3
  climbergroup=createGroup()
  doorgroup=createGroup()
  
  
  
}

function draw(){
  background(0)
  if(tower.y>400){
    tower.y=tower.width/2
    
  }
  
  ghost.velocityY +=0.5
  if(keyDown("space")){
    ghost.velocityY=-10
  }
     
  if(keyDown("left")){
    ghost.x-=3
    
    
  }
  if(keyDown("right")){
    ghost.x+=3
  }
  
  if(ghost.isTouching(climbergroup)||ghost.y>600){
    ghost.visible=false
    tower.visible=false
    climbergroup.destroyEach()
    doorgroup.destroyEach()
    textSize(30)
    fill("yellow")
    text("Game over",230,250)
  }
  
  
  drawSprites()
}

function spawnDoors(){
  if(frameCount%240===0){
    door=createSprite (100,-50)
    door.x =Math.round(random(120,440))
    door.addImage(doorimage)
    
    climber=createSprite(100,10)
    climber.x=door.x
    climber.addImage(climberimage)
    door.velocityY=2
    climber.velocityY=2
    door.lifetime=400
    climber.lifetime=400
    doorgroup.add(door)
    climbergroup.add(climber)
    
  }
}


