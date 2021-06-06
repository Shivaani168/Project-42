var backgroundImage;
var spaceCraft,spaceCraft1,spaceCraft2,spaceCraft3,spacCraft4,spaceCraftPoint;
var ISS,ISSImage
var hasDocked;
var dockingPoint;
var PLAY=1
var hasDocked=0
var gameState=PLAY;

function preload(){
backgroundImage=loadImage("spacebg.jpg")
spaceCraft1=loadImage("spacecraft1.png")
spaceCraft2=loadImage("spacecraft2.png")
spaceCraft3=loadImage("spacecraft3.png")
spaceCraft4=loadImage("spacecraft4.png")
ISSImage=loadImage("iss.png")
}
function setup() {
createCanvas(1500,900);

var x;
x=Math.round(random(100,1400))
spaceCraft=createSprite(x,700)
spaceCraft.addImage(spaceCraft1)
spaceCraft.scale=0.3

ISS=createSprite(600,400);
ISS.addImage(ISSImage)
ISS.scale=1

dockingPoint=createSprite(533,435,10,10)
dockingPoint.visible=false

spaceCraftPoint=createSprite(spaceCraft.x,spaceCraft.y-90,10,10)
spaceCraftPoint.visible=false
}

function draw() {
background(backgroundImage); 
fill("white")
textSize(20)
text("Welcome to the docking mission. Use the arrows to contol the spacecraft until it reaches the docking station.",200,50)

if(spaceCraftPoint.isTouching(dockingPoint)){
fill("White")
textSize(70)
text("Docking successful!",300,700)
gameState="hasDocked"
}

if(gameState!="hasDocked"){
if(keyDown("LEFT")){
spaceCraft.x-=10
spaceCraftPoint.x-=10
spaceCraft.addImage(spaceCraft3)
}
if(keyDown("RIGHT")){
spaceCraft.x+=10
spaceCraftPoint.x+=10
spaceCraft.addImage(spaceCraft4)
}

if(keyDown("DOWN")){
spaceCraft.y+=10
spaceCraftPoint.y+=10
spaceCraft.addImage(spaceCraft2)
}

if(keyDown("UP")){
spaceCraft.y-=10
spaceCraftPoint.y-=10
spaceCraft.addImage(spaceCraft2)
}
}
drawSprites();
}