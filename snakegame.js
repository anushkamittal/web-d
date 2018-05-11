var s;
var food;
var d;
var canvas = document.querySelector("canvas");

canvas.width= window.innerWidth;
canvas.height= window.innerHeight;
var c= canvas.getContext("2d");

function picklocation(){
  food={
   x :(Math.floor(Math.random()*20))*20+400 ,
   y :(Math.floor(Math.random()*20))*20
  };
}

function snake(){
  this.x = 400;
  this.y = 0;
  this.xspeed =1;
  this.yspeed =0;
  this.total=1;
  this.tail=[];
  
  this.dir = function(x,y){  
    this.xspeed = x;
    this.yspeed = y;
  };
  
  this.eat = function(pos){
    if((this.x>pos.x || this.x+20>pos.x) && (this.x<pos.x+20 || this.x+20<pos.x+20) && (this.y>pos.y || this.y+20>pos.y) && (this.y<pos.y+20 || this.y+20<pos.y)){
      this.total++;
      return true;
    }
    else{
      return false;
    }
  };
   this.update = function(){
   this.x = this.x + this.xspeed;               
    this.y = this.y + this.yspeed;
     if(this.x>780 || this.x<400){
   // this.xspeed = - this.xspeed;
       alert("gameover");
  }
     if(this.y<0 || this.y>400){
     //  this.yspeed = -this.yspeed;
       alert("gameover");
     }
  };
  
  this.show = function(){
    c.fillStyle="yellow"; 
    c.fillRect(this.x,this.y,20,20);
    for(var i=1;i<this.total;i++){
      if(d=="left"){
        c.fillStyle="green";
    c.fillRect(this.x-i*22,this.y,20,20);}
               if(d=="up"){
         c.fillStyle="green";
    c.fillRect(this.x,this.y-i*22,20,20);}
        if(d=="right"){
          c.fillStyle="green";
    c.fillRect(this.x+i*22,this.y,20,20);}
        if(d=="down"){
          c.fillStyle="green";
    c.fillRect(this.x,this.y+i*22,20,20);}
    }   
};
}
s = new snake();

function keypressed(e){
 if(e.keyCode == 38){
   s.dir(0,-1);
    d="up";}
 else if(e.keyCode == 40){
   s.dir(0,1);
 d="down";}
 else if(e.keyCode == 39){
   s.dir(1,0);
    d="right";}
 else if(e.keyCode == 37){
   s.dir(-1,0);
 d="left";}
}
window.addEventListener("keydown",keypressed);
picklocation();

function draw(){
  c.fillStyle="black";
  c.fillRect(400,0,400,400);
   c.fillStyle="red";
  c.fillRect(food.x,food.y,20,20);
  requestAnimationFrame(draw);
  s.update();
  s.show();
  if(s.eat(food)){
    picklocation();
  }
}
draw();