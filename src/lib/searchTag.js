export default () => {
  const content = document.querySelector(".content")
  const list_term = document.querySelector(".list-term")

  const search = document.createElement("input")
  search.setAttribute("type", "text")
  search.classList.add("search-term-input")
  search.placeholder = "Search Tags"

  if (list_term) {
    content.insertBefore(search, list_term)
  }

  search.addEventListener("input", () => {
    document.querySelectorAll(".list-term-item").forEach((item) => {
      if (item.innerText.toLowerCase().includes(search.value.toLowerCase())) {
        item.style.display = "inline-block"
      } else {
        item.style.display = "none"
      }
    })
  })
}