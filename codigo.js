let tl1 = gsap.timeline();


tl1.to('.create', {
  
  y:0,
  ease: "circ.out", 
  duration: 1,
  delay: 0.5
})

/*tl1.from('.txt-little', {
  opacity: 0,
  ease: "slow(0.7, 0.7, false)", 
  duration: 1
})*/


/*animación menu*/


const tl = gsap.timeline({
  paused: "true",
});

tl.to(".menu-container", {
  duration: 1,
  y: 0,
  ease: Power3.easeOut
});
tl.from(
  ".menu-close",
  {
    opacity: 0,
   // rotate: "180deg",
   ease: Expo.easeInOut, 
  },
  "-=.2"
);
tl.from(
  ".line",
  {
    duration: 1,
    ease: Expo.easeInOut, 
    stagger: {
      amount: 0.2,
    },
    width: "0%",
  },
  "-=.2"
);
tl.from(
  ".menu-item-number",
  {
    duration: 1,
    stagger: {
      amount: 0.2,
    },
    y: 100,
  },
  "-=1.5"
);
tl.from(
  ".menu-item-name",
  {
    duration: 1,
    stagger: {
      amount: 0.2,
    },
    y: 100,
  },
  "-=1.3"
);
tl.from(
  ".menu-item-sub",
  {
    duration: 1,
    stagger: {
      amount: 0.2,
    },
    y: 100,
  },
  "-=1.1"
);
tl.from(
  ".menu-item-icon",
  {
    duration: 1,
    stagger: {
      amount: 0.3,
    },
    y: 100,
  },
  "-=1"
);
function menuOpen() {
  tl.play();
}
function menuClose() {
  tl.reverse();
}


