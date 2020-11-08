var puzzle;
var upgrade1, upgrade2, upgrade3;
var cost1 = 20, 
    cost2 = 100,
    cost3 = 1000
    cost4 = 1000000;
var ascend;
var score = 0;

function setup() {
  createCanvas(500, 500);
  puzzle = new Puzzles();
  upgrade1 = new Upgrade1();
  upgrade2 = new Upgrade2();
  upgrade3 = new Upgrade3();
  ascend = new Upgrade4();
}

function draw() {
  //console.log(mouseX,mouseY);
  background(51);
  push();
  textSize(20);
  fill(255);
  text("Puzzles Solved: " + score,180,40);
  textSize(10);
  text("Click Me To Solve A Puzzle!",190,160);
  text("Harder Puzzles Costs: " + cost1,340,330);
  text("Auto Solver Costs: " + cost2,65,330);
  pop();
  puzzle.show();
  upgrade1.show();
  upgrade2.show();
  if(cost2 == 500) {
    textSize(10);
    fill(255);
    text("Faster Auto Solvers Costs: " + cost3,45,60);
    upgrade3.show();
    if(frameCount % 800 == 0 && cost3 == 1000) {
       score += 10;
    } else if(frameCount % 500 == 0 && cost3 == 5000) {
      score += 10;
    } else if(frameCount % 100 == 0 && cost3 == 10000) {
      score += 10;
    } else if(frameCount % 10 == 0 && cost3 == "Bought!") {
      score += 10;
    }
  }
  if(cost2 == 1000) {
    textSize(10);
    fill(255);
    text("Faster Auto Solvers Costs: " + cost3,45,60);
    upgrade3.show();
    if(frameCount % 800 == 0 && cost3 == 1000) {
       score += 50;
    } else if(frameCount % 500 == 0 && cost3 == 5000) {
      score += 50;
    } else if(frameCount % 100 == 0 && cost3 == 10000) {
      score += 50;
    } else if(frameCount % 10 == 0 && cost3 == "Bought!") {
      score += 50;
    }
  }
    if(cost2 == "Bought!") {
    textSize(10);
    fill(255);
    text("Faster Auto Solvers Costs: " + cost3,45,60);
    upgrade3.show();
    if(frameCount % 800 == 0 && cost3 == 1000) {
       score += 100;
    } else if(frameCount % 500 == 0 && cost3 == 5000) {
      score += 100;
    } else if(frameCount % 100 == 0 && cost3 == 10000) {
      score += 100;
    } else if(frameCount % 10 == 0 && cost3 == "Bought!") {
      score += 100;
    }
  }
  if(cost1 == "Bought!" && cost2 == "Bought!" && cost3 == "Bought!") {
    textSize(10);
    fill(255);
    text("Ascend Costs: " + cost4,330,60);
    ascend.show();
  }
}

function mousePressed() {
  if(cost1 == 20){
    var d1 = dist(puzzle.pos.x,puzzle.pos.y,mouseX,mouseY);
    if(d1 < puzzle.r/2) {
      score += 1;
    }
  }
  
  var d2 = dist(upgrade1.pos.x+upgrade1.r/2,upgrade1.pos.y+upgrade1.r/2,mouseX,mouseY);
  if(score >= cost1) {
    upgrade1.buy = true;
  }
  if(d2 < upgrade1.r/2 && cost1 == 20 && upgrade1.buy == true) {
    upgrade1.buy = false;
    cost1 = 1000;
    score -= 20;
    console.log("bought!");
  }
  if(cost1 == 1000){
    var d1 = dist(puzzle.pos.x,puzzle.pos.y,mouseX,mouseY);
    if(d1 < puzzle.r/2) {
      score += 10;
    }
  }
  if(d2 < upgrade1.r/2 && cost1 == 1000 && upgrade1.buy == true) {
    upgrade1.buy = false;
    cost1 = 10000;
    score -= 1000;
    console.log("bought!");
  }
  if(cost1 == 10000){
    var d1 = dist(puzzle.pos.x,puzzle.pos.y,mouseX,mouseY);
    if(d1 < puzzle.r/2) {
      score += 25;
    }
  }
  if(d2 < upgrade1.r/2 && cost1 == 10000 && upgrade1.buy == true) {
    upgrade1.buy = false;
    cost1 = 20000;
    score -= 10000;
    console.log("bought!");
  }
  if(cost1 == 20000){
    var d1 = dist(puzzle.pos.x,puzzle.pos.y,mouseX,mouseY);
    if(d1 < puzzle.r/2) {
      score += 75;
    }
  }
  if(d2 < upgrade1.r/2 && cost1 == 20000 && upgrade1.buy == true) {
    upgrade1.buy = false;
    cost1 = "Bought!";
    score -= 20000;
    console.log("bought!");
  }
  if(cost1 == "Bought!"){
    var d1 = dist(puzzle.pos.x,puzzle.pos.y,mouseX,mouseY);
    if(d1 < puzzle.r/2) {
      score += 150;
    }
  }
  
  var d3 = dist(upgrade2.pos.x+upgrade2.r/2,upgrade2.pos.y+upgrade2.r/2,mouseX,mouseY);
  
  if(score >= cost2) {
    upgrade2.buy = true;
  }
  if(d3 < upgrade2.r/2 && upgrade2.buy == true && cost2 == 100) {
    upgrade2.buy = false;
    cost2 = 500;
    score -= 100;
    console.log("bought!");
  }
  if(d3 < upgrade2.r/2 && upgrade2.buy == true && cost2 == 500) {
    upgrade2.buy = false;
    cost2 = 1000;
    score -= 500;
    console.log("bought!");
  }
  if(d3 < upgrade2.r/2 && upgrade2.buy == true && cost2 == 1000) {
    upgrade2.buy = false;
    cost2 = "Bought!";
    score -= 1000;
    console.log("bought!");
  }
  
  var d4 = dist(upgrade3.pos.x+upgrade3.r/2,upgrade3.pos.y+upgrade3.r/2,mouseX,mouseY);
  
  if(score >= cost3) {
    upgrade3.buy = true;
  }
  if(d4 < upgrade3.r/2 && upgrade3.buy == true && cost3 == 1000) {
    upgrade3.buy = false;
    cost3 = 5000;
    score -= 1000;
    console.log("bought!");
  }
  if(d4 < upgrade3.r/2 && upgrade3.buy == true && cost3 == 5000) {
    upgrade3.buy = false;
    cost3 = 10000;
    score -= 5000;
    console.log("bought!");
  }
  if(d4 < upgrade3.r/2 && upgrade3.buy == true && cost3 == 10000) {
    upgrade3.buy = false;
    cost3 = "Bought!";
    score -= 10000;
    console.log("bought!");
  }
  
  var d5 = dist(ascend.pos.x+ascend.r/2,ascend.pos.y+ascend.r/2,mouseX,mouseY);
  
  if(score >= cost4) {
    ascend.buy = true;
  }
  if(d5 < ascend.r/2 && ascend.buy == true && cost4 == 1000000) {
    ascend.buy = false;
    cost1 = "GGs";
    cost2 = "GGs";
    cost3 = "GGs";
    cost4 = "GGs";
    score = "Infinty GG LOL";
    console.log("bought!");
  }
}