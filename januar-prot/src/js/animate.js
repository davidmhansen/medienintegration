console.clear();

// Set variables
const fish = document.querySelector(".img_fish");

const lights_1 = document.querySelector(".lights_100");
const lights_2 = document.querySelector(".lights_75");

const dots_1 = document.querySelector(".dots_overlay_bottom");
const dots_2 = document.querySelector(".dots_overlay_top");

const dots_1_s__2 = document.querySelector(".dots_overlay_bottom_s__2");
const dots_2_s__2 = document.querySelector(".dots_overlay_top_s__2");

const clouds_front = document.querySelector(".clouds-front");
const clouds_back = document.querySelector(".clouds-back");

const randomX = random(10, 20);
const randomY = random(20, 30);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

// Set Tween

// fish
TweenLite.set(fish, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1)
});

// Lights 1


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

  // Dots Bottom S__2
TweenLite.set(dots_1_s__2, {
  x: randomX(-1),
  y: randomX(1)
});

// Dots Top S__2
TweenLite.set(dots_1_s__2, {
  x: randomX(-1),
  y: randomX(1)
});

// Clouds Front
TweenLite.set(clouds_front, {
  x: randomX(-1),
});

// Clouds Back
TweenLite.set(clouds_back, {
  x: randomX(-1),
  y: randomX(1)
});

// Move Functions
moveX(fish, 1);
moveY(fish, -1);
rotate(fish, 1);

moveX(lights_1, 1);

moveX(lights_2, 1);
moveY(lights_2, -1);

moveX(dots_1, 1);
moveY(dots_1, -1);

moveX(dots_2, 1);
moveY(dots_2, -1);

moveX(dots_1_s__2, 1);
moveY(dots_1_s__2, -1);

moveX(dots_2_s__2, 1);
moveY(dots_2_s__2, -1);

moveX(clouds_front, 1);

moveX(clouds_back, 1);
moveY(clouds_back, -1);





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
