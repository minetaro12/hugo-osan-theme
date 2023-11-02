const button = document.createElement("button")
button.className = "copy-button"
button.innerText = "Copy"

// ハイライトされたコードブロックにボタンを追加
document.querySelectorAll(".highlight").forEach((block) => {
  block.appendChild(button.cloneNode(true))

  block.lastChild.addEventListener("click", () => {
    // テキストのコピー
    navigator.clipboard.writeText(block.firstChild.textContent)

    // ボタンのテキストを変更
    block.lastChild.innerText = "Copied!"

    // 3秒後にボタンのテキストを元に戻す
    setTimeout(() => {
      block.lastChild.innerText = "Copy"
    }, 3000)
  })
})