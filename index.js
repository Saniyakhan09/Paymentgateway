function navAnimation(){
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter",function() {
        let tl = gsap.timeline()
    
        tl.to("#section",{
            height:"21vh",
            duration: 0.5
        })
        tl.to(".nav-elem-content",{
           display: "block",
           duration: 0.1
        })

        tl.to(".nav-elem-content", {
            y: 0,
            stagger: {
                amount: 0.5 
            }
        })
    })
    nav.addEventListener("mouseleave",function() {
        let tl = gsap.timeline()
        tl.to(".nav-elem-content", {
            y: 25,
            stagger: {
                amount:0.2
            }
        })
        tl.to(".nav-elem-content", {
            display:"none",
            duration:0.1
        })
        tl.to("#section",{
            height:0,
            duration:0.2
    
        })
    })
}
navAnimation()

function vid(){
    var a = document.querySelector("#page5-right video");
    a.addEventListener("mouseenter",function(){
        a.play();
    })
    a.addEventListener("mouseleave",function(){
        a.pause();
    })
}
vid()



document.addEventListener("DOMContentLoaded", function() {
    var icons = document.querySelectorAll("#icons i");

    icons.forEach(function(ic) {
        ic.addEventListener("mouseenter", function() {
            ic.style.color = "blue";
        });

        ic.addEventListener("mouseleave", function() {
            ic.style.color = ""; 
        });
    });
});
