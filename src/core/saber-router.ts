/*
 * @Author: saber2pr
 * @Date: 2019-03-07 16:28:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-02 21:20:08
 */
export interface Routes {
  [url: string]: string | (() => void)
}

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
  __currentUrl = url || start
  current()
}

let __routes: Routes
let __currentUrl: string

export const Router = (routes: Routes, start: string = '/') => {
  __routes = routes
  start in __routes ? dispatch(start) : dispatch(Object.keys(__routes)[0])
  window.onpopstate = event => gotoRoute(__routes, event.state)
}

export const dispatch = (url: string) => {
  window.history.pushState(url, null, url)
  if (!__routes) {
    throw new Error('please register routes first!')
  }
  gotoRoute(__routes, url)
}

export const getState = () => __currentUrl
