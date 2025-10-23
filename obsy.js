var text_roll = document.querySelector(".text_roll");

const target = document.querySelector('#web');
const follower = document.querySelector('#Blue_Green');

let mouseX = 0, mouseY = 0;   // cursor position
let currentX = 0, currentY = 0; // follower position
let isInside = false;


var page = document.querySelector('.page');
var button = document.getElementById('load');


button.addEventListener('click', function() {
   alert('Button clicked!');
   page.style.backgroundColor = 'black';
   page.style.trasition = 'background-color 0.5s ease';
   page.style.scale = '1';
   page.style.opacity = '1';
  
   page.style.transition = 'scale 0.6s ease';
 
   
});






// update target position when moving
target.addEventListener('mousemove', (e) => {
  const rect = target.getBoundingClientRect();
  mouseX = e.clientX - rect.left;
  mouseY = e.clientY - rect.top;
  isInside = true;
});

target.addEventListener('mouseleave', () => {
  isInside = false;
});

function animate() {
  // smooth follow (lerp effect)
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  if (isInside) {
    follower.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  requestAnimationFrame(animate);
}

animate();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const loaderEl = document.querySelector("#loader");
const counterEl = document.querySelector("#numbers h4");
const experience = document.querySelector("#row span");
const now = document.querySelector("#check span");
// Initialize the counter to 1 and display it
let count = 1;

counterEl.textContent = count;
//is the keyoard is worjing done or not in the game of cycle sd with the devil n  ki n             
// Start an interval that increments the counter every 10ms
const intervalId = setInterval(() => {
    if (count < 100) {
        // Increment the counter and update the display
        count += 1;
        counterEl.textContent = count;
        counterEl.display = "flex";
        experience.color = color === black ? white : black;     
        now.color = yellow;
    } else {
        // When counter reaches 100, stop the interval
        clearInterval(intervalId);

        // Wait 2 seconds before starting the loader animation
        setTimeout(() => {
            // Animate the loader: slide it up and fade out using GSAP
            experience
            gsap.to(loaderEl, {
                y: "-100vh",      // Move loader fully up out of view
                opacity: 0,       // Fade out loader
                duration: 1,      // Animation duration: 1 second
                ease: "power2.out", // Easing function for smooth animation
                onComplete: () => {
                    // After animation, hide the loader so the page is interactive
                    loaderEl.style.display = "none";
                }
            });
        }, 2000);
    }
}, 10);


//My projects pop window
var seePro = document.querySelector("see_Projects");
var checkPro = document.querySelector("check_Project");

var seeMe =  checkPro.addEventListener("click",function(){
checkPro.style.height="90vh";
checkPro.style.width="90%";
checkPro.style.borderRadius="20px";

});