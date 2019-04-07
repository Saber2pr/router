/*
 * @Author: saber2pr
 * @Date: 2019-04-07 14:23:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-07 14:45:21
 */
import { subscribe, dispatch } from '@saber2pr/event'

let __currentHref: string = ''
/**
 * get the current url.
 *
 * @export
 * @returns
 */
export function getHref() {
  return __currentHref
}
/**
 * Routes
 *
 * @export
 * @interface Routes
 */
export interface Routes {
  [url: string]: (data: any) => void
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
 * @param {Routes} routes
 * @returns
 */
export function useRoutes(routes: Routes): UnUseRoutes {
  const unsubscribes = Object.keys(routes).map(url =>
    useRoute(url, routes[url])
  )
  return () => unsubscribes.forEach(u => u())
}
/**
 * UnUseRoute
 *
 * @export
 * @interface UnUseRoute
 */
export interface UnUseRoute {
  (): void
}
/**
 * useRoute
 *
 * @export
 * @template T
 * @param {string} url
 * @param {(data?: T) => void} todo
 * @returns
 */
export function useRoute<T>(url: string, todo: (data?: T) => void): UnUseRoute {
  return subscribe(url, todo)
}
/**
 * push
 *
 * @export
 * @template T
 * @param {string} url
 * @param {T} [data]
 */
export function push<T>(url: string): void
export function push<T>(url: string, data: T): void
export function push<T>(url: string, data?: T): void {
  window.history && window.history.pushState(url, null, url)
  gotoUrl(url, data)
}

window.onpopstate = event => gotoUrl(event.state, event.state)

const gotoUrl = (url: string, data: any) => {
  try {
    try {
      dispatch((__currentHref = url), data)
    } catch (error) {
      throw new Error(`can not find route:[${url}]`)
    }
  } catch (error) {
    console.log(error)
  }
}
