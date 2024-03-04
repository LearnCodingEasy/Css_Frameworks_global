// Show Menu
// Toggle Menu On Click  
const showMenu = (toggleId, NavId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(NavId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active_body");
    });
  }
};
showMenu("nav_toggle", "body");
