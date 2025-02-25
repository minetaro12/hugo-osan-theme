export default () => {
  const menuButton = document.querySelector("#menu-button")
  const popupMenu = document.querySelector("#popup-menu")

  menuButton.addEventListener("click", () => {
    popupMenu.classList.toggle("open")
  })

  popupMenu.addEventListener("click", (event) => {
    if (event.target.closest("#popup-menu-content") == null) {
      popupMenu.classList.remove("open")
    }
  })
}
