const home = document.querySelector("#home");
const welcome = document.querySelector(".welcome");
const skillset = document.querySelector(".skillset");
home.addEventListener("scroll", (ev) => {
  const skillsetY = skillset.getBoundingClientRect().y;
  const skillsetHeight = skillset.getBoundingClientRect().height;
  const skillsetBottom = skillsetY + skillsetHeight;
  if (
    skillsetY >= window.innerHeight / 2 ||
    skillsetBottom <= window.innerHeight / 2
  ) {
    skillset.classList.remove("lightenBg");
  } else {
    skillset.classList.add("lightenBg");
  }
});
