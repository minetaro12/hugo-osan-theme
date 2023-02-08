const togglepopup = document.querySelector("#menu-button")
const popup = document.querySelector("#popup-menu")
const main = document.querySelector("#main")

togglepopup.addEventListener("click", () => {
  popup.classList.toggle("hide")
})

main.addEventListener("click", (event) => {
  if(event.target.closest("#popup-menu") === null && event.target.closest("#menu-button") === null) {
    popup.classList.add("hide")
  }
})