/*
 * @Author: saber2pr
 * @Date: 2019-04-07 14:23:15
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 18:06:46
 */
import { subscribe, dispatch, createAction } from '@saber2pr/event'
import { Exception } from './utils/error'

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
  window.history && window.history.pushState(url, null, url)
  window.scroll(0, 0)
  gotoUrl(url, data)
}

const gotoUrl = <Action extends createAction>(
  url: Action['name'],
  data: Action['data']
) => {
  try {
    dispatch((__currentHref = url || __currentHref), data)
  } catch (error) {
    Exception(error, `can not find route:[${url}]`)
  }
}

window.onpopstate = event => gotoUrl(event.state, event.state)
