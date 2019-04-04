/*
 * @Author: saber2pr
 * @Date: 2019-03-07 16:28:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-02 21:20:08
 */
export interface Routes {
  [url: string]: string | ((url: string) => void)
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
  current(url || start)
}

let __routes: Routes

export const Router = (routes: Routes, start: string = '/') => {
  __routes = routes
  __routes[start] && push(start)
  window.onpopstate = event => gotoRoute(__routes, event.state)
}

export const push = (url: string) => {
  window.history.pushState(url, null, url)
  if (!__routes) {
    throw new Error('please register routes first!')
  }
  gotoRoute(__routes, url)
}
