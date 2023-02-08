const togglepopup = document.querySelector("#menu-button")
const popup = document.querySelector("#popup-menu")

togglepopup.addEventListener("click", () => {
  popup.classList.toggle("hide")
})