class Dustbin{

    constructor (x,y,width,height){
   
   var options={
   isStatic:true
   }
   this.body=Bodies.rectangle(x,y,width,height,options);
   this.width=width;
   this.height=height;
   World.add(world,this.body);
   }
   display(){
   var posdust=this.body.position;
    rectMode(CENTER);
    fill ("cyan");
    rect(posdust.x,posdust.y,this.width,this.height);
       } 
   }