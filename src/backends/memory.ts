/* IMPORT */

import browser from '../backends/browser'
import type { F, OR, RouterNavigate, RouterPath } from '../types'

/* MAIN */

const memory = (
  routerPath?: F<RouterPath>,
): [OR<RouterPath>, RouterNavigate] => {
  return browser('/', routerPath, { resetScroll: true })
}

/* EXPORT */

export default memory
