var canvas;
var music;
var block1,block2,block3,block4;
var box;
//var edge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(150,500,200,50);
    block2 = createSprite(250,500,200,50);
    block3 = createSprite(350,500,200,50);
    block4 = createSprite(450,500,200,50);

    //create box sprite and give velocity
     box = createSprite(400,300,50,50);
}

function draw() {
    background("blue");
    //create edgeSprite
edge=(800,600);
block1.shapeColor("purple");
block2.shapeColor("green");
block3.shapeColor("yellow");
block4.shapeColor("red");



if(box.bounceOff(block1,block2,block3,block4)){
    box.velocityX=-3;
    box.velocityY=3;
}
if(box.isTouching(block1, block2, block3, block4)){
    sound.addSound(music);
}
    //add condition to check if box touching surface and make it box

    drawSprite();
}