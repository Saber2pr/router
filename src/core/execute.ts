/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:27:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-04 15:24:06
 */
import { SubscribeMap } from './type'

// `/repo/react` matched `/repo` instead of `/`
function getMaxLenChildStr(map: SubscribeMap, query: string = '') {
  const maxLenStrs = Object.keys(map).sort((a, b) => b.length - a.length)
  return maxLenStrs.find(s => (s === '/' ? query === s : query.startsWith(s)))
}

export function execute(map: SubscribeMap, start: string) {
  if (!start) return

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
