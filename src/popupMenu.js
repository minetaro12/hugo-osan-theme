export default () => {
  // document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const popupMenu = document.getElementById("popup-menu");
  const main = document.getElementById("main");

  menuButton.addEventListener("click", () => {
    popupMenu.classList.toggle("hide");
  });

  main.addEventListener("click", (event) => {
    if (event.target.closest("#popup-menu") === null && event.target.closest("#menu-button") === null) {
      popupMenu.classList.add("hide");
    };
  });
  // });

}