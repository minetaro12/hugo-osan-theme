import showConsole from "./lib/showConsole"
import darkMode from "./lib/darkMode"
import popupMenu from "./lib/popupMenu"

import Swup from "swup"
import SwupHeadPlugin from "@swup/head-plugin"
import SwupScriptsPlugin from "@swup/scripts-plugin"
import SwupProgressPlugin from "@swup/progress-plugin"

// swupの初期化
const swup = new Swup({
  animateHistoryBrowsing: true,
  plugins: [
    new SwupHeadPlugin(),
    new SwupScriptsPlugin({ optin: true }),
    new SwupProgressPlugin()
  ]
})

// コンソールに表示
showConsole()

// ダークモードのボタンハンドラ
darkMode()

// ポップアップメニューのボタンハンドラ
popupMenu()