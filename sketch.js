var bgimages,food1,food2,food3,food4,food5,counter;
var chef,chefimg,shelfimg,sign1,food6,food7,food8,customer1,customer2,customer3;
function preload(){
    bgimage=loadImage("images/background.PNG")
     food1=loadImage("images/icecream1.png")
     food2=loadImage("images/food2.png")
     food3=loadImage("images/food3.png")
     food4=loadImage("images/food4.png")
     food5=loadImage("images/drink.png")
     food6=loadImage("images/icecream2.png")
     food7=loadImage("images/drink2.png")
     counter=loadImage("images/counter.PNG")
     chefimg=loadImage("images/c2.png")
     shelfimg=loadImage("images/shelf.png")
     sign1=loadImage("images/sign.png")
     customer1=loadImage("images/customer1.png")
     customer2=loadImage("images/customer2.png")
     customer3=loadImage("images/customer3.png")
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    chef=createSprite(600,300)
    chef.scale=0.5
    chef.addImage(chefimg)
}
function draw(){
    background("#F8DE7E")
    Customer();
    image(shelfimg,400,10,950)
    image(food3,700,110,60,60)
    image(food4,800,110,60,60)
    image(food5,880,95,60,70)
    image(food7,960,85,60,80)
    image(food2,580,120,70,50)
   
   
    drawSprites()
    image(counter,400,350,950)
    image(food1,1150,300,60,80)
    image(food6,1050,300,60,80)
    image(sign1,50,50,120,80)
  
    if (keyDown("LEFT_ARROW")){
        chef.x=chef.x-5
    }
    if (keyDown("RIGHT_ARROW")){
        chef.x=chef.x+5
    }
    if (keyDown("UP_ARROW")){
        chef.y=chef.y-5
    }
    if (keyDown("DOWN_ARROW")){
        chef.y=chef.y+5
    }
   
}
function Customer(){
    if (frameCount%100===0){
        var customer=createSprite(200,500,100,200)
        // if (customer.x<600){
        //     //customer.velocityX=2;
        // }
        var rand=Math.round(random(1,3))
        switch(rand){
            case 1 :customer.addImage(customer1)
            customer.x=1400;
            customer.scale=0.4
            break;
            case 2 :customer.addImage(customer2)
            customer.scale=0.7
            break;
            case 3 :customer.addImage(customer3)
            customer.scale=0.6
            break;
        }
      var rand1=Math.round(random(1,7))
      switch(1){
         case 1 :image(food1,100,150,60,80)
         break;

      }
        
    }
}
