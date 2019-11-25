var inc=0.01;
let img ;
var scl =10;
var cols,rows;
var v;
var zoff =0;
//var particle =[];
function setup() {
createCanvas(900,643);
img =loadImage('img.jpg');
cols=floor(width/scl);
rows=floor(height/scl);
 v = createVector(200,200);
pixelDensity(1);
background(255);
//particle[0]=new particle();

}



function draw() {
  // using Perlin Noise 
  var yoff = 0;
 randomSeed(10);
  for(var y = 0 ;y < rows ;y++){
    var xoff =0 ; //make zero after each row 
    for(var x=0 ;x< cols ;x++){
      var index=(x + y*(width)) * 4 ;
      var angle =noise(xoff,yoff,zoff)*TWO_PI; 
      var step=  p5.Vector.random2D();
      p5.Vector.fromAngle(angle);
      v.add(step);
      xoff +=inc;
     /* var c= img.get(int(x),int(y));
      fill(c,random(r));
      rect(x*scl,y*scl,scl,scl);*/
    stroke(0);
    push();
    translate(x*scl ,y*scl);
    rotate(v.heading());
    line(0,0,scl,0);
    pop();
    
      
    }
 yoff +=inc ;
 zoff +=0.001;
 
  }
 // particle[0].update();
  //particle[0].show();
  
 

}
