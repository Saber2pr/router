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

export function execute(map: SubscribeMap, route: string) {
  if (!route) return

  route = getMaxLenChildStr(map, route)

  const callback = map[route]

  if (typeof callback === 'undefined') {
    throw new Error(`cannot find route:[${route}]`)
  }

  callback()

  return route
}
