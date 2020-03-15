// Set variables
const fish = document.querySelector(".img_fish");
const logo = document.querySelector("#logo__fish");

const lights_1 = document.querySelector(".lights_100");
const lights_2 = document.querySelector(".lights_75");

const dots_1 = document.querySelector(".dots_overlay_bottom");
const dots_2 = document.querySelector(".dots_overlay_top");

const dots_1_s__2 = document.querySelector(".dots_overlay_bottom_s__2");
const dots_2_s__2 = document.querySelector(".dots_overlay_top_s__2");

const clouds_front = document.querySelector(".clouds-front");
const clouds_back = document.querySelector(".clouds-back");


// Animation

// Lights 1
TweenMax.fromTo(lights_1, 10, {x: "-5%"}, {x: "0%", ease: Power1.easeInOut, repeat: -1, yoyo: true});

// Lights 2
TweenMax.fromTo(lights_2, 10, {x: "5%"}, {x: "0%", ease: Power1.easeInOut, repeat: -1, yoyo: true});

// Clouds Front
TweenMax.fromTo(clouds_front, 10, {x: "-5%"}, {x: "0%", ease: Power1.easeInOut, repeat: -1, yoyo: true});

// Clouds Back
TweenMax.fromTo(clouds_back, 10, {x: "5%"}, {x: "0%", ease: Power1.easeInOut, repeat: -1, yoyo: true});


var controller = new ScrollMagic.Controller({loglevel: 3});

function animateSection(heading, text, image, dots1, dots2) {
    var tl = new TimelineMax();
    tl.fromTo(
        heading,
        1.5,
        {opacity: 0, y: '-25%'}, {opacity: 1, y: '0%', ease: Power2.easeInOut}
        )
        .fromTo(
            text,
            1.5,
            {opacity: 0, y: '25%'}, {opacity: 1, y: '0%', ease: Power2.easeInOut} 
        )
        .fromTo(
            image,
            1.0,
            {opacity: 0}, {opacity: 1, ease: Power2.easeInOut},
            "-=1.0"
        )
        .fromTo(
            dots1,
            15,
            {y: "-15%", x: "-15%", scale: 0.8}, {y: "0%", x: "0%", scale: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true},
            "-=3.0"
        )
        .fromTo(
            dots2,
            15,
            {y: "35%", x: "35%", scale: 1}, {y: "0%", x: "0%", scale: 0.9, ease: Power1.easeInOut, repeat: -1, yoyo: true},
            "-=15.0"
        )
        .fromTo(
            image,
            7,
            {rotationZ: 10, transformOrigin: "center", x: "-5%", y: "5%"}, {rotationZ: -10, x: "5%", y: "-5%", ease: Power1.easeInOut, repeat: -1, yoyo: true},
            "-=15.0"
        )
    return tl
}

$('.animate-section').each(function(){
    console.log('David war hier')
    var myScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0
    })
    .addIndicators({
        colorTrigger: "white",
        colorStart: "white",
        colorEnd: "white",
        indent: 5
      })
    .setTween(animateSection(this.getElementsByTagName('h3')[0], this.getElementsByTagName('p')[0], this.getElementsByTagName('img')[0], this.getElementsByClassName('dots_overlay_bottom')[0], this.getElementsByClassName('dots_overlay_top')[0]))
    .addTo(controller)
   })

