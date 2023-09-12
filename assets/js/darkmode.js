(function (global) {
  "use strict";

  const switchMode = (changeDark) => {
    if (changeDark) {
      global.document.documentElement.classList.add("dark");
      localStorage.setItem("dark", "on");
      return;
    }
    global.document.documentElement.classList.remove("dark");
    localStorage.setItem("dark", "off");
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