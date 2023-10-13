import showConsole from './showConsole'
import darkMode from './darkMode'
import popupMenu from "./popupMenu"
import copyButton from './copyButton'

import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'

// swupの初期化
const swup = new Swup({
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