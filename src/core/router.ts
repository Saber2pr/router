/*
 * @Author: saber2pr
 * @Date: 2019-05-23 13:48:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 16:50:08
 */
export interface Routes {
  [url: string]: string | Function
}

export interface Cancel {
  (): void
}

export interface Render {
  (value: any, container: HTMLElement, ...args: any[]): any
}

function execute(routes: Routes, start: string) {
  let current = routes[start]

  if (typeof current === 'undefined') {
    throw new Error(`cannot find route:[${start}]`)
  }

  let url: string
  while (typeof current === 'string') {
    const next = routes[current]

    if (next) {
      url = current
      current = next
    } else {
      throw new Error(`cannot find route:[${current}]`)
    }
  }

  if (Router.render) {
    Router.render(current(), Router.container)
  } else {
    current()
  }

  return url || start
}

namespace RoutesMap {
  const map: Routes = {}
  export let current: string = null

  export function set(url: string, callback: string | Function) {
    url in map || (map[url] = callback)
  }

  export function del(url: string) {
    url in map && delete map[url]
  }

  export function get() {
    return map
  }
}

export function push(url: string, scrollReset: boolean = true) {
  window.history.pushState(url, null, url)
  scrollReset && window.scroll(0, 0)

  RoutesMap.current = execute(RoutesMap.get(), url)

  return
}

export function getHref() {
  return RoutesMap.current
}

export function Router(routes: Routes): Cancel
export function Router(route: string, callback: string | Function): Cancel

export function Router(
  arg1: Routes | string,
  arg2?: string | Function
): Cancel {
  if (typeof arg1 === 'string') {
    RoutesMap.set(arg1, arg2)

    push(Router.defaultRoute)
    return () => RoutesMap.del(arg1)
  } else {
    Object.keys(arg1).forEach(key => RoutesMap.set(key, arg1[key]))

    push(Router.defaultRoute)
    return () => Object.keys(arg1).forEach(key => RoutesMap.del(key))
  }
}

export namespace Router {
  export let render: Render = null
  export let container: HTMLElement = document.getElementById('root')
  export let defaultRoute: string = '/'
}

window.onpopstate = event =>
  (RoutesMap.current = execute(RoutesMap.get(), event.state))
