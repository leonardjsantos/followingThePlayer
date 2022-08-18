// Leonard Santos
// GOAL: If the character is far enough away from the companion, the companion will follow
// If the companion is close to the character, the companion will stay put

// Create the variable for the player
var p1;

// Create the variable for the companion
var p2;

function setup() {
  createCanvas(400, 400);
  
  p1 = new Player();
  p2 = new Companion();
}

function draw() {
  background(220);
  
  p1.displayAndMove();
  p2.display();
  p2.follow(p1);
  
}

class Player{
  
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.size = 50;
    
    this.r = 200;
    this.g = 90;
    this.b = 90;
    
  }
  
  displayAndMove(){
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
    
    this.x = mouseX;
    this.y = mouseY;
  }
  
}

// Creating the class for our companion
class Companion{
  
  constructor(){
    // Basic parameters for display
    this.x = 0;
    this.y = 0;
    this.size = 25;
    this.r = 80;
    this.g = 80;
    this.b = 200;

    
    // This is the distance that we'll need to hit in order for the following to begin
    this.away = 50;
    this.farAway = 150;
  }
  
  display(){
    // Make our companion!
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
      }
  
  follow(other){
    let d = dist(this.x, this.y, other.x, other.y);
    
    if(d > this.farAway){
      if(this.x > other.x){
        this.x-= 3;
      }
      else if(this.x < other.x){
        this.x+= 3;
      }
      
      if(this.y > other.y){
        this.y-= 3;
      }
      else if(this.y < other.y){
        this.y+= 3;
      }    
    }
    else if(d > this.away){
      console.log("Oh no! You're so far!");
      
      if(this.x > other.x){
        this.x--;
      }
      else if(this.x < other.x){
        this.x++;
      }
      
      if(this.y > other.y){
        this.y--;
      }
      else if(this.y < other.y){
        this.y++;
      }
      
    }
    
    
    // console.log(d);
  }
  
  
  
}