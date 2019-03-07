/*
 * @Author: saber2pr
 * @Date: 2019-03-07 16:28:01
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-07 16:28:01
 */
export interface Route {
  path: string
  callback(): void
}

export const Router = (Routes: Route[]) => {
  Routes.find(route => route.path === '/').callback()
  window.onhashchange = event => {
    const params = event.newURL.split('#')[1]
    Routes.find(route => route.path === params).callback()
  }
}
