/*
 * @Author: saber2pr
 * @Date: 2019-04-07 14:23:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 13:39:41
 */
import { subscribe, dispatch, createAction } from '@saber2pr/event'
import { Exception } from './utils/error'
import { Browser } from './browser'
import { isBrowser } from './utils/validators'

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
  [url: string]: <Action extends createAction>(data: Action['data']) => void
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
 * @template Action
 * @param {string} url
 * @param {(data?: Action) => void} todo
 * @returns
 */
export function useRoute<Action extends createAction>(
  url: Action['name'],
  todo: (data?: Action['data']) => void
): UnUseRoute {
  return subscribe(url, todo)
}
/**
 * push
 *
 * @export
 * @template Action
 * @param {Action['name']} url
 */
export function push<Action extends createAction>(url: Action['name']): void
/**
 * push
 *
 * @export
 * @template Action
 * @param {Action['name']} url
 * @param {Action['data']} data
 */
export function push<Action extends createAction>(
  url: Action['name'],
  data: Action['data']
): void
export function push<Action extends createAction>(
  url: Action['name'],
  data?: Action['data']
): void {
  if (isBrowser()) {
    try {
      Browser.pushState(url, null, url)
      Browser.scroll(0, 0)
    } catch (error) {
      Exception(error, `cannot pushState:${url}`)
    }
  }
  gotoUrl(url, data)
}

const gotoUrl = <Action extends createAction>(
  url: Action['name'],
  data: Action['data']
) => {
  try {
    dispatch((__currentHref = url), data)
  } catch (error) {
    Exception(error, `can not find route:[${url}]`)
  }
}

isBrowser() && Browser.onpopstate(event => gotoUrl(event.state, event.state))
