import React, { useState, useEffect, useRef } from "react";
import Matter from "matter-js";

const COLORS = {
  BOARD: "#fb9300",
  WHEELS: "#f54748",
  PLATFORM: "#343f56"
};

const { Engine, Render, Mouse, MouseConstraint, Runner, Body, Bodies, Composite, Composites, Constraint } = Matter;

function Board(xx, yy, width, height, wheelSize) {
  const group = Body.nextGroup(true);
  const wheelBase = 20;
  const wheelAOffset = -width * 0.4 + wheelBase;
  const wheelBOffset = width * 0.4 - wheelBase;
  const wheelYOffset = 30;

  const car = Composite.create({ label: "Car" });
  const body = Bodies.rectangle(xx, yy, width, height, {
    collisionFilter: { group },
    chamfer: { radius: height * 0.5 },
    render: { fillStyle: COLORS.BOARD },
    density: 0.0002
  });

  const wheelA = Bodies.circle(xx + wheelAOffset, yy + wheelYOffset, wheelSize, {
    collisionFilter: { group },
    render: { fillStyle: COLORS.WHEELS },
    friction: 0.8
  });

  const wheelB = Bodies.circle(xx + wheelBOffset, yy + wheelYOffset, wheelSize, {
    collisionFilter: { group },
    render: { fillStyle: COLORS.WHEELS },
    friction: 0.8
  });

  const axelA = Constraint.create({
    bodyB: body,
    pointB: { x: wheelAOffset, y: wheelYOffset },
    bodyA: wheelA,
    stiffness: 1,
    length: 0
  });

  const axelB = Constraint.create({
    bodyB: body,
    pointB: { x: wheelBOffset, y: wheelYOffset },
    bodyA: wheelB,
    stiffness: 1,
    length: 0
  });

  Composite.addBody(car, body);
  Composite.addBody(car, wheelA);
  Composite.addBody(car, wheelB);
  Composite.addConstraint(car, axelA);
  Composite.addConstraint(car, axelB);

  return { car, wheelA, wheelB };
}

function makeBridge() {
  const group = Body.nextGroup(true);

  const bridge = Composites.stack(0, 290, 11, 1, 0, 0, function(x, y) {
    return Bodies.rectangle(x - 100, y, 100, 20, {
      collisionFilter: { group },
      chamfer: 10,
      render: { fillStyle: COLORS.PLATFORM }
    });
  });

  Composites.chain(bridge, 0.25, 0, -0.25, 0, {
    stiffness: 0.2,
    length: 40,
    render: { visible: false }
  });

  const leftPlatform = Bodies.rectangle(-600, 540, 220, 500, {
    isStatic: true,
    chamfer: { radius: 20 },
    render: { fillStyle: COLORS.PLATFORM }
  });

  const rightPlatform = Bodies.rectangle(600, 540, 220, 500, {
    isStatic: true,
    chamfer: { radius: 20 },
    render: { fillStyle: COLORS.PLATFORM }
  });

  const leftConstraint = Constraint.create({
    pointA: { x: -490, y: 300 },
    bodyB: bridge.bodies[0],
    pointB: { x: -50, y: 0 },
    length: 2,
    stiffness: 0.9
  });

  const rightConstraint = Constraint.create({
    pointA: { x: 490, y: 300 },
    bodyB: bridge.bodies[bridge.bodies.length - 1],
    pointB: { x: 50, y: 0 },
    length: 2,
    stiffness: 0.9
  });

  return [bridge, leftPlatform, rightPlatform, leftConstraint, rightConstraint];
}

function MatterComponent() {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const engine = Engine.create();
    engineRef.current = engine;

    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 1000,
        height: 800,
        background: 'transparent',
        wireframes: false,
        showVelocity: true
      }
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    Render.run(render);
    Render.lookAt(render, {
      min: { x: -700, y: 0 },
      max: { x: 700, y: 800 }
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    // Initialize world
    const ground = Bodies.rectangle(0, 800, 2000, 30, { isStatic: true });
    const bridgeParts = makeBridge();
    const { car } = Board(-200, 0, 150, 30, 30);

    Composite.add(engine.world, [ground, ...bridgeParts, car]);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default MatterComponent;
  