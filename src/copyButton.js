export default () => {
  const button = document.createElement("button")
  button.className = "copy-button"
  button.innerText = "Copy"

  // ハイライトされたコードブロックにボタンを追加
  document.querySelectorAll(".highlight").forEach((block) => {
    block.appendChild(button.cloneNode(true))

    block.lastChild.addEventListener("click", () => {
      // テキストのコピー
      navigator.clipboard.writeText(block.firstChild.textContent)

      // ボタンのクラス名とテキストを変更
      block.lastChild.className = "copy-button copy-button-copied"
      block.lastChild.innerText = "Copied!"

      // 3秒後にボタンを元に戻す
      setTimeout(() => {
        block.lastChild.className = "copy-button"
        block.lastChild.innerText = "Copy"
      }, 3000)
    })
  })
}