(function(global) {
  "use strict";

  const switchMode = (changeDark) => {
      if (changeDark) {
          global.document.documentElement.classList.add("Dark");
          localStorage.setItem("dark", "on");
          return;
      }
      global.document.documentElement.classList.remove("Dark");
      localStorage.removeItem("dark");
  };

  global.document.addEventListener("DOMContentLoaded", () => {
      const lightButton = global.document.getElementById("theme-button-light");
      lightButton.addEventListener("click", () => {
          switchMode(false);
      });
      const darkButton = global.document.getElementById("theme-button-dark");
      darkButton.addEventListener("click", () => {
          switchMode(true);
      });
  });
})(globalThis);