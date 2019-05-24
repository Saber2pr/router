/*
 * @Author: saber2pr
 * @Date: 2019-05-23 16:50:31
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-05-23 16:55:35
 */
export interface Render {
  (value: any, container: HTMLElement, ...args: any[]): any
}

export namespace Config {
  export let render: Render = null
  export let container: HTMLElement = document.getElementById('root')
  export let defaultRoute: string = '/'
}
