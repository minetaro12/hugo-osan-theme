import showConsole from "./showConsole"
import darkMode from "./darkMode"
import popupMenu from "./popupMenu"
import copyButton from "./copyButton"
import movetopButton from "./movetopButton"
import imgPopup from "./imgPopup"

import Swup from "swup"
import SwupHeadPlugin from "@swup/head-plugin"

// swupの初期化
const swup = new Swup({
  animateHistoryBrowsing: true,
  plugins: [new SwupHeadPlugin()]
})

// コンソールに表示
showConsole()

// ダークモードのボタンハンドラ
darkMode()

// ポップアップメニューのボタンハンドラ
popupMenu()

// コピーボタンの追加
copyButton()
swup.hooks.on("page:view", () => {
  copyButton()
})

// トップへ戻るボタンの追加
movetopButton()
swup.hooks.on("page:view", () => {
  movetopButton()
})

// 画像のポップアップ
imgPopup()
swup.hooks.on("page:view", () => {
  imgPopup()
})