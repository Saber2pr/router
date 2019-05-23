/*
 * @Author: saber2pr
 * @Date: 2019-05-23 13:49:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 14:03:55
 */
import { execute } from './execute'
import { Routes } from './types'

let __currentUrl: string = null
const __routes: Routes = {}

export function push(url: string, scrollReset: boolean = true) {
  window.history.pushState(url, null, url)
  scrollReset && window.scroll(0, 0)

  __currentUrl = execute(__routes, url)

  return
}

export function getHref() {
  return __currentUrl
}

export function setRoute(url: string, callback: string | VoidFunction) {
  url in __routes || (__routes[url] = callback)
}

export function rmRoute(url: string) {
  url in __routes && delete __routes[url]
}
