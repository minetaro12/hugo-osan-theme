const toggle = document.querySelector("#theme-button")
const docstyle = document.querySelector(":root")

const toggleTheme = (theme) => {
  if(theme == "dark") {
    docstyle.style.setProperty("--a-color", "var(--a-d-color)")
    docstyle.style.setProperty("--a-hover-color", "var(--a-hover-d-color)")
    docstyle.style.setProperty("--bg-color", "var(--bg-d-color)")
    docstyle.style.setProperty("--fg-color", "var(--fg-d-color)")
    toggle.innerHTML = 'light'
  } else {
    docstyle.style.setProperty("--a-color", "var(--a-l-color)")
    docstyle.style.setProperty("--a-hover-color", "var(--a-hover-l-color)")
    docstyle.style.setProperty("--bg-color", "var(--bg-l-color)")
    docstyle.style.setProperty("--fg-color", "var(--fg-l-color)")
    toggle.innerHTML = 'dark'
  }
}

toggle.addEventListener("click", () => {
  if(localStorage.getItem("theme") == "dark") {
    toggleTheme("light")
    localStorage.setItem("theme", "light")
  } else {
    toggleTheme("dark")
    localStorage.setItem("theme", "dark")
  }
})

if(localStorage.getItem("theme") == null) {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches == true) {
    toggleTheme("dark")
  }
} else if(localStorage.getItem("theme") == "dark") {
  toggleTheme("dark")
}