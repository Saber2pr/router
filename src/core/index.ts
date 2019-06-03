/*
 * @Author: saber2pr
 * @Date: 2019-05-23 13:48:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-03 20:22:08
 */
export interface SubscribeMap {
  [url: string]: string | Function
}

export interface Cancel {
  (): void
}

// `/repo/react` matched `/repo` instead of `/`
function getMaxLenChildStr(map: SubscribeMap, query: string) {
  const maxLenStrs = Object.keys(map).sort((a, b) => b.length - a.length)
  return maxLenStrs.find(s => (s === '/' ? query === s : query.startsWith(s)))
}

function execute(map: SubscribeMap, start: string) {
  start = getMaxLenChildStr(map, start)
  let current = map[start]

  if (typeof current === 'undefined') {
    throw new Error(`cannot find route:[${start}]`)
  }

  let url: string
  while (typeof current === 'string') {
    current = getMaxLenChildStr(map, current)
    const next = map[current]

    if (next) {
      url = current
      current = next
    } else {
      throw new Error(`cannot find route:[${current}]`)
    }
  }

  current()

  return url || start
}

namespace HistoryStore {
  const map: SubscribeMap = {}
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

namespace History {
  export function push(url: string, scrollReset: boolean = true) {
    HistoryStore.current = execute(HistoryStore.get(), url)

    window.history.pushState(HistoryStore.current, null, HistoryStore.current)
    scrollReset && window.scroll(0, 0)
  }

  export function getHref() {
    return HistoryStore.current
  }

  export function subscribe(routes: SubscribeMap): Cancel
  export function subscribe(path: string, callback: string | Function): Cancel

  export function subscribe(
    arg1: SubscribeMap | string,
    arg2?: string | Function
  ): Cancel {
    if (typeof arg1 === 'string') {
      HistoryStore.set(arg1, arg2)

      return () => HistoryStore.del(arg1)
    } else {
      Object.keys(arg1).forEach(key => HistoryStore.set(key, arg1[key]))

      return () => Object.keys(arg1).forEach(key => HistoryStore.del(key))
    }
  }
}

export default History

window.onpopstate = event =>
  (HistoryStore.current = execute(HistoryStore.get(), event.state))
