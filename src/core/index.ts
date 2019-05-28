/*
 * @Author: saber2pr
 * @Date: 2019-05-28 15:45:42
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-28 16:06:09
 */
export * from './anchor'
export * from './types'
export * from './var'

import { push, setRoute, rmRoute } from './var'
import { Routes, Cancel } from './types'
import { config } from './config'

export function Router(routes: Routes): Cancel
export function Router(route: string, callback: string | Function): Cancel

export function Router(
  arg1: Routes | string,
  arg2?: string | Function
): Cancel {
  if (typeof arg1 === 'string') {
    setRoute(arg1, arg2)

    push(config.defaultRoute)
    return () => rmRoute(arg1)
  } else {
    Object.keys(arg1).forEach(key => setRoute(key, arg1[key]))

    push(config.defaultRoute)
    return () => Object.keys(arg1).forEach(key => rmRoute(key))
  }
}

export namespace Router {
  export const Config = config
}

window.onpopstate = event => push(event.state)
