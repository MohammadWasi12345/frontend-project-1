const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let rotate = 0; // Declare the rotate variable outside the event listener

document.querySelectorAll(".elem").forEach(function (elem) {

   elem.addEventListener("mouseleave", function(event) {
      gsap.to(elem.querySelector("img"), {
         opacity: 0,
         ease: "power3",
         duration:0.5,
      });
   });
   
   elem.addEventListener("mousemove", (event) => {
      const diffY = event.clientY - elem.getBoundingClientRect().top;
      const diffX = event.clientX - rotate;
      rotate = event.clientX;

      gsap.to(elem.querySelector("img"), {
         opacity: 1,
         ease: "power1",
         x: diffX, // Adjust the horizontal position using 'x'
         y: diffY, // Adjust the vertical position using 'y'
         rotation: gsap.utils.clamp(-20, 20, diffX) // Rotate based on the horizontal movement
      });
   });
});


     























function firstPageAnim(){
    var tl = gsap.timeline();
    
     tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
        
     })
     .from("#heading",{
        y:'-10',
    
        opacity:0,
        duration:1,
        ease:Expo.easeInOut
     })
     .from("#small",{
        y:'0',
        delay:-1,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        stagger:.2
        
     })
     .from("#homefooter",{
        y:'0',
        delay:-1,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
     })

}
firstPageAnim();










function circleMouseFollower() {
    window.addEventListener("mousemove", function(event) {
        const mainCircle = document.querySelector("#maincircle");
        mainCircle.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    });
}

circleMouseFollower();