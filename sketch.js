let shapeX = 100
let shapeSize= 100 
let bubbleSize= 100
let fishImage 
let fishX = 500
let timer= 0 
let increment= 1.5
let pufferImage
let volcano 
let erupt 


function preload() {
fishImage= loadImage("fishimage.jpg")
pufferImage= loadImage("puff.png")
volcanoImage= loadImage ("volcano.jpg")
eruptImage= loadImage ("erupt.gif")
}


// this is the box in which is the background, or you can draw in 
function setup() {
  createCanvas(windowWidth, windowHeight);
}




// this is the details of the pointer drawing 
function draw() {
  background(167,184,209);
 background (eruptImage)
timer= timer + increment



// image(fishImage,fishX,200, timer, timer)
// fishX = fishX + 1

let min= minute()
textSize (60)
text (min,40,50)

let sec= second()
textSize (60)
text (sec,40,100)

function mouseClicked () {
  volcanoImage = 0
  eruptImage= 0
}

//image(pufferImage,sec*20,400, pufferImage.width/4, pufferImage.height/4)

image(volcanoImage,sec*200,-100,volcanoImage.width/1.2, volcanoImage.height/1.6)
bubbleSize = bubbleSize +0.5



//   rect(shapeX, 200, shapeSize, shapeSize)
//  shapeX = shapeX +1

//  noFill
// circle(windowWidth/2,windowHeight/2,bubbleSize)
// bubbleSize = bubbleSize+0.5


  // fill(0,255,70)
  // stroke(80,90,90)



  strokeWeight(3)

  // rectMode(CENTER)
  // rect(400,400,200,200)

  // fill(233,45,60)
  // circle(300,100,70)
  // line(mouseX,mouseY,400,500)

  // fill(255,0,255)
  // triangle(100,200,500,800,mouseX,mouseY)

  // quad(20, 50, 80, 30, 80, 70, 20, 70)
}




function mouseClicked( ) {
fill(0,0,0)
bubbleSize = 0
shapeSize= 100
volcano = 0
}