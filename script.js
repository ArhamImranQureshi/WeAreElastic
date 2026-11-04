gsap.registerPlugin(ScrollTrigger);
gsap.to(".video-con",{
    width:'100vw',
    height:"100vh",
    borderRadius:0,
    ease:"none",
    scrollTrigger:{
        trigger:".video-sec",
        start: "top top",
        end: "+=150%",
        scrub:1,
        pin:true,
    }
})
