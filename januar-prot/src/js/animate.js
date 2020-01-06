console.clear();

// Set variables
const octopus = document.querySelector(".img_octopus");

const lights_1 = document.querySelector(".lights_100");
const lights_2 = document.querySelector(".lights_75");

const dots_1 = document.querySelector(".dots_overlay_bottom");
const dots_2 = document.querySelector(".dots_overlay_top");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

// Set Tween

// Octopus
TweenLite.set(octopus, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

// Lights 1
TweenLite.set([lights_1], {
    y: randomX(1),
  });

// Lights 2
TweenLite.set(lights_2, {
    x: randomX(-1),
    y: randomX(1)
  });

// Dots Bottom
TweenLite.set(dots_1, {
    x: randomX(-1),
    y: randomX(1)
  });

// Dots Top
TweenLite.set(dots_1, {
    x: randomX(-1),
    y: randomX(1)
  });

// Move Functions
moveX(octopus, 1);
moveY(octopus, -1);
rotate(octopus, 1);

moveX(lights_1, 1);

moveX(lights_2, 1);
moveY(lights_2, -1);

moveX(dots_1, 1);
moveY(dots_1, -1);

moveX(dots_2, 1);
moveY(dots_2, -1);





// function def
function rotate(target, direction) {
  
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1]
  });
}

function moveX(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1]
  });
}

function moveY(target, direction) {
  
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1]
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
