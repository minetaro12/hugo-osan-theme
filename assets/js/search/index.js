const result = document.querySelector(".search-result")
const searchInput = document.querySelector(".search-input")
const searchInputClear = document.querySelector(".search-input-clear")

// データを取得
let data
(async () => {
  const res = await fetch("/index.json")
  // 読み込み中の表示
  result.textContent = "インデックスを読み込んでいます..."
  // 読み込み完了
  data = await res.json()
  result.textContent = ""
  searchInput.removeAttribute("disabled")
  searchInputClear.style.visibility = "visible"
})()

searchInput.addEventListener("input", (e) => {
  result.innerHTML = ""
  if (e.target.value.length > 0) {
    search(e.target.value, data, result)
  }
})

// 検索欄のクリアボタン
searchInputClear.addEventListener("click", () => {
  searchInput.value = ""
  result.innerHTML = ""
})

function search(keyword, data, result) {
  data.posts.forEach((post) => {
    if (post.content.toLowerCase().includes(keyword.toLowerCase()) || post.title.toLowerCase().includes(keyword.toLowerCase())) {
      const item = document.createElement("div")
      const link = document.createElement("a")
      const content = document.createElement("p")

      // リンクとタイトルを表示
      link.href = post.url
      link.innerHTML = post.title.replace(new RegExp(keyword, "gi"), (match) => `<span class="search-highlight">${match}</span>`)

      // 一致部分をハイライト+前後の文字列を表示
      const index = post.content.toLowerCase().indexOf(keyword.toLowerCase())
      const start = index - 20 > 0 ? index - 20 : 0
      const end = index + 20 < post.content.length ? index + 20 : post.content.length
      content.innerHTML = post.content.slice(start, end).replace(new RegExp(keyword, "gi"), (match) => `<span class="search-highlight">${match}</span>`)

      item.appendChild(link)
      item.appendChild(content)
      item.appendChild(document.createElement("hr"))
      result.appendChild(item)
    }
  })
}