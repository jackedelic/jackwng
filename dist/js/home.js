const home = document.querySelector("#home");
const welcome = document.querySelector(".welcome");
const skillset = document.querySelector(".skillset");
home.addEventListener("scroll", (ev) => {
  const skillsetY = skillset.getBoundingClientRect().y;
  const skillsetHeight = skillset.getBoundingClientRect().height;
  const skillsetBottom = skillsetY + skillsetHeight;
  console.log("home is scrolling");
  if (
    (skillsetY >= 0 && skillsetY <= window.innerHeight / 2) ||
    (skillsetBottom >= window.innerHeight / 2 &&
      skillsetBottom <= window.innerHeight)
  ) {
    console.log("adding lightenBg");
    skillset.classList.add("lightenBg");
  } else {
    // console.log("removing lightenBg");
    skillset.classList.remove("lightenBg");
  }
});
