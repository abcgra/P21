var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var whitebox;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
    surface1=createSprite (0,580,360,30);
    surface1.shapeColor = "pink";

    surface2=createSprite (295,580,200,30);
    surface2.shapeColor ="red";

    surface3=createSprite(515,580,200,30)
    surface3.shapeColor = "purple";

    surface4 = createSprite(730,580,220,30);
    surface4.shapeColor ="orange";
    
    whitebox = createSprite (random(20,750),100,40,40)
    whitebox.velocityX=5;
    whitebox.velocityY=9;
    whitebox.shapeColor = "white";


    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
Edge=createEdgeSprites();
whitebox.bounceOff(Edge);
drawSprites();

if (surface1.isTouching(whitebox)&& whitebox.bounceOff(surface1)){
 whitebox.shapeColor="pink"

music.play();
 
 
}
    if (surface2.isTouching(whitebox)&& whitebox.bounceOff(surface2)){
        whitebox.shapeColor="red"

        whitebox.velocityX=0;
        whitebox.velocityY=0;
        music.stop()
    }
        if (surface3.isTouching(whitebox)&& whitebox.bounceOff(surface3)){
         whitebox.shapeColor="purple"
         music.play()
        }
        

         if (surface4.isTouching(whitebox)&& whitebox.bounceOff(surface4)){
             whitebox.shapeColor="orange"
             music.play()
}
    //add condition to check if box touching surface and make it box
        }
