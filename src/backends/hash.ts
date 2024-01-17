/* IMPORT */

import browser from '../backends/browser'
import type { F, OR, RouterNavigate, RouterPath } from '../types'
import { castPath } from '../utils'

/* MAIN */

const hash = (routerPath?: F<RouterPath>): [OR<RouterPath>, RouterNavigate] => {
  const location = globalThis.location
  const browserPath = () =>
    castPath(location ? location.hash.replace(/^#+/, '') : '/')

  return browser(browserPath, routerPath, {
    history: true,
    historyHash: true,
    resetScroll: true,
  })
}

/* EXPORT */

export default hash
