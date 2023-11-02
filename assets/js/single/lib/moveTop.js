export default () => {
  const wrapper = document.querySelector(".wrapper")

  const movetopButton = document.createElement("button")

  movetopButton.textContent = "▲"
  movetopButton.style.visibility = "hidden"
  movetopButton.style.opacity = 0
  movetopButton.classList.add("movetop-button")
  movetopButton.onclick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // 記事のページの一番下にボタンを追加
  wrapper.appendChild(movetopButton)

  // スクロール量に応じてボタンの表示・非表示を切り替える
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 2) {
      movetopButton.style.visibility = "visible"
      movetopButton.style.opacity = 1
    } else {
      movetopButton.style.visibility = "hidden"
      movetopButton.style.opacity = 0
    }
  })
}