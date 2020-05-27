const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu"); // nav
const menuBranding = document.querySelector(".menu-branding");
const menuNavList = document.querySelector(".menu-nav-list");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
const loaderWrapper = document.getElementById("loader-wrapper");

var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", toggleCurrent);
  navLink.addEventListener("click", runLoader);
});

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNavList.classList.add("show");
    navItems.forEach((item) => {
      item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNavList.classList.remove("show");
    navItems.forEach((item) => {
      item.classList.remove("show");
    });
    showMenu = false;
  }
}

// Add the current class for nav links which are clicked.
// Remove the current class from the rest of nav links.
function toggleCurrent(ev) {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("current");
  });
  ev.target.classList.add("current");
}

function runLoader() {
  loaderWrapper.classList.remove("hidden");
}

function hideLoader() {
  loaderWrapper.classList.add("hidden");
}
