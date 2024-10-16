// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambuerger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar
const hambuerger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hambuerger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
