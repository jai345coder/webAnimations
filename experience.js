gsap.to("#p1 h1", {
    transform: "translateX(-37%)",
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: "#p1 ",
        scroller: "body",
        smooth: true,
        start: "top 0%",
        pin: true
   
    }
})
gsap.to("#p2 h1", {
    transform: "translateX(-51%)",
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
        markers: true,
        scrub: true,
        trigger: "#p2 ",
        scroller: "body",
        smooth: true,
        start: "top 0%",
        pin: true
   
    }
})

gsap.to("#p3 h1", {
    transform: "translateX(-51%)",
    duration: 0.5,
    ease: "power3.inOut",
    scrollTrigger: {
        direction: "reverse",
        markers: true,
        scrub: true,
        trigger: "#p3 ",
        scroller: "body",
        smooth: true,
        start: "top 0%",
        pin: true
   
    }
})