const World=Matter.World;
 const Engine=Matter.Engine;
  const Bodies=Matter.Bodies; 
  var engine,world; var obj1;
   function setup() { createCanvas(400,400);
     engine=Engine.create();
      world=engine.world;
      var options={
       restitution:1.0 
      }
       obj1=Bodies.circle(100,100,20,options);
        World.add(world,obj1);
         console.log(obj1.position.x);
         var ground_options={
           isStatic: true
         }
         ground=Bodies.rectangle(200,390,200,20,ground_options)
         World.add(world,ground);
         } function draw()
          {
            background(0);
            Engine.update(engine);
            ellipseMode(RADIUS);
            ellipse(obj1.position.x,obj1.position.y,20,20)
           rectMode(CENTER);
            rect(ground.position.x,ground.position.y,400,20);
           }