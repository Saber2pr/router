/*
 * @Author: saber2pr
 * @Date: 2019-03-07 16:28:01
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-07 16:28:01
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

export const Router = (routes: Routes) => {
  gotoRoute(routes, '/')
  window.onhashchange = event => gotoRoute(routes, event.newURL.split('#')[1])
}
