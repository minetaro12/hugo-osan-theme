export default () => {
  const switchMode = (changeDark) => {
    if (changeDark) {
      document.documentElement.classList.add("Dark");
      localStorage.setItem("dark", "on");
    } else {
      document.documentElement.classList.remove("Dark");
      localStorage.setItem("dark", "off");
    }
  };

  const lightButton = document.querySelector("#theme-button-light");
  lightButton.addEventListener("click", () => {
    switchMode(false);
  });
  const darkButton = document.querySelector("#theme-button-dark");
  darkButton.addEventListener("click", () => {
    switchMode(true);
  });
};
