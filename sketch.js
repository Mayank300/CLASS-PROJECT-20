 
var car1,car2,car3,wall ;
var speed,weight,speed1,speed2;

 
function setup() {
  createCanvas(1200,400);
   
  speed  = random (55,65);
  speed1  = random (55,65);
  speed2  = random (55,65);
  weight = random (400,1500);  

  car1 = createSprite(50,250, 40, 40);
  car1.shapeColor="black";
  car1.velocityX = speed;
   
  car2 = createSprite(50,200, 40, 40);
  car2.shapeColor="blue";
  car2.velocityX = speed1;
 

  car3 = createSprite(50,150, 40, 40);
  car3.shapeColor="orange";
  car3.velocityX = speed2;
 
 
  wall = createSprite(1100,200, 60, height/2);
  wall.shapeColor = "brown";

}

function draw() {
  background(180);
  checkDeformation(wall,car1); 
  checkDeformation(wall,car2); 
  checkDeformation(wall,car3);
  drawSprites();
} 

function checkDeformation(target,vehicle){
  if(target.x - vehicle.x < (vehicle.width + target.width)/2)
 
  { 
    vehicle.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/ 22500;
     
    if (deformation > 180)
    {      
      vehicle.shapeColor = color(255,0,0);
    }
    
    if(deformation < 180 && deformation > 100)
     {
      vehicle.shapeColor = color(230,230,0);
     }
  
    if (deformation < 100)
    {
      vehicle.shapeColor = color(0,255,0);
    }
  
  }
}