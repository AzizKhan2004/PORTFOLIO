// 🔹 Navbar Active Link on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// 🔹 Header Background Change on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.backgroundColor = window.scrollY > 50 ? "rgba(0, 0, 0, 0.95)" : "rgba(0, 0, 0, 0.8)";
});

// 🔹 Play / Pause video on hover
const projectBoxes = document.querySelectorAll(".project-vidbox");
projectBoxes.forEach(box => {
  const video = box.querySelector("video");
  const hoverSign = box.querySelector(".hover-sign");

  if (video && hoverSign) {
    box.addEventListener("mouseenter", () => {
      video.play();
      hoverSign.classList.add("active");
    });

    box.addEventListener("mouseleave", () => {
      video.pause();
      hoverSign.classList.remove("active");
    });
  } else if (hoverSign) {
    // For image-based projects, hide hover sign immediately
    hoverSign.classList.add("active");
  }
});

// 🔹 Mobile Navigation Menu Toggle
const menuIcon = document.getElementById("menuIcon");
const mobileNav = document.getElementById("mobileNav");
const mobileLinks = document.querySelectorAll(".mobile-link");

if (menuIcon && mobileNav) {
  menuIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    const icon = menuIcon.querySelector("i");
    if (mobileNav.classList.contains("active")) {
      icon.classList.remove("bx-menu");
      icon.classList.add("bx-x");
    } else {
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    }
  });

  // Close mobile menu when clicking on a link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      const icon = menuIcon.querySelector("i");
      icon.classList.remove("bx-x");
      icon.classList.add("bx-menu");
    });
  });
}

