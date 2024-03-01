// Show Menu
const showMenu = (toggleId, NavId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(NavId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
    });
  }
};
showMenu("nav_toggle", "nav_menu");

// Remove Menu When Click On Each Nav Link
const navLink = document.querySelectorAll(".nav_link");

function linkActive() {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show_menu");
}
navLink.forEach((h) => h.addEventListener("click", linkActive));

//
//
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  }
});
