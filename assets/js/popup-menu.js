(function(global) {
  "use strict";

  global.document.addEventListener("DOMContentLoaded", () => {
    const menuButton = global.document.getElementById("menu-button");
    const popupMenu = global.document.getElementById("popup-menu");
    const main = global.document.getElementById("main");

    menuButton.addEventListener("click", () => {
      popupMenu.classList.toggle("hidden");
    });

    main.addEventListener("click", (event) => {
      if(event.target.closest("#popup-menu") === null && event.target.closest("#menu-button") === null) {
        popupMenu.classList.add("hidden");
      };
    });
  });
})(globalThis);