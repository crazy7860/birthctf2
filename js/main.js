const music = document.getElementById("bgMusic");

// autoplay fix
window.addEventListener("load", () => {
    music.play().catch(() => {
        document.body.addEventListener("click", () => music.play(), { once: true });
    });
});

// HERO animation
gsap.from("#title", {
    y: -50,
    opacity: 0,
    duration: 1
});

gsap.from(".subtitle", {
    opacity: 0,
    delay: 0.5
});

// CARDS ENTRY
gsap.from(".wish", {
    opacity: 0,
    y: 30,
    //   stagger: 0.7,
    duration: 1
});


const slider = document.querySelector(".slider");

// gsap.to(slider, {
//   x: "-50%",
//   duration: 15,
//   ease: "linear",
//   repeat: -1
// });

gsap.to(slider, {
    xPercent: -50,
    duration: 20,
    ease: "none",
    repeat: -1
});


//   jjjjjjjjjjjjjjjjjjj

gsap.to(".f1", {
    y: 20,
    rotation: 5,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".f2", {
    y: -25,
    rotation: -5,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".f3", {
    y: 15,
    duration: 3.5,
    repeat: -1,
    yoyo: true
});

gsap.to(".f4", {
    y: -20,
    duration: 4.5,
    repeat: -1,
    yoyo: true
});


// jkdfsjfvbsjdbgjsdg


// Cake soft bounce
gsap.to(".cake", {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});



const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

// create particles
for (let i = 0; i < 120; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 120,
    color: `hsl(${Math.random() * 360}, 100%, 60%)`,
    tilt: Math.random() * 10
  });
}

// draw
function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  });

  update();
}

// update position
function update() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d) + 1;
    c.x += Math.sin(c.d) * 2;

    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

// animation loop
setInterval(drawConfetti, 20);


// kzbhhasif

