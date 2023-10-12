import console from './console'
import darkmode from './darkmode'
import popupMenu from "./popupmenu"

import Swup from 'swup'
import SwupHeadPlugin from '@swup/head-plugin'

// swupの初期化
const swup = new Swup({
  plugins: [new SwupHeadPlugin()]
})


console()
darkmode()
popupMenu()