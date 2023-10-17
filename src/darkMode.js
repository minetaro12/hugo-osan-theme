export default () => {
  const switchMode = (changeDark) => {
    if (changeDark) {
      document.documentElement.classList.add("Dark")
      localStorage.setItem("dark", "on")
      return
    }
    document.documentElement.classList.remove("Dark")
    localStorage.setItem("dark", "off")
  }

  const lightButton = document.getElementById("theme-button-light")
  lightButton.addEventListener("click", () => {
    switchMode(false)
  })
  const darkButton = document.getElementById("theme-button-dark")
  darkButton.addEventListener("click", () => {
    switchMode(true)
  })
}