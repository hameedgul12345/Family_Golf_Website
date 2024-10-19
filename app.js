var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrblur.style.left = dets.x-150 + "px";
  crsrblur.style.top = dets.y-150 + "px";

});
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "80px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroll: "body",
    // markers:'true',
    start: "top -10%",
    end: "top -11%",
    scrub: "1",
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: "body",
    // markers:'true',
    start: "top -25%",
    end: "top -75%",
    scrub: "2",
  },
});
