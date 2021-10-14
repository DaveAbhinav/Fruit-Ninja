var knife, knifeImg;
var fruits , fruitsImg;
function preLoad(){
    knifeImg = loadImage("./assets/knifeImg.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    knife = createSprite(200,200,50,20);


}


function draw(){
    background("blue");
    //knife.addImage("knife",knifeImg);
    knife.x = World.mouseX;
    knife.y = World.mouseY;
  fruits();
    drawSprites();
}

function fruits(){
    if(frameCount % 130 === 0){
    fruit = createSprite(100,700,50,50);
    fruit.x = Math.round(random(10,windowWidth -10))
    fruit.velocityY = -4;
    fruit.lifetime = 175;
    }
    
}