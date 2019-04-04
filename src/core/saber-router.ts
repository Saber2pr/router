/*
 * @Author: saber2pr
 * @Date: 2019-03-07 16:28:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-02 21:20:08
 */
/**
 * Routes
 *
 * @export
 * @interface Routes
 */
export interface Routes {
  [url: string]: string | (() => void)
}

const __routes: Routes = {}
window.onpopstate = event => gotoRoute(__routes, event.state)
let __currentHref: string = ''

const RouteException = (url: string) => {
  throw new Error(`can not find route:[${url}]`)
}

const gotoRoute = (routes: Routes, start: string): void => {
  let current = routes[start]
  if (typeof current === 'undefined') RouteException(start)
  let url: string
  while (typeof current === 'string') {
    const next = routes[current]
    if (next) {
      url = current
      current = next
    } else {
      RouteException(current)
    }
  }
  __currentHref = url || start
  current()
}
/**
 * push
 *
 * @export
 * @param {string} url
 */
export function push(url: string) {
  window.history.pushState(url, null, url)
  url in __routes ? gotoRoute(__routes, url) : RouteException(url)
}
/**
 * UnUseRoutes
 *
 * @export
 * @interface UnUseRoutes
 */
export interface UnUseRoutes {
  (): void
}
/**
 * useRoutes
 *
 * @export
 * @param {Routes} arg1 routes
 * @returns {UnUseRoutes}
 */
export function useRoutes(arg1: Routes): UnUseRoutes
/**
 * useRoutes
 *
 * @export
 * @param {string} arg1 route-name
 * @param {() => void} arg2 route-to
 * @returns {UnUseRoutes}
 */
export function useRoutes(arg1: string, arg2: string): UnUseRoutes
/**
 * useRoutes
 *
 * @export
 * @param {string} arg1 route-name
 * @param {() => void} arg2 route-callback
 * @returns {UnUseRoutes}
 */
export function useRoutes(arg1: string, arg2: () => void): UnUseRoutes
export function useRoutes(
  arg1: Routes | string,
  arg2?: string | (() => void)
): UnUseRoutes {
  if (typeof arg1 === 'string') {
    arg1 in __routes || (__routes[arg1] = arg2)
    return () => arg1 in __routes && delete __routes[arg1]
  } else {
    Object.keys(arg1).forEach(
      key => key in __routes || (__routes[key] = arg1[key])
    )
    return () =>
      Object.keys(arg1).forEach(key => key in __routes && delete __routes[key])
  }
}
/**
 * getHref
 *
 * @export
 * @returns
 */
export function getHref() {
  return __currentHref
}
