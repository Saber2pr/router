/*
 * @Author: saber2pr
 * @Date: 2019-03-07 16:28:01
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-02 17:56:11
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

export const Router = (routes: Routes) => (__routes = routes)

export const push = (url: string) => {
  window.history.pushState(null, null, url)
  if (!__routes) {
    throw new Error('please register routes first!')
  }
  gotoRoute(__routes, url)
}
