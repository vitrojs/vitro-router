/* IMPORT */

import browser from '../backends/browser'
import type { F, OR, RouterNavigate, RouterPath } from '../types'
import { castPath } from '../utils'

/* MAIN */

const path = (routerPath?: F<RouterPath>): [OR<RouterPath>, RouterNavigate] => {
  const location = globalThis.location
  const browserPath = () =>
    castPath(
      location ? `${location.pathname}${location.search}${location.hash}` : '/',
    )

  return browser(browserPath, routerPath, { history: true, resetScroll: true })
}

/* EXPORT */

export default path
