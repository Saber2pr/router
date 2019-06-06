/*
 * @Author: saber2pr
 * @Date: 2019-06-04 14:27:17
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-06-06 14:20:37
 */
import { SubscribeMap } from './type'
import memo from '@saber2pr/memo'

// `/repo/react` matched `/repo` instead of `/`
function getMaxLenChildStr(map: SubscribeMap, query: string = '') {
  const maxLenStrs = Object.keys(map).sort((a, b) => b.length - a.length)
  return maxLenStrs.find(s => (s === '/' ? query === s : query.startsWith(s)))
}

// memorize
const get = memo(getMaxLenChildStr)

export function execute(map: SubscribeMap, route: string) {
  if (!route) return

  try {
    route = get(map, route)
    map[route]()
  } catch (error) {
    route = getMaxLenChildStr(map, route)
    map[route]()
  }

  return route
}
