
























// // gsapAnimations.js

// export const runHeaderAnimations = () => {
//   const tl = gsap.timeline();

//   tl.to("#pretop", {
//     opacity: 1,
//     y: -30,
//     duration: 2,
//     stagger: 0.3,
//     ease: "circ.inOut"
//   })
//   .to(".visual h1", {
//     opacity: 0,
//     y: 20
//   })
//   .to("#pre", {
//     x: -100,
//     stagger: 0.3,
//     opacity: 1,
//     duration: 2
//   })
//   .to("#pretop", {
//     opacity: 0,
//     y: -50,
//     duration: 0.6,
//     ease: "circ.inOut"
//   })
//   .to("#pre", {
//     opacity: 0,
//     y: -100,
//     duration: 0.5,
//     ease: "circ.inOut"
//   })
//   .to(".green", {
//     height: "100%",
//     top: 0,
//     duration: 2,
//     delay: -0.6,
//     ease: "circ.inOut"
//   })
//   .to(".green", {
//     height: 0,
//     top: 0,
//     duration: 0.6,
//     ease: "circ.inOut"
//   })
//   .to(".home", {
//     height: "100%",
//     top: 0,
//     duration: 2,
//     delay: -2,
//     ease: "circ.inOut"
//   })
//   .to(".htop h1 , .hbottom h2", {
//     opacity: 1,
//     y: -100,
//     duration: 1.2,
//     ease: "circ.inOut"
//   })
//   .to(".curr , .my", {
//     opacity: 1,
//     y: 100,
//     duration: 1,
//     ease: "circ.inOut"
//   })
//   .to(".visual h1", {
//     opacity: 1,
//     y: 0,
//     duration: 0.5,
//     delay: 5,
//     stagger: 0.2,
//     ease: "power2.out"
//   });
// };