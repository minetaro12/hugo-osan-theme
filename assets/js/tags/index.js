const content = document.querySelector("#content")
const list_term = document.querySelector("#list-terms")

const search = document.createElement("input")
search.setAttribute("type", "text")
search.setAttribute("id", "search-terms-input")
search.placeholder = "Search Tags"
search.setAttribute("autofocus", true)

content.insertBefore(search, list_term)

search.addEventListener("input", () => {
  document.querySelectorAll(".list-terms-item").forEach((item) => {
    if (item.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      item.style.display = "inline-block"
    } else {
      item.style.display = "none"
    }
  })
})