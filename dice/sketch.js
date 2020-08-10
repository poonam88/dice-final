//BLUE PRINT FOR SNAKE AND LADDER GAME:-

//100-95-90-85-80-75-70-65-60-55
// 5 -10-15-20-25-30-35-40-45-50

//WAY TO THE TOP :-

//(RIGHT TO LEFT)
//(LEFT TO RIGHT)

//<=<=<=<=<=<=<=<=<=<=
//=>=>=>=>=>=>=>=>=>=>


//VARIABLES FOR SANKE AND LADDER GAME
var  box5,box10,box15,box20,box25,box30,box35,box40,box45,box50;
var box55,box60,box65,box70,box75,box80,box85,box90,box95,box100;

//PLAYER VARIABLE
var player, player_img;

//RANDOM NUMBER FOR DICE
var rand;

//DICE 
var dice1,dice2,dice3,dice4,dice5,dice6;
var dice

//LOADS THE IMAGES
function preload()
{
 dice1=loadImage("images/dice1.jpg");
 dice2=loadImage("images/dice2.jpg");
 dice3=loadImage("images/dice3.jpg");
 dice4=loadImage("images/dice4.jpg");
 dice5=loadImage("images/dice5.jpg");
 dice6=loadImage("images/dice6.jpg");
}

//SPRITES SETUP
function setup(){
//CAMERA ALIGNMENT
 canvas= createCanvas(displayWidth-280,displayHeight-150);

 //VARIABLES POSITION

 //FIRST ROW 
 box5=createSprite(50,520,100,100);
 box5.shapeColor="red";
 box10=createSprite(150,520,100,100);
 box10.shapeColor="orange";
 box15=createSprite(250,520,100,100);
 box15.shapeColor="yellow";
 box20=createSprite(350,520,100,100);
 box20.shapeColor="green";
 box25=createSprite(450,520,100,100);
 box25.shapeColor="blue";
 box30=createSprite(550,520,100,100);
 box30.shapeColor="magenta";
 box35=createSprite(650,520,100,100);
 box35.shapeColor="black";
 box40=createSprite(750,520,100,100);
 box40.shapeColor="grey";
 box45=createSprite(850,520,100,100);
 box45.shapeColor="violet";
 box50=createSprite(950,520,100,100);
 box50.shapeColor="cyan";

 //SECOND ROW
 box55=createSprite(50,420,100,100);
 box55.shapeColor="cyan";
 box60=createSprite(150,420,100,100);
 box60.shapeColor="violet";
 box65=createSprite(250,420,100,100);
 box65.shapeColor="grey";
 box70=createSprite(350,420,100,100);
 box70.shapeColor="black";
 box75=createSprite(450,420,100,100);
 box75.shapeColor="magenta";
 box80=createSprite(550,420,100,100);
 box80.shapeColor="blue";
 box85=createSprite(650,420,100,100);
 box85.shapeColor="green";
 box90=createSprite(750,420,100,100);
 box90.shapeColor="yellow";
 box95=createSprite(850,420,100,100);
 box95.shapeColor="orange";
 box100=createSprite(950,420,100,100);
 box100.shapeColor="red";

 //PLAYER
 player=createSprite(50,520,30,30);
 player.shapeColor="#5C1FFE";
 
 //ASSIGNING RANDOM NUMBER
 //A DICE HAS 6 FACES
 
 //console.log(rand);


}
//INSTRUCTIONS
function draw(){
  background("#1E3D69");  

//ROLLS THE DICE AFTER PRESSING UP KEY
if(keyDown(UP_ARROW)){
  //diceRoll();
  dice=createSprite(500,250,50,50);
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1:dice.addImage(dice1);
           break;
    case 2:dice.addImage(dice2);
           break;
    case 3:dice.addImage(dice3);
           break;
    case 4:dice.addImage(dice4);
           break;
    case 5:dice.addImage(dice5);
           break;
    case 6:dice.addImage(dice6);   
    default: break;                  
  }
  dice.scale=0.5;
}
//SHOWS TEXT, ASKING FOR PRESSING THE UP KEY
fill("green");
textSize(20);
text("PRESS UP KEY TO ROLL THE DICE",350,100);


  drawSprites();
}

//function diceRoll(){

//}