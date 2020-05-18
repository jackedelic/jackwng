const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu"); // nav
const menuBranding = document.querySelector(".menu-branding");
const menuNavList = document.querySelector(".menu-nav-list");
const navItems = document.querySelectorAll(".nav-item");

var showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

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
