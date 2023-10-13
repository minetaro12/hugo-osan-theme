import showConsole from './showConsole'
import darkMode from './darkMode'
import popupMenu from "./popupMenu"

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