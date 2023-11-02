export default () => {
  const menuButton = document.querySelector("#menu-button")
  const popupMenu = document.querySelector("#popup-menu")
  const main = document.querySelector("#main")

  menuButton.addEventListener("click", () => {
    popupMenu.classList.toggle("hide")
  })

  main.addEventListener("click", (event) => {
    if (event.target.closest("#popup-menu") === null && event.target.closest("#menu-button") === null) {
      popupMenu.classList.add("hide")
    }
  })
}