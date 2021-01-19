var dog,dogImg,dogImg1;
var database;
var foodS,foodStock, foodObj;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(800,500);

  foodObj = new Food();

  dog=createSprite(width-150,200,50,50);
  dog.addImage(dogImg);
  dog.scale=0.25;

  feed=createButton("Feed the dog");
  feed.position(width-120,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add food")
  addFood.position(width-10,95)
  addFood.mousePressed(addFoods)

  foodStock=database.ref('foodStock');
  foodStock.on("value",readStock);

  lastFed=database.ref('lastFed');
  lastFed.on("value",readLastFed);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
  foodObj.display();

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodObj.getFoodStock(),100,50);
  text("Last Feeding time:" + foodObj.getLastFed(),100,100)

}

//Function to read values from DB
function readStock(data){
  var food=data.val()
  foodObj.setFoodStock(food);
}

//Function to write values in DB
function feedDog(){
  dog.addImage(dogImg1);
 
  foodObj.deductFoodStock();
  database.ref('/').update({
    foodStock:foodObj.getFoodStock(),
    lastFed:hour()
  })
}

function addFoods(){
  dog.addImage(dogImg);

  foodObj.addFoodStock();
  database.ref('/').update({
    foodStock:foodObj.getFoodStock()
   
  })
}

function readLastFed(data){
   foodObj.setLastFed(data.val());
}