class Tanker {
  constructor(x, y, width, height,angle) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;

     //this.image = loadImage("assets/cannon.png");

     World.add(world, this.body);


    };

    display(){
      
    var pos =this.body.position;
    var angle = this.body.angle;
    
    if(keyIsDown(LEFT_ARROW && angle>1.5700)){
    angle = angle-0.05;
    Matter.Body.setAngle(tanker.body,angle)

    }
    if(keyIsDown(RIGHT_ARROW) && angle<0){

   angle = angle+0.05;
   Matter.Body.setAngle(tanker.body,angle)
    }
  launcherX = pos.x+((this.height+100)*cos(angle));
  launcherY = pos.y-((this.height-100)*sin(angle));

    

    if(keyIsDown(DOWN_ARROW) && angle<=-1.40){

  Matter.Body.setPosition(cannonBall.body,{x:launcherX,y:launcherY})

    }

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
  
    rect(0, 0, this.width, this.height);
    pop();
    arc(70,height-65,90,100,PI,TWO_PI)
    rect(20,height-65,100,20)
    rect(20,height-45,100,20)

  }
  }


    

  

    

     
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

    

