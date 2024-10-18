gsap.to("#nav",{
    backgroundColor:'#000',
    height:"80px",
    duration:1,
    scrollTrigger:{
        trigger:'#nav',
        scroll:'body',
        markers:'true',
        start:'top -10%',
        end:'top -11%',
        scrub:'1'
    }
})