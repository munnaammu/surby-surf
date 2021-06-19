var boy,boy_running;
var path,invisiblePath1,path_image;
var invisiblePath2
function preload(){
  //pre-load images
boy_running = loadAnimation("Runner-1.png","Runner-2.png")

  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path = createSprite(200,200,400,50)
  path.addImage("p1",pathImage)
  path.velocityY = +5

  boy = createSprite(200,300,20,20)
  boy.addAnimation("R1",boy_running)
  boy.scale = 0.1
  
  invisiblePath1 = createSprite(40,200,20,400)
  invisiblePath2 = createSprite(360,200,20,400)
  invisiblePath1.visible = false
  invisiblePath2.visible = false
}

function draw() {
  background(0)
//Move when the left and right button is pressed

if (path.y>400) {
  path.y = path.width/2
}
if (keyDown("left")) {
  boy.x = boy.x-20
}
if(keyDown("right")){
  boy.x = boy.x+20
}
boy.collide(invisiblePath1)
boy.collide(invisiblePath2)


drawSprites()
}
