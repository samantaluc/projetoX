var bola, bola_pulando;
var chao, chaoIMG;
var chaoInv;

function preload(){
    chaoIMG = loadImage("chao.png");
    bola_pulando = loadAnimation("bola_0.png","bola_1.png","bola_2.png");

}

function setup(){
    createCanvas(windowWidth-100, windowHeight-100);
    bola = createSprite(0, 0, 20,20);
    bola.addAnimation("pulando", bola_pulando);
    bola.x = width/20;
    bola.scale = 2;
    chao = createSprite(width, height/2, width,height/3);
    chao.scale = 0.27;
    chao.addImage("chao", chaoIMG);
    chao.x = width/2;
    chao.velocityX = -5;
    chaoInv = createSprite(width/2,height,width,height/3);
    chaoInv.visible = false;
}

function draw(){
    background(0000);
    chao.depth = bola.depth - 1;
    bola.velocityY = bola.velocityY + 0.8;
    bola.collide(chaoInv);
    if (keyDown("space") && bola.y > (width/3)){
        bola.velocityY = -10;
    }

    if (chao.x < 0) {
        chao.x = chao.width / 2;
      }
    drawSprites();
}
