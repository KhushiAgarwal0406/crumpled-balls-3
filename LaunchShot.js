class LaunchShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 30
        }
        this.pointB = pointB
        this.Launchshot = Constraint.create(options);
        World.add(world, this.Launchshot);
    }

    fly(){
        this.Launchshot.bodyA = null;
      }
  
    display(){
        if(this.Launchshot.bodyA){
            var pointA = this.Launchshot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
  }