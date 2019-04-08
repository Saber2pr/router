/*
 * @Author: saber2pr
 * @Date: 2019-04-08 12:56:32
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-04-08 13:10:39
 */
export namespace Browser {
  /**
   * pushState
   *
   * @export
   * @param {string} url
   */
  export function pushState(data: any, title: string, url?: string) {
    if (window.history) {
      window.history.pushState(data, title, url)
    } else {
      throw new Error('the browser has not supported for history!')
    }
  }
  /**
   * scroll
   *
   * @export
   * @param {number} x
   * @param {number} y
   */
  export function scroll(x: number, y: number) {
    window.scroll && window.scroll(x, y)
  }
  /**
   * onpopstate
   *
   * @export
   * @param {(this: WindowEventHandlers, ev: PopStateEvent) => any} callback
   */
  export function onpopstate(
    callback: (this: WindowEventHandlers, ev: PopStateEvent) => any
  ) {
    window.onpopstate = callback
  }
}
