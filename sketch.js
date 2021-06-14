//Create variables here
var dog, happyDog, sadDog, food, db

function preload()
{
	//load images here
  happyDog=loadImage("images/dogImg1.png")
  sadDog=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,500)
  dog.addImage(sadDog)
  db=firebase.database()
  db.ref("food").on("value",readStock)
  
}


function draw() {  
background("white")
if(keyWentDown(UP_ARROW)){
  writeStock(food)
  dog.addImage(happyDog)

}
  drawSprites();
  //add styles here

  text("Food:"+ food, 700,20)
}
function writeStock(food){
  if(food<=0){
    food=0
  }
  else{
    food=food-1
  }
  db.ref("/").update({
    food:food
  })
}

function readStock(data){
  food=data.val()
  console.log(food)
}

