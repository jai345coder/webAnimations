gsap.to("#loader",{
  opacity:0,    
    y:-1000,duration:1,
    delay:6,
})
gsap.from("#loader h2",{
    y:10,
    duration:1,
    delay:0.1,
    opacity:0,
    stagger:2,
    smooth:true
  
})
gsap.from("#box",{
    x:2000,
    duration:2,
    delay:0.1,
    opacity:0,
    stagger:2,
      rotate:360,
scale:-100,
    resizeToggle:true
})



