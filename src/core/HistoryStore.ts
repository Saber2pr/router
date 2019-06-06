/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:30:08
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-06-04 14:30:08
 */
import { SubscribeMap } from './type'

export namespace HistoryStore {
  const map: SubscribeMap = {}
  export let current: string = null

  export function set(url: string, callback: Function) {
    url in map || (map[url] = callback)
  }

  export function del(url: string) {
    url in map && delete map[url]
  }

  export function get() {
    return map
  }
}
