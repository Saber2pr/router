/*
 * @Author: saber2pr
 * @Date: 2019-05-23 13:53:46
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 16:51:50
 */
import { push, setRoute, rmRoute } from './var'
import { Routes, Cancel } from './types'
import { Config } from './config'

export function Router(routes: Routes): Cancel
export function Router(route: string, callback: string | Function): Cancel

export function Router(
  arg1: Routes | string,
  arg2?: string | Function
): Cancel {
  if (typeof arg1 === 'string') {
    setRoute(arg1, arg2)

    push(Config.defaultRoute)
    return () => rmRoute(arg1)
  } else {
    Object.keys(arg1).forEach(key => setRoute(key, arg1[key]))

    push(Config.defaultRoute)
    return () => Object.keys(arg1).forEach(key => rmRoute(key))
  }
}

window.onpopstate = event => push(event.state)
