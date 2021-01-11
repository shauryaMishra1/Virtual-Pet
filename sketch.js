var dog;
var database,happydog,saddog,foodstock,foodS
function preload(){
happydog=loadImage("Happy dog.png")
saddog=loadImage("Dog.png")
}
function setup(){
    createCanvas(500,500);
    database=firebase.database()
   dog=createSprite(250,300,150,150)
   dog.addImage(saddog)
   dog.scale=0.15
   foodstock=database.ref('Food')
   foodstock.on("value",readstock)
}

function draw(){
    background("yellow");
    if(keyWentDown(UP_ARROW)){
        writestock(foodS)
        dog.addImage(happydog)
    }
    drawSprites();
textSize(20)
text("Food Remaining"+foodS,170,200)
text("Press UP Arrow To Feed The Dog",130,10,300,20)}

function writestock(x){
    if(x<=0){
        x=0
    }else{
        x=x-1
    }
database.ref('/').update({
    Food:x
})
}
function readstock(data){
foodS=data.val()

}
