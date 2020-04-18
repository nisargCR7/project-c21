
var suni,mercuryi,venusi,earthi,marsi,jupiteri,saturni,uranusi,neptunei;









function preload(){

suni = loadImage("sun.png")
mercuryi = loadImage("mercury.png")
venusi = loadImage("venus.png")
earthi = loadImage("earth.png")
marsi = loadImage("mars.png")
jupiteri = loadImage("jupiter.png")
saturni = loadImage("saturn.png")
uranusi = loadImage("uranus.png")
neptunei = loadImage("neptune.png")


}


function setup() {
  createCanvas(1200,1200);
 
  var sun = createSprite(200, 200,10,10);
  sun.addImage(suni);
  sun.scale=0.15;
  
  var mercury = createSprite(249, 197,10,10);
  mercury.addImage(mercuryi);
  mercury.scale=0.05;
  
  var venus = createSprite(192,125,10,10);
  venus.addImage(venusi);
  venus.scale=0.15;
  
  var earth = createSprite(99, 208,10,10);
  earth.addImage(earthi);
  earth.scale=0.05;
 
  var mars = createSprite(116, 293,10,10);
  mars.addImage(marsi);
  mars.scale=0.04;
  
  var jupiter = createSprite(348, 194,10,10);  
  jupiter.addImage(jupiteri);
  jupiter.scale=0.15;
  
  
  var saturn = createSprite(125, 42,10,10);
  saturn.addImage(saturni);
  saturn.scale=0.15;
  
  var uranus = createSprite(290, 21,10,10);
  uranus.addImage(uranusi);
  uranus.scale=0.1;
  
  var neptune = createSprite(360,357,10,10);  
  neptune.addImage(neptunei);
  neptune.scale=0.1;

  
  
 
  
  
  





}

function draw() {
  background("white");
 
  
  
  fill("white");
  ellipse(200, 200, 450, 450);
  
  fill("white");
  ellipse(200, 200, 400, 400);
  
  fill("white");
  ellipse(200, 200, 350, 350);
  
  fill("white");
  ellipse(200, 200, 300, 300);
  
  fill("white");
  ellipse(200, 200, 250, 250);
  
  fill("white");
  ellipse(200, 200, 200, 200);
  
  fill("white");
  ellipse(200, 200, 150, 150);
  
  fill("white");
  ellipse(200, 200, 100, 100);
  
  
  
  
  
  
 
  
  
  
 
 
 
 
 
 
  
   
  
      sizesun();
 
  drawSprites();
      
  }

  function sizesun(){
  
    if(World.frameCount % 100 === 0) {
    
      sun.scale = sun.scale+0.01;
  
  
  
  
  
  
    }
  
  }

function isTouching (obj1,obj2){
  if (obj1.x-obj2.x<=obj1.width/2+obj2.width/2 && obj2.x-obj1.x<=obj1.width/2+obj2.width/2 && obj1.y-obj2.y<=obj1.height/2+obj2.height/2 && obj2.y-obj1.y<=obj1.height/2+obj2.height/2) {
   
    return true;
    
   } 
    
    
    else {
    
   return false;

    }
  }
