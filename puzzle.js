function Puzzles() {
  this.pos = createVector(width/2,height/2);
  this.r = 150;
  
  this.show = function() {
    push();
    fill(255);
    strokeWeight(2);
    ellipse(this.pos.x,this.pos.y,this.r);
    pop();
  }
}