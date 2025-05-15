// gsap.from("#page1 h1", {
//   y: 10,
//   duration: 5,
//   delay: 0.1,
//   opacity: 0,

//   smooth: true,
// });
gsap.from("#page2 h1", {
  transform: "translateX(200%)",

 duration: 1,
  scrollTrigger: {
    markers: true,
    scrub: true,
    trigger: "#page2 ",
    scroller: "body",
    smooth: true,
    start: "top 0%",

 


  },

  smooth: true,
});
