// script.js

// GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

//////////////////////////////////////////////////////
// LOADER ANIMATION
//////////////////////////////////////////////////////

window.addEventListener("load", () => {

  const tl = gsap.timeline();

  tl.to(".loader h1", {
    scale: 1.2,
    duration: 1,
    ease: "power3.out"
  })

  .to(".loader", {
    y: "-100%",
    duration: 1.2,
    ease: "power4.inOut"
  })

  .from("header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  })

  .from(".hero-title", {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out"
  })

  .from(".hero p", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  }, "-=0.8")

  .from(".hero-buttons button", {
    y: 40,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6");

});

//////////////////////////////////////////////////////
// LENIS SMOOTH SCROLL
//////////////////////////////////////////////////////

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//////////////////////////////////////////////////////
// HERO FLOATING EFFECT
//////////////////////////////////////////////////////

gsap.to(".hero-bg", {
  scale: 1.2,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

//////////////////////////////////////////////////////
// SERVICES ANIMATION
//////////////////////////////////////////////////////

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 70%"
  },

  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power4.out"
});

//////////////////////////////////////////////////////
// PORTFOLIO ANIMATION
//////////////////////////////////////////////////////

gsap.from(".project", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 70%"
  },

  scale: 0.8,
  opacity: 0,
  stagger: 0.25,
  duration: 1.2,
  ease: "power4.out"
});

//////////////////////////////////////////////////////
// TESTIMONIALS ANIMATION
//////////////////////////////////////////////////////

gsap.from(".testimonial", {
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 75%"
  },

  x: -100,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power3.out"
});

//////////////////////////////////////////////////////
// PRICING ANIMATION
//////////////////////////////////////////////////////

gsap.from(".price-card", {
  scrollTrigger: {
    trigger: ".pricing",
    start: "top 75%"
  },

  y: 120,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.7)"
});

//////////////////////////////////////////////////////
// CONTACT FORM ANIMATION
//////////////////////////////////////////////////////

gsap.from(".contact form", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%"
  },

  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

//////////////////////////////////////////////////////
// PARALLAX EFFECT
//////////////////////////////////////////////////////

gsap.to(".hero-bg", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    scrub: true
  }
});

//////////////////////////////////////////////////////
// NAVBAR BACKGROUND CHANGE
//////////////////////////////////////////////////////

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.background = "rgba(0,0,0,0.7)";
    header.style.backdropFilter = "blur(15px)";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.1)";

  } else {

    header.style.background = "rgba(0,0,0,0.2)";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
  }

});

//////////////////////////////////////////////////////
// MAGNETIC BUTTON EFFECT
//////////////////////////////////////////////////////

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {

  btn.addEventListener("mousemove", (e) => {

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: "power2.out"
    });

  });

  btn.addEventListener("mouseleave", () => {

    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.3)"
    });

  });

});

//////////////////////////////////////////////////////
// TEXT REVEAL EFFECT
//////////////////////////////////////////////////////

gsap.utils.toArray(".section-title").forEach((title) => {

  gsap.from(title, {

    scrollTrigger: {
      trigger: title,
      start: "top 80%"
    },

    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power4.out"

  });

});

//////////////////////////////////////////////////////
// PORTFOLIO HOVER EFFECT
//////////////////////////////////////////////////////

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {

  project.addEventListener("mouseenter", () => {

    gsap.to(project, {
      scale: 1.03,
      duration: 0.4
    });

  });

  project.addEventListener("mouseleave", () => {

    gsap.to(project, {
      scale: 1,
      duration: 0.4
    });

  });

});

//////////////////////////////////////////////////////
// CURSOR GLOW EFFECT
//////////////////////////////////////////////////////

const cursor = document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.2
  });

});

//////////////////////////////////////////////////////
// EXTRA CSS FOR CURSOR
//////////////////////////////////////////////////////

const style = document.createElement("style");

style.innerHTML = `
.cursor-glow{
  position:fixed;
  width:300px;
  height:300px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(123,47,247,0.25), transparent 70%);
  pointer-events:none;
  transform:translate(-50%,-50%);
  z-index:0;
  filter:blur(40px);
}
`;

document.head.appendChild(style);