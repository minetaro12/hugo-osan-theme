export default () => {
  document.querySelectorAll(".post-content .img-link").forEach((element) => {
    element.style.cursor = "zoom-in"
    element.addEventListener("click", (event) => {
      // リンク遷移をキャンセル
      event.preventDefault()

      // すでにポップアップされている場合は何もしない
      if (document.querySelector(".img-popup")) {
        return
      }

      // ポップアップ表示用の要素を作成
      const imgPopup = document.createElement("div")
      imgPopup.classList.add("img-popup")
      imgPopup.addEventListener("click", () => {
        imgPopup.remove()
      })

      // 画像の要素を作成
      const img = document.createElement("img")
      img.src = element.href
      img.alt = element.querySelector("img").alt

      imgPopup.appendChild(img)
      document.body.appendChild(imgPopup)
    })
  })

}