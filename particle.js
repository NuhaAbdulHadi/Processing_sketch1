function particle(){
this.pos =createVector(0,0);
this.vel =createVector(0,0);
this.acc =createVector(0,0);

this.update=function(){
this.vel.add(this.acc);
this.pos.dd(this.vel);
this.acc.mult(0);

};
this.applyForce = function(force){
this.acc.add(force);
};

this.show =function(){
stroke(0);
point(this.pos.x,this.pos.y);
};
}
