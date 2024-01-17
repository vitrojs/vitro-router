/* IMPORT */

import { createContext } from 'vitro'
import type { RouterState } from '../types'

/* MAIN */

const State = createContext<RouterState>()

/* EXPORT */

export default State
