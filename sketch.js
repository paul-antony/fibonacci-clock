
var Fibonacci = [1,1,2,3,5,8,13,21,34,55,89,144,233];

var h = 640;
var w = 640;


function setup() {
  createCanvas(w, h);

  frameRate(1);
  pixelDensity(1);
}

function draw() {
  background(220);
  

  

  
  
  
  // Draw second the clock background
  push();    
    noStroke();
    fill(244, 122, 158);
    ellipse(w/2, h/2, 2*(280)+ 35, 2*(280) + 35);
    fill(237, 34, 93);
    ellipse(w/2, h/2, 2*(265), 2*(265));
  pop();
  
  // Draw minit the clock background
  push();    
    noStroke();
    fill(244, 122, 158);
    ellipse(w/2, h/2, 2*(170)+ 35, 2*(170) + 35);
    fill(237, 34, 93);
    ellipse(w/2, h/2, 2*(160), 2*(160));
  pop();
  
  // Draw the clock background hour
  push();    
    noStroke();
    fill(244, 122, 158);
    ellipse(w/2, h/2, 2*(100)+ 35, 2*(100) + 35);
    fill(237, 34, 93);
    ellipse(w/2, h/2, 2*(100), 2*(100));
  pop();

  //center circle
  push();
    fill(0, 0, 0);
    ellipse(w/2, h/2, 20, 20);
  pop();
  

      
    //draw seconds handle
  push();
    stroke(0);
    noFill();
    strokeWeight(2);
    translate(w/2, h/2);
  
    rotate(PI /(30) * (second()-30));
  
    for( let i = 0; i < 13; i ++){
      arc(0,0,Fibonacci[i] * 2,Fibonacci[i] * 2,0,PI / 2);
      rotate(PI / 2);
      translate(-Fibonacci[i-1],0); 
    }
      strokeWeight(3);
    //highlite circle
    erase();
    fill(0, 0, 0);
    ellipse(233 + 144, 0, 40, 40);
    noErase();
    noFill();
    ellipse(233 + 144, 0, 40, 40);
  pop();
  
  
  
//minit handle
  push();
    stroke(0);
    noFill();
    strokeWeight(2);
    translate(w/2, h/2);
  
    rotate(PI /(30) * (minute()-30));
  
    for( let i = 0; i < 12; i ++){
      arc(0,0,Fibonacci[i] * 2,Fibonacci[i] * 2,0,PI / 2);
      rotate(PI / 2);
      translate(-Fibonacci[i-1],0); 
    }
  
    //highlite circle
      strokeWeight(3);
    erase();
    fill(0, 0, 0);
    ellipse(89 + 144, 0, 30, 30);
    noErase();
    noFill();
    ellipse(89 + 144, 0, 30, 30);
  pop();
  
  
//hour hand
  
    push();
    stroke(0);
    noFill();
    strokeWeight(3);
    translate(w/2, h/2);
  
    rotate(PI /6* hour() - PI/12 +PI/48);
  
    for( let i = 0; i < 11; i ++){
      arc(0,0,Fibonacci[i] * 2,Fibonacci[i] * 2,0,PI / 2);
      rotate(PI / 2);
      translate(-Fibonacci[i-1],0); 
    }
  
    //highlite circle
    erase();
    fill(0, 0, 0);
    ellipse(55 + 89, 0, 25, 25);
    noErase();
    noFill();
    ellipse(55 + 89, 0, 25, 25);

  
  pop();
  
  // dial numbers hours
  push();
      translate(w/2, h/2);
    for (let a = 0; a < 12; a += 1) {

      strokeWeight(2);
      textSize(20);
      textAlign(CENTER,CENTER);
      let angle = radians(a*30 - 90);
      let x = 0 + cos(angle) * (80 + 29);
      let y = 0 + sin(angle) * (80 + 29);

        text(a, x, y);

    }
  pop();
  
  
  
  // dial numbers minits
  push();
      translate(w/2, h/2);
    for (let a = 0; a < 60; a += 1) {

      textSize(15);
      textAlign(CENTER,CENTER);
      let angle = radians(a*6 +1.4 -90);
      let x = 0 + cos(angle) * (144 + 30);
      let y = 0 + sin(angle) * (144 + 30);
      if(a%5 == 0){
        text(a, x, y);
      }
      else{
      textSize(20);
      text(".", x, y);
      }
    }
  pop();
  
  // dial numbers seconds
  push();
      translate(w/2, h/2);
    for (let a = 0; a < 60; a += 1) {

      textSize(20);
      textAlign(CENTER,CENTER);
      let angle = radians(a*6 +1.4 -90);
      let x = 0 + cos(angle) * (233 + 47.6959);
      let y = 0 + sin(angle) * (233 + 47.6959);
      if(a%5 == 0){
        text(a, x, y);
      }
      else{
      text(".", x, y);
      }
    }
  pop();

}