function Upgrade1() {
  this.pos = createVector(350,350);
  this.r = 75;
  this.buy = false;
  
  this.show = function() {
    push();
    fill(255);
    strokeWeight(2);
    rect(this.pos.x,this.pos.y,this.r,this.r);
    pop();
  }
}

function Upgrade2() {
  this.pos = createVector(75,350);
  this.r = 75;
  this.buy = false;
  
  this.show = function() {
    push();
    fill(255);
    strokeWeight(2);
    rect(this.pos.x,this.pos.y,this.r,this.r);
    pop();
  }
}

function Upgrade3() {
  this.pos = createVector(75,75);
  this.r = 75;
  this.buy = false;
  
  this.show = function() {
    push();
    fill(255);
    strokeWeight(2);
    rect(this.pos.x,this.pos.y,this.r,this.r);
    pop();
  }
}

function Upgrade4() {
  this.pos = createVector(350,75);
  this.r = 75;
  this.buy = false;
  
  this.show = function() {
    push();
    fill(255);
    strokeWeight(2);
    rect(this.pos.x,this.pos.y,this.r,this.r);
    pop();
  }
}